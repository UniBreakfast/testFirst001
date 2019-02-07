function questPrice(diff, term, fora, etap) {
  if (etap) {
    if (term>=etap*2) diff++
  }
  return diff * (term - (fora? fora:0));
}

module.exports = { questPrice }