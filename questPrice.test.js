const { questPrice } = require('./questPrice')


it('multiplies difficulty and term', ()=>
  expect(questPrice(6, 4)).toBe(24)
)

it('takes into account fora if given', ()=>
  expect(questPrice(6, 4, 2)).toBe(12)
)

it('happy path with etap if specified (and irrelevant)', ()=>
  expect(questPrice(6, 4, 2, 4)).toBe(12)
)

it('takes into account term much bigger than etap', ()=>
  expect(questPrice(6, 9, 0, 4)).toBe(63)
)

// questPrice(diff, term, fora, etap)