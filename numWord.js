const countables = {
  en: {
    schemaLike: 'en',
    piece: { '1': 'piece',
             '2': 'pieces' },
    day: { '1': 'day',
           '2': 'days' },
    hour: { '1': 'hour',
            '2': 'hours' },
    minute: { '1': 'minute',
              '2': 'minutes' },
    second: { '1': 'second',
              '2': 'seconds' },
  },
  ru: {
    schemaLike: 'ru',
    piece: { '1': 'штука',
             '2': 'штуки',
             '5': 'штук' },
    day: { '1': 'день',
           '2': 'дня',
           '5': 'дней' },
    hour: { '1': 'минута',
              '2': 'минуты',
              '5': 'минут' },
    minute: { '1': 'минута',
              '2': 'минуты',
              '5': 'минут' },
    second: { '1': 'секунда',
              '2': 'секунды',
              '5': 'секунд' },
  },
  ua: {
    schemaLike: 'ru',
    piece: { '1': 'штука',
             '2': 'штуки',
             '5': 'штук' },
    day: { '1': 'день',
           '2': 'дні',
           '5': 'днів' },
    hour: { '1': 'година',
            '2': 'години',
            '5': 'годин' },
    minute: { '1': 'хвилина',
              '2': 'хвилини',
              '5': 'хвилин' },
    second: { '1': 'секунда',
              '2': 'секунди',
              '5': 'секунд' },
  },
}

if (numWord(
  1, 'piece', 'en'
) !== '1 piece') {
  throw new Error("FAIL: 1 piece")
}
if (numWord(
  562, 'apple', 'en'
) !== '562 apples') {
  throw new Error("FAIL: 562 apples")
}
if (numWord(
  0, 'day', 'ru'
) !== '0 дней') {
  throw new Error("FAIL: 0 дней")
}
if (numWord(
  1, 'day', 'ru'
) !== '1 день') {
  throw new Error("FAIL: 1 день")
}
if (numWord(
  2, 'day', 'ua'
) !== '2 дні') {
  throw new Error("FAIL: 2 дні")
}
if (numWord(
  1471, 'day', 'ru'
) !== '1471 день') {
  throw new Error("FAIL: 1471 день")
}
if (numWord(
  41, 'second', 'ua'
) !== '41 секунда') {
  throw new Error("FAIL: 41 секунда")
}

function numWord(num, alias, lang) {
  const n = Math.abs(num),
        words = !countables[lang] ? {'1':alias, '2':alias+'s'} :
          countables[lang][alias] || countables['en'][alias] ||
          {'1':alias, '2':alias+'s'}
  lang = countables[lang]? countables[lang].schemaLike : 'en'
  switch (lang) {
    case 'ru':
      if (!n%10 || n%10>4 || n%100>10 && n%100<15) return num+' '+words['5']
      if (n%10-1) return num+' '+words['2']
      return num+' '+words['1']
    case 'en':
    default:
      if (n-1) return num+' '+words['2']
      return num+' '+words['1']
  }
}

//////////////////////////////////////////////////////

exports.numWord = numWord