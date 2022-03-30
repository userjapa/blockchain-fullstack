const express = require('express'),
      request = require('request')

const Blockchain       = require('../blockchain'),
      Wallet           = require('../wallet'),
      TransactionPool  = require('../wallet/transaction-pool'),
      TransactionMiner = require('../wallet/transaction-miner'),
      PubSub           = require('../pubsub')

const {
  HTTP_PORT,
  ROOT_ADDRESS,
  GENERATE_PEER_PORT,
  RESPONSE_TYPES
} = require('../config')

class HttpServer {
  constructor () {
    this.app = express()

    this.blockchain       = new Blockchain()
    this.wallet           = new Wallet()
    this.transactionPool  = new TransactionPool()
    this.pubsub           = new PubSub({
      blockchain: this.blockchain,
      transactionPool: this.transactionPool
    })
    this.transactionMiner = new TransactionMiner({
      blockchain: this.blockchain,
      transactionPool: this.transactionPool,
      wallet: this.wallet,
      pubsub: this.pubsub
    })

    this.port            = HTTP_PORT
    this.peerPort        = !GENERATE_PEER_PORT ? null : Math.ceil(Math.random() * 1000)

    this.setMiddlewares()
    this.setRoutes()
  }

  setMiddlewares () {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }

  setRoutes () {
    /*
    * route /api
    */
    const apiRoute = express.Router()

    apiRoute.get('/blocks', (req, res) => {
      res.json({
        type: RESPONSE_TYPES.SUCCESS,
        data: this.blockchain.chain
      })
    })

    apiRoute.post('/mine', (req, res) => {
      const { data } = req.body

      this.blockchain.addBlock({
        data
      })

      this.pubsub.broadcastChain()

      res.redirect('/api/blocks')
    })

    apiRoute.post('/transact', (req, res) => {
      const { amount, recipient } = req.body

      let transaction = this.transactionPool.existsTransaction({
        inputAddress: this.wallet.publicKey
      })

      try {
        if (transaction) {
          transaction.update({
            senderWallet: this.wallet,
            recipient,
            amount
          })
        } else {
          transaction = this.wallet.createTransaction({
            recipient,
            amount,
            chain: this.blockchain.chain
          })
        }
      } catch (error) {
        return res.status(400).json({ type: RESPONSE_TYPES.ERROR, message: error.message })
      }

      this.transactionPool.setTransaction(transaction)

      this.pubsub.broadcastTransaction(transaction)

      console.log('transactionPool', this.transactionPool)

      res.json({
        type: RESPONSE_TYPES.SUCCESS,
        data: transaction
      })
    })

    apiRoute.get('/transaction-pool-map', (req, res) => {
      res.json({
        type: RESPONSE_TYPES.SUCCESS,
        data: this.transactionPool.transactionMap
      })
    })

    apiRoute.get('/mine-transactions', (req, res) => {
      this.transactionMiner.mineTransactions()

      res.redirect('/api/blocks')
    })

    apiRoute.get('/wallet-info', (req, res) => {
      const address = this.wallet.publicKey

      res.json({
        type: RESPONSE_TYPES.SUCCESS,
        data: {
          address,
          balance: Wallet.calculateBalance({
            chain: this.blockchain.chain,
            address
          })
        }
      })
    })

    this.app.use('/api', apiRoute)
  }

  async syncWithRootState () {
    request({ url: `${ROOT_ADDRESS}/api/blocks` }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const rootChain = JSON.parse(body).data

        console.log('replace chain on a sync with', rootChain)

        this.blockchain.replaceChain(rootChain)
      }
    })

    request({ url: `${ROOT_ADDRESS}/api/transaction-pool-map` }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const rootTransactionPoolMap = JSON.parse(body).data

        console.log('replace transaction pool map on a sync with', rootTransactionPoolMap)

        this.transactionPool.setMap(rootTransactionPoolMap)
      }
    })
  }

  listen () {
    const PORT = this.peerPort || this.port

    this.app.listen(PORT, () => {
      console.log(`Running at port ${PORT}`)
      this.pubsub.connect()

      if (this.port !== PORT)
        this.syncWithRootState()
    })
  }
}

module.exports = HttpServer
