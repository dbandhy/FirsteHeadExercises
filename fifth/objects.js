let taxi = {
    make: 'Webville Motors',
    model: 'taxi',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {  
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom !!' )
        } else {
            alert('You need to start the engine first')
        }
    }
}

let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 1021,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {  
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom !!' )
        } else {
            alert('You need to start the engine first')
        }
    }
}

let cadi = {
    make: 'GM',
    model: 'Cadillacs',
    year: 1955,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 12892,
    started: false,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {  
        if(this.started) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom !!' )
        } else {
            alert('You need to start the engine first')
        }
    }
}

let fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 88000,
    started: false,
    fuel: 0,
    start: function() {
        this.started = true
    },
    stop: function() {
        this.started = false
    },
    drive: function() {  
        if(this.started) {
            if (this.fuel > 0) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom !!' )
            this.fuel-- //= this.fuel - 1
        } else {
            alert('You need fuel')
            this.stop()
        }
     } else {
                alert('You need to start the engine first')
        }
    }, 

    addFuel: function(amount) {
        this.fuel = this.fuel + amount
    }
}


fiat.start()
fiat.drive()
fiat.addFuel(2)
fiat.start()
fiat.drive()
fiat.drive()
fiat.drive()
fiat.stop()

// cadi.start()
// cadi.drive()
// cadi.stop()
// chevy.start()
// chevy.drive()
// chevy.stop()
// taxi.start()
// taxi.drive()
// taxi.stop()

// function prequal(car) {
//     if (car.mileage > 10000) {
//         return false
//     } else if (car.year > 1960) {
//         return false
//     }

//     return true
// }

// let worthALook = prequal(taxi)
// let worthALook1 = prequal(cadi)
// let worthALook2 = prequal(fiat)
// let worthALook3 = prequal(chevy)

// if (worthALook) {
//     console.log('You gotta check out this ' + chevy.make)
// } else {
//     console.log('You really should pass on the ' + chevy.model)
// }

// function makeCar() {
//     let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
//     let models =["Cadillacs", "500", "Bel- Air", "Taxi", "Torpedo"];
//     let years = [1955, 1957, 1948, 1954, 1961];
//     let colors = ["red", "blue", "tan", "yellow", "white"];
//     let convertible = [true, false]

// let rand1 = Math.floor(Math.random() * makes.length)
// let rand2 = Math.floor(Math.random() * models.length)
// let rand3 = Math.floor(Math.random() * years.length)
// let rand4 = Math.floor(Math.random() * colors.length)
// let rand5 = Math.floor(Math.random() *5 ) + 1
// let rand6 = Math.floor(Math.random() * 2)

// let car = {
//     make: makes[rand1],
//     model: models[rand2],
//     year: years[rand3],
//     color: colors[rand4],
//     passengers: rand5,
//     convertible: convertible [rand6],
//     mileage: 0
// }

// return car
// }

// function displayCar(car) {
//     console.log('Your new car is a ' + car.year + " " + car.make + " " + car.model + " " + "and is " + car.convertible)
// }

// let carToSell = makeCar()
// displayCar(carToSell)