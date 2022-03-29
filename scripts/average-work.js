const Blockchain = require('./modules/blockchain')

const blockchain = new Blockchain()

blockchain.addBlock({
  data: 'initial'
})

let prevTimestamp,
    nextTimestamp,
    nextBlock,
    timeDiff,
    avarage

const times = []

for (let x = 0; x < 10000; x++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp

  blockchain.addBlock({
    data: `block-${x}`
  })

  nextBlock = blockchain.chain[blockchain.chain.length - 1]

  nextTimestamp = nextBlock.timestamp

  timeDiff = nextTimestamp - prevTimestamp

  times.push(timeDiff)

  avarage = times.reduce((total, num) => (total + num) / times.length)

  console.log(`Time to mine block: ${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Avarage time: ${avarage}.`)
}
