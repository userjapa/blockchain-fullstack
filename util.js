const EC = require('elliptic').ec

const crypto = require('crypto')

const uuid = require('uuid').v1

const ec = new EC('secp256k1')

const cryptoHash = function (...inputs) {
  const hash = crypto.createHash('sha256')

  hash.update(inputs.map(input => JSON.stringify(input)).sort().join(' '))

  return hash.digest('hex')
}

const verifySignature = ({ publicKey, data, signature }) => {
  const keyFromPublic = ec.keyFromPublic(publicKey, 'hex')

  return keyFromPublic.verify(cryptoHash(data), signature)
}

module.exports = {
  cryptoHash,
  ec,
  verifySignature,
  uuid
}
