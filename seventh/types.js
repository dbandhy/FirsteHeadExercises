function liesDetectorTest() {
    let lies = 0

    let stolenDiamond = { }
    if (stolenDiamond) {
        console.log('You stole the diamond')
        lies++
    }

    let car = {
        keysInPocket: null
    }
    if (car.keysInPocket) {
        console.log('You stole the car')
        lies++
    }
    if (car.emptyGasTank) {
        console.log('You drove the car after stole it')
        lies++
    }
    let foundYouAtCrimeScene = [ ]
    if (foundYouAtCrimeScene) {
        console.log('A sure sign of guilty')
        lies++
    }
    if (foundYouAtCrimeScene[0]) {
        console.log('caught with a stolen item')
        lies++
    }
    let yourName = " "
    if (yourName) {
        console.log('Guess you lied about your name')
        lies++
    }
    return lies
    
}

let numberOfLies = liesDetectorTest()
console.log('You told ' + numberOfLies + ' lies')

if (numberOfLies >= 3) {
    console.log('Guilty as carged')
}

let text = 'You should never shout when typing'
alert(text.toLowerCase())
// let presentableText = text.toLowerCase()
//     if (presentableText.length > 0) {
//         alert(presentableText)
//     }

function validate(phoneNumber) {
    return phoneNumber.match()
}

function Duck(sound) {
    this.sound = sound
    this.quack = function() {console.log(this.sound)}
}

let toy = new Duck ('toy: quack quack')

toy.quack()
console.log(typeof toy)
console.log(toy instanceof Duck)