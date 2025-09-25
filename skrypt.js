// PĘTLA WHILE

// let i = 0
// while (i<=10){
//     console.log('kolejne przejście '+i)

//     i++
// }


// OBLICZANIE LICZB

// let a = parseInt(prompt('Podaj pierwszą liczbę')) // parse int konwertuje typ ze string na number
// let b = parseInt(prompt('Podaj drugą liczbę'))
// console.log(a+' '+typeof(a))


// dalsza część vvv


// let a = 0
// let b = 0

// let suma = 0

// while (suma >= 0){
//     let a = parseInt(prompt('Podaj pierwszą liczbę'))
//     let b = parseInt(prompt('Podaj drugą liczbę'))
//     suma = a+b
//     console.log('suma podanych liczb wynosi '+suma)
// }

// kończy się gdy suma będzie na minusie



// PĘTLA DO WHILE

// 1.
// do {
//     a = parseInt(prompt('Wprowadź pierwszą liczbę'))
//     b = parseInt(prompt('Wprowadź drugą liczbę'))
//     suma = a+b
//     console.log('Suma podanych liczb wynosi: '+suma)

// } while (suma >= 0)

// 2. kończy gdy wynosi 0
do {
    a = parseInt(prompt('Wprowadź pierwszą liczbę'))
    b = parseInt(prompt('Wprowadź drugą liczbę'))
    suma = a+b
    console.log('Suma podanych liczb wynosi: '+suma)

} while (suma !== 0)
