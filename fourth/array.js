// function makePhrases() {
//     let words1 = ['24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'win-win' ]
//     let words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned']
//     let words3 =['process', 'solution', 'tipping-point', 'strategy', 'vision']

//     let rand1 = Math.floor(Math.random() * words1.length)
//     let rand2 = Math.floor(Math.random() * words2.length)
//     let rand3 = Math.floor(Math.random() * words3.length)

//     let phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3]
//     alert(phrase)
// }
// makePhrases()
 

function bubbleSolution () {
    
    
    let highScore = 0
    let scores = [60, 50, 60, 58, 54, 54,
                    58, 50, 52, 54, 48, 69,
                    34, 55, 51, 52, 44, 69,
                    69, 64, 66, 55, 52, 61,
                    46, 31, 57, 52, 44, 18,
                    41, 53, 55, 61, 51, 44]

    for (let i = 0; i < scores.length ; i++) {
        let output = 'Bubble solution ' + i + ' = ' + scores[i]
            console.log(output)
        
        if (scores[i] > highScore) {
            highScore = scores[i]
        }

    } 
 
    console.log(highScore)
    console.log('Bubble test  ' + scores.length);

    let bestSolutions = [ ]
    for (let i = 0 ; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push[i]
        }
    
    }    
    
    console.log('Solutions with the highest score: ' + bestSolutions)
}

bubbleSolution()

//REFACTOR

function getHighScore(score) {
    let highScore = 0
    for (let i = 0; i < scores.length ; i++) {
        let output = 'Bubble solution ' + i + ' = ' + scores[i]
            console.log(output)
         
        if (scores[i] > highScore) {
            highScore = scores[i]
        }

    } 

    return highScore
}