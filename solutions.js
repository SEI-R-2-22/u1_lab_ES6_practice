// Part 1 - Spreading Out

// 1.
const evens = [2, 4, 6, 8]
const odds = [1, 3, 5, 7]

// 2.
const allNumbers = [
  ...evens,
  ...odds
]

// Part 2 - Merging Objects

// 1.
const faveFoods = {
  pizza: 'Mellow Mushroom',
  burgers: 'Grindhouse Burgers',
  lateNight: 'Waffle House'
}

// 2.
const faveSFFoods = {
  sandwiches: 'Roxie Deli',
  burritos: 'Taqueria Guadalajara',
  sfPizza: 'Zante Pizza'
}

// 3.
const allFoods = {
  ...faveFoods,
  ...faveSFFoods
}

// Part 3 - Destructuring

// 1.
// const ben = {
//   name: 'Ben Manning',
//   age: '??',
//   hometown: 'Atlanta, GA'
// }

// 2.
// const { name, age, hometown } = ben
// console.log(name)
// console.log(age)
// console.log(hometown)

// 3.
const age = 6
const breed = 'lab-mix'
const name = 'Lucy'

const pet = {
  age,
  breed,
  name
}
const ben = {
  name: 'Ben Manning',
  age: '??',
  hometown: 'Atlanta, GA',
  pet
}

// 4.
console.log(ben.pet.name)