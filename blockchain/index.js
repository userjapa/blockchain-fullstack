const Block       = require('./block'),
      Wallet      = require('../wallet')
      Transaction = require('../wallet/transaction')

const { cryptoHash } = require('../util')

const { REWARD_INPUT, MINING_REWARD } = require('../config')

class Blockchain {
  constructor () {
    this.chain = [ Block.genesis() ]
  }

  addBlock ({ data }) {
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data
    })

    this.chain.push(newBlock)
  }

  replaceChain (chain, validateTransactions, onSuccess) {
    if (chain.length <= this.chain.length) {
      console.error('The incoming chain must be longer')
      return
    }

    if (!Blockchain.isValidChain(chain)) {
      console.error('The incoming chain must be valid')
      return
    }

    if (validateTransactions && !this.validTransactionData({ chain })) {
      console.error('The incoming chain has invalid data')
      return
    }

    if (typeof onSuccess === 'function')
      onSuccess()

    console.log('replacing chain with', chain)
    this.chain = chain
  }

  validTransactionData ({ chain }) {
    for (let x = 0; x < chain.length; x++) {
      const block = chain[x]

      const transactionSet = new Set()

      let rewardTransactionCount = 0

      for (let transaction of block.data) {
        if (transaction.input.address === REWARD_INPUT.address) {
          rewardTransactionCount++

          if (rewardTransactionCount > 1) {
            console.error('Miner rewards exceed limit')
            return false
          }

          if (Object.values(transaction.outputMap)[0] !== MINING_REWARD) {
            console.error('Miner reward amount is invalid')
            return false
          }
        } else {
          if (!Transaction.validTransaction(transaction)) {
            console.error('Invalid transaction')
            return false
          }

          const trueBalance = Wallet.calculateBalance({
            chain: this.chain,
            address: transaction.input.address
          })

          if (transaction.input.amount !== trueBalance) {
            console.error('Invalid input amount')
            return false
          }

          if (transactionSet.has(transaction)) {
            console.error('An identical transaction appears more then once in the block')
            return false
          } else {
            transactionSet.add(transaction)
          }
        }
      }
    }

    return true
  }

  static isValidChain (chain) {
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false

    for (let x = 1; x < chain.length; x++) {
      const actualLashHash = chain[x - 1].hash,
            lastDifficulty = chain[x - 1].difficulty

      const {
        timestamp,
        lastHash,
        hash,
        data,
        nonce,
        difficulty
      } = chain[x]

      if (lastHash !== actualLashHash)
        return false

      const validatedHash = cryptoHash(timestamp, lastHash, data, nonce, difficulty)

      if (hash !== validatedHash)
        return false

      if ((lastDifficulty - difficulty) > 1)
        return false
    }

    return true
  }
}

module.exports = Blockchain
