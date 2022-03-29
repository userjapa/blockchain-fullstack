const Wallet          = require('../../wallet'),
      Transaction     = require('../../wallet/transaction'),
      TransactionPool = require('../../wallet/transaction-pool'),
      Blockchain      = require('../../blockchain')

describe('TransactionPool', () => {
  let transactionPool,
      transaction,
      senderWallet

  beforeEach(() => {
    senderWallet    = new Wallet()
    transactionPool = new TransactionPool()
    transaction     = new Transaction({
      senderWallet,
      recipient: 'fake-recipient',
      amount: 50
    })
  })

  describe('setTransaction()', () => {
    it('adds a transaction', () => {
      transactionPool.setTransaction(transaction)

      expect(transactionPool.transactionMap[transaction.id])
        .toBe(transaction)
    })
  })

  describe('existsTransaction()', () => {
    it('returns an existing transaction given an input address', () => {
      transactionPool.setTransaction(transaction)

      expect(transactionPool.existsTransaction({ inputAddress: senderWallet.publicKey }))
        .toBe(transaction)
    })
  })

  describe('validTransactions()', () => {
    let validTransactions,
        errorMock

    beforeEach(() => {
      validTransactions = []
      errorMock         = jest.fn()

      global.console.error = errorMock

      for (let x = 0; x < 10; x++) {
        transaction = new Transaction({
          senderWallet,
          recipient: 'any-recipient',
          amount: 30
        })

        if (x % 3 === 0) {
          transaction.input.amount = 999999
        } else if (x % 3 == 1) {
          transaction.input.signature = new Wallet().sign('foo')
        } else {
          validTransactions.push(transaction)
        }

        transactionPool.setTransaction(transaction)
      }
    })

    it('returns valid transaction', () => {
      expect(transactionPool.validTransactions()).toEqual(validTransactions)
    })

    it('logs errors for the invalid transactions', () => {
      transactionPool.validTransactions()
      expect(errorMock).toHaveBeenCalled()
    })
  })

  describe('clear()', () => {
    it('clears the transactions', () => {
      transactionPool.clear()

      expect(transactionPool.transactionMap).toEqual({})
    })
  })

  describe('clearBlockchainTransactions()', () => {
    it('clears the pool of any existing blockchain transaction', () => {
      const blockchain = new Blockchain()

      const expectedTransactionMap = {}

      for (let x = 0; x < 6; x++) {
        const transaction = new Wallet().createTransaction({
          recipient: 'foo',
          amount: 20
        })

        transactionPool.setTransaction(transaction)

        if (x % 2 == 0) {
          blockchain.addBlock({
            data: [
              transaction
            ]
          })
        } else {
          expectedTransactionMap[transaction.id] = transaction
        }
      }

      transactionPool.clearBlockchainTransactions({ chain: blockchain.chain })

      expect(transactionPool.transactionMap).toEqual(expectedTransactionMap)
    })
  })
})
