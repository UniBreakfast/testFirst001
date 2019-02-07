const questPrice = require('./questPrice')



it('multiplies difficulty and term', ()=> {
  expect(questPrice(6, 4)).toBe(24)
})

it('takes into account fora if given', ()=>
  expect(questPrice(6, 4, 2)).toBe(12)
)

it('happy path with etap if specified (and irrelevant)', ()=>
  expect(questPrice(6, 4, 2, 4)).toBe(12)
)

it('takes into account term more than twice bigger than etap',
  ()=> expect(questPrice(6, 9, 0, 4)).toBe(63)
)

it('TIA term more than 4 times bigger than etap',
  ()=> expect(questPrice(2, 18, 0, 4)).toBe(72)
)

it('TIA term more than 8 times bigger than etap',
  ()=> expect(questPrice(2, 25, 0, 3)).toBe(125)
)

it('TIA term more than 2 times smaller than etap',
  ()=> expect(questPrice(5, 3, 0, 7)).toBe(12)
)





// questPrice(diff, term, fora, etap)
var date = (new Date()).getMinutes()
console.log(`~~~~~~~~~~~~~~~~~~~~~~${date}~~~~~~~~~~~~~~~~~~~~~`)