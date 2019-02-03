if (numLeft(
  5,8
) !== 3) {
  throw new Error("Check fail: Easy Path")
}
if (numLeft(
  726, 900
) !== 174) {
  throw new Error("Check fail: Hard Path")
}

function numLeft(num, max) {
  return max-num
}

//////////////////////////////////////////////////////

module.exports = { numLeft }