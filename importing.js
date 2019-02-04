var {numLeft}     = require('./numLeft.js'),
    {numberWord, numberAndWord}  = require('./numberWord.js'),
    {tilMidnight} = require('./tilMidnight.js'),
    {makeDate}    = require('./makeDate.js')

function timeLeft(date, lang) {
  let {h,m,s} = tilMidnight(date)
  return numberWord(h, 'hour',   lang)+' '+
         numberWord(m, 'minute', lang)+' '+
         numberWord(s, 'second', lang)
}

function timeLeft2(date, lang) {
  let {h,m,s} = tilMidnight(date)
  if (h) return [numberAndWord(h, 'hour',   lang),
              m? numberAndWord(m, 'minute', lang) :
              s? numberAndWord(s, 'second', lang) : ['','']]
  return [m? numberAndWord(m, 'minute', lang) : ['',''],
          s? numberAndWord(s, 'second', lang) : ['','']]
}

function timeLeft4(date, lang) {
  let {h,m,s} = tilMidnight(date)
  if (h) return [numberAndWord(h, 'hour',   lang),
              m? numberAndWord(m, 'minute', lang) :
              s? numberAndWord(s, 'second', lang) : ['','']]
  return [m? numberAndWord(m, 'minute', lang) : ['',''],
          s? numberAndWord(s, 'second', lang) : ['','']]
}

function arrayToStr(arr) {
  if (Array.isArray(arr)) return arr.map(el=>arrayToStr(el)).join(' ')
  return arr
}


console.log(arrayToStr(timeLeft4(makeDate('12:12:12'), 'ru')))
console.log(arrayToStr(timeLeft4(makeDate('22:58:59'), 'en')))
console.log(arrayToStr(timeLeft4(makeDate('22:59:03'), 'ua')))
console.log(arrayToStr(timeLeft4(makeDate('23:59:59'), 'ru')))
console.log(arrayToStr(timeLeft4(makeDate('23:30:00'), 'ru')))
console.log(arrayToStr(timeLeft4(makeDate('23:54:59'), 'ru')))
console.log(arrayToStr(timeLeft4(makeDate('00:00:00'), 'en')))

'need a break?'