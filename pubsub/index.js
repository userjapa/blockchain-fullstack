const { createClient } = require('redis')

const { REDIS_CONFIG, CHANNELS } = require('../config')

class PubSub {
  constructor ({ blockchain, transactionPool }) {
    this.blockchain      = blockchain
    this.transactionPool = transactionPool

    this.publisher  = createClient(REDIS_CONFIG)
    this.subscriber = createClient(REDIS_CONFIG)
  }

  async connect () {
    await this.publisher.connect()
    await this.subscriber.connect()

    this.subscribeToChannels()
  }

  subscribeToChannels () {
    Object.values(CHANNELS).forEach(channel => {
      this.subscriber.pSubscribe(channel, (message, channel) => {
        this.handleMessage({
          channel,
          message
        })
      })
    })
  }

  handleMessage ({ channel, message }) {
    console.log(`Message received. Channel: ${channel}. Message: ${message}.`)

    const parsed = JSON.parse(message)

    switch (channel) {
      case CHANNELS.BLOCKCHAIN:
        this.blockchain.replaceChain(parsed, true, () => {
          this.transactionPool.clearBlockchainTransactions({
            chain: parsed
          })
        })
        break
      case CHANNELS.TRANSACTION:
        this.transactionPool.setTransaction(parsed)
        break
    }
  }

  publish ({ channel, message }) {
    this.subscriber.pUnsubscribe(channel).then(() => {
      this.publisher.publish(channel, message).then(() => {
        this.subscriber.pSubscribe(channel, (message, channel) => {
          this.handleMessage({
            channel,
            message
          })
        })
      })
    })
  }

  broadcastChain () {
    console.log('broadcastChain')
    this.publish({
      channel: CHANNELS.BLOCKCHAIN,
      message: JSON.stringify(this.blockchain.chain)
    })
  }

  broadcastTransaction (transaction) {
    this.publish({
      channel: CHANNELS.TRANSACTION,
      message: JSON.stringify(transaction)
    })
  }
}

module.exports = PubSub
