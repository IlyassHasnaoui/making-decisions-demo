/*
    In this file, we'll be making a new story about Doug, the Pokemon trainer.
*/

//Doug wants to be a Pokemon trainer
//His mom gives him a backpack full of handy items,
//and kicks him out of her house
let backpack = [
    'poke ball', 'poke ball',
    'potion', 'beef jerky', 'running shoes'
]
let pokemon = []

//Doug wants more snacks than just beef jerky
//he goes to the store and buys two packs of Oreos
backpack.push('oreos')
backpack.push('oresos')

console.log('after buying oreos, this is our backpack:')
console.log(backpack)

//Doug meets professor Oak at the store
//Oak sees his potential and gives him his Pokedex and a pikachu
backpack.push('pokedex')
pokemon.push('pikachu')

console.log('after meeting professor Oak, our backpack and pokemon are:')
console.log(backpack)
console.log(pokemon)

//Doug goes out into the wild, into the tall grass in the forest
//And throughout the day, he encounter4s four pidgeys
//and catches them all
for (let i = 0; i < 4; i++) {
    pokemon.push('pidgey')
}
console.log('after the pidgeys, our pokemon are now:')
console.log(pokemon)

//Doug gives away his running shoes to a poor, young trainer
//he also eats the food in his backpack
//splice out the food and shoes in Doug's backpack

backpack.splice(3,4)

console.log('after the binge and the giveaway, backpack is now:')
console.log(backpack)

//we encounter a new pokemon, charizard
let newPokemon = 'Charizard'

//we get VERY lucky and catch it without incident on our first try
pokemon.push(newPokemon)

console.log('after catching Charizard, our pokemon are now:')
console.log(pokemon)

//someone asks to see your cutest pokemon.
//which is pikachu, duh
//so you show them pikachu 
console.log('here is my pikachu')
let cutestPokemon = pokemon [0]
console.log(cutestPokemon)

//a geneticist crosses your path. and asks if he can clone you
//pidgeys for science
//you agree, if he'll give you the lead statue of a jynx he is currently holding 

let clonedPidgeys = pokemon.slice(1,5)
console.log('here are your cloned pidgeys')
console.log(clonedPidgeys)

//let's make sure your pokemon stayed the same (no pidgeys were lost)
console.log('checking to make sure my pokemon are still here:')
console.log(pokemon)

backpack.unshift('jinx statue')
console.log('backpack after adding the statue:')
console.log(backpack)

backpack.shift()
console.log('backpack after getting rid of the statue:')
console.log(backpack)

//you find a wild butterfree
//which is your favorite pokemon!
//however, once you've realized you have 7 pokemon, which is illegal
//you're really hungry anyway, so you decide to eat one of your pidgeys
//make a variable gor butterfree 
//cut out a pokeball usin any array method 
//splice out pidgey and put in butterfree where the pidgey was at
//save the new spliced array (with pudfey in it) to a variable called lunch 

let favePokemon = 'butterfree'
backpack.unshift()
let lunch = pokemon.splice(3,1,favePokemon)

console.log('here is my backpack after catching butterfree:')
console.log(backpack)
console.log('and here are my pokemon:')
console.log(pokemon)
console.log('and here is my lunch:')
console.log(lunch)

for (let i = 0; i < pokemon.length; i++) {
    if (pokemon === 'pidgey') {
        pokemon[i] = 'pidgeotto'
    }
}

console.log('after the evolution event, my pokemon are now:')
console.log(pokemon)
