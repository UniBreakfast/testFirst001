function tilMidnight(date) {
  const hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds(),
        left = 86400 - hh*3600 - mm*60 - ss,
        s = 60 - (ss || 60),
        m = left%3600 - s,
        h = left - m - s
  return ({h:h/3600, m:m/60, s})
}


module.exports = { tilMidnight }