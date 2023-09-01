
// function convivence(volume, neighbor) {
    
//     if (volume > 80) 
//         alert('Too loud, ' + neighbor)
//     else (volume < 80)
//         alert('Too silent, ' + neighbor)
//     }  
//     let neighbor = prompt('escriba su nombre por favor')
//     let volume = prompt('ingrese el vo lumen de su dispositivo')


//// functions as copy in value
// function doIt(param) {
//     param = 2
// }

// test = 1
// doIt(test)
// console.log(test)

//  function cook(degrees) {
//     let message
    
//     if (degrees > 500) {
//         message = 'I am not a nuclear reactor'
//     } else if (degrees < 100) {
//         message = ' I am not a refrigerator'
//     } else {
//         message = 'That´s a very comfortable temperature for me';
//         setMode('cook');
//         setTemp(degrees)
//     }

//     return message
// }

// let use = cook(395)


function clunk(times) {
    let num = times
    while (num > 0) {
        display('clunk')
        num = num - 1
    }
}

function thingamajig(size) {
    let facky = 1
    clunkCounter = 0
    if (size == 0) {
        display('clank')
    } else if (size == 1) {
        display('thunk')
    } else {
        while (size > 1) {
            facky = facky * size
            size = size - 1
        }
        clunk(facky)
    }
}

function display(output){
    console.log(output)
    clunkCounter = clunkCounter + 1
}

let clunkCounter = 7
thingamajig(6)
//console.log(clunkCounter)