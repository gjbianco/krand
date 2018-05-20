function flipCoin() {
  n = 0
  then = Date.now() + 1
  while(Date.now() <= then) n = !n
  return n
}

function getFairBit() {
  while(1) {
    a = flipCoin()
    if(a !== flipCoin()) return a
  }
}

function getRandomByte() {
  n = 0
  bits = 8
  while(bits--) {
    n <<= 1
    n |= getFairBit()
  }
  return n
}

module.exports = {
  flipCoin: flipCoin,
  getFairBit: getFairBit,
  getRandomByte: getRandomByte
}
