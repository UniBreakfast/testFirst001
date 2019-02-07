function questPrice(diff, term, fora, etap, succs, fails) {
  if (etap) {
    if (term<etap/2) diff--
    else {
      if (term>=etap*2) diff++
      if (term>=etap*4) diff++
      if (term>=etap*8) diff++
      if (term>=etap*16) diff++
    }
  }
  return diff * (term - (fora? fora:0));
}

module.exports = { questPrice }