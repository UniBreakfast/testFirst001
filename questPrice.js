function questPrice(diff, term, fora, etap, succs, fails) {
  if (etap) {
    if (term<etap/2) diff--
    else { let p
      // for (p=1; term>=2**p*etap; p++); diff+=p-1
      for (p=1; term>=2**p*etap; p++) diff++
      //      if (term/etap>=64) diff+=6
      // else if (term/etap>=32) diff+=5
      // else if (term/etap>=16) diff+=4
      // else if (term/etap>=8 ) diff+=3
      // else if (term/etap>=4 ) diff+=2
      // else if (term/etap>=2 ) diff+=1
    }
  }
  return diff * (term - (fora? fora:0));
}

module.exports = questPrice