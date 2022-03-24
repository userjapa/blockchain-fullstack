const Block = require('./block')

const utils = require('./utils')

describe('Block', () => {
  const timestamp = Date.now(),
        lastHash  = utils.generateId(),
        hash      = utils.generateId(),
        data      = [ 'blockchain', 'data' ]

  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data
  })

  it('validate block properties', () => {
    expect(block.timestamp).toEqual(timestamp)
    expect(block.lastHash).toEqual(lastHash)
    expect(block.hash).toEqual(hash)
    expect(block.data).toEqual(data)
  })
})
