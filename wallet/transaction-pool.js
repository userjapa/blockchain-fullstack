const Transaction = require('./transaction')

class TransactionPool {
  constructor () {
    this.transactionMap = {}
  }

  clear () {
    this.transactionMap = {}
  }

  setTransaction (transaction) {
    this.transactionMap[transaction.id] = transaction
  }

  setMap (transactionMap) {
    this.transactionMap = transactionMap
  }

  existsTransaction ({ inputAddress }) {
    const transactions = Object.values(this.transactionMap)

    return transactions.find(transaction => transaction.input.address === inputAddress)
  }

  validTransactions () {
    return Object.values(this.transactionMap).filter(t => Transaction.validTransaction(t))
  }

  clearBlockchainTransactions ({ chain }) {
    for (let x = 0; x < chain.length; x++) {
      const block = chain[x]

      for (let transaction of block.data) {
        if (this.transactionMap[transaction.id]) {
          delete this.transactionMap[transaction.id]
        }
      }
    }
  }
}

module.exports = TransactionPool
