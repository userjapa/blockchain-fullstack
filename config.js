const INITIAL_DIFFICULTY = process.env.INITIAL_DIFFICULTY || 3, // Integer
      MINE_RATE          = parseInt(process.env.MINE_RATE || 1000), // Milliseconds
      HTTP_PORT          = process.env.PORT || 3000,
      ROOT_ADDRESS       = process.env.ROOT_ADDRESS || `http://localhost:3000`,
      IS_NODE            = process.env.IS_NODE !== 'true' ? false : true,
      REWARD_ADDRESS     = process.env.REWARD_ADDRESS || '*authorized-reward*',
      INITIAL_BALANCE    = 1000,
      MINING_REWARD      = 50

const REDIS_CONFIG = {
  url: process.env.REDIS_URL || 'redis://:pb51de23ea9bbbf1cbe98ef011fbe0f07a1b8a1a7fa8d90eab113561d24fd9814@ec2-52-21-27-44.compute-1.amazonaws.com:20319',
}

const PUBNUB_CONFIG = {
  publishKey: process.env.PUBNUB_PUSBLISH_KEY || 'pub-c-1b538184-f71e-456c-a445-256de083d0e1',
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY || 'sub-c-8498c0ae-aeea-11ec-ab7a-66fb1d4f8b52',
  uuid: process.env.PUBNUB_UUID || '2749c1a6-af75-11ec-b909-0242ac120002'
}

const GENESIS_DATA = {
  timestamp: 1,
  lastHash: '----------------',
  hash: 'first-hash',
  data: [],
  nonce: 0,
  difficulty: INITIAL_DIFFICULTY,
}

const CHANNELS = {
  BLOCKCHAIN: 'BLOCKCHAIN',
  TRANSACTION: 'TRANSACTION'
}

const RESPONSE_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success'
}

const REWARD_INPUT = {
  address: REWARD_ADDRESS
}

module.exports = {
  MINE_RATE,
  HTTP_PORT,
  ROOT_ADDRESS,
  IS_NODE,
  INITIAL_BALANCE,
  MINING_REWARD,
  REDIS_CONFIG,
  PUBNUB_CONFIG,
  GENESIS_DATA,
  CHANNELS,
  RESPONSE_TYPES,
  REWARD_INPUT
}
