const PubNub = require('pubnub')

const { PUBNUB_CONFIG, CHANNELS } = require('../config')

class PubSub {
  constructor () {
    this.pubnub = new PubNub(PUBNUB_CONFIG)

    this.pubnub.subscribe({
      channels: Object.values(CHANNELS)
    })

    this.pubnub.addListener({
      message: ({ channel, message }) => {
        console.log(`Message received. Channel: ${channel}. Message: ${message}.`)
      }
    })
  }

  publish (channel, message) {
    this.pubnub.publish({
      channel,
      message
    })
  }
}

module.exports = PubSub
