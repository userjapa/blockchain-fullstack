const Transaction = require('./transaction')

const { INITIAL_BALANCE } = require('../config')

const {
  ec,
  cryptoHash
} = require('../util')

class Wallet {
  constructor () {
    this.balance   = INITIAL_BALANCE
    this.keyPair   = ec.genKeyPair()
    this.publicKey = this.keyPair.getPublic().encode('hex')
  }

  sign (data) {
    return this.keyPair.sign(cryptoHash(data))
  }

  createTransaction ({ recipient, amount, chain }) {
    if (chain) {
      this.balance = Wallet.calculateBalance({
        chain,
        address: this.publicKey
      })
    }

    if (amount > this.balance)
      throw new Error('Amount exceeds balance')

    return new Transaction({ senderWallet: this, recipient, amount })
  }

  static calculateBalance ({ chain, address }) {
    let hasConductedTransaction = false,
        outputTotal             = 0

    for (let x = chain.length - 1; x > 0; x--) {
      const block = chain[x]

      for (let transaction of block.data) {
        if (transaction.input.address === address)
          hasConductedTransaction = true

        const addressOutput = transaction.outputMap[address]

        if (addressOutput) {
          outputTotal = outputTotal + addressOutput
        }
      }

      if (hasConductedTransaction)
        break
    }

    return hasConductedTransaction ? outputTotal : INITIAL_BALANCE + outputTotal
  }
}

module.exports = Wallet
