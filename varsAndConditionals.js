/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack        = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon Snow has better attack than Jamie Lannister')
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log('Jamie Lannister has better attack than Jon Snow')
} else {
    console.log('Our fighters are evenly matched')
}

let jonSnowHealth  = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('Jon Snow been slain')
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`) 
}

jonSnowDefense += 25

//second attack from Jamie
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log('Jon Snow is dead')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

let isDead = Math.random() > .5
//Jamie uses a gatling gun at Jon 3 times as he runs into the forest
//there's a 50% chance, per gun usage that Jon is dead 
for (let i = 1; i < 3; i++) {
    isDead = Math.random() > .5
    if (isDead === true) {
        console.log(`Jon has died after ${i} rounds`)
        break
    }
}

if (isDead === false) {
    console.log(`It is a miracle! Jon is alive.`)

//Jamie wants Jon dead, and ensures it will happen
//He pursues Jon into the woods to use his fists

while (jonSnowHealth >0) {
    console.log('Jamie punches Jon')
    jonSnowHealth -= 5
}

console.log('Okay, Jon did not make it, sorry.')
}



for (let i = 1; i <= 50; ++i) {
    if (i % 3 === 0) {
        console.log('Fizz')
    } else if  (i % 5 === 0) {
        console.log('Buzz')
     } else (i % 3 === 0 && i % 5 ===0)
     console.log('FizzBuzz')
 }

