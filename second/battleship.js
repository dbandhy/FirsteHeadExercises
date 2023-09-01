randomLoc = Math.floor(Math.random() * 5) 
console.warn(randomLoc)

let location1 = randomLoc
let location2 = location1+1
let location3 = location2+1
let guess // tendrá un valor hasta que el jugador haga un intento
let hits = 0
let guesses = 0
let isSunk = false

while (isSunk == false ) {
    guess = prompt ('Enter a number from 0-6 : ')

    if (guess < 0 || guess > 6) {
        alert('Ingresa un número válido')
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('HIT')
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true
                alert('You sank my battleship')
            }
        } else {
            alert ('MISS')
        }
     
    }
}

let stats = "You took" + guesses + "guesses to sink the battleship" + (3/guesses)
alert(stats)
