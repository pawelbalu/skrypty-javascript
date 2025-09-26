// Funkcje anonomiowe, strzałkowe jako alternatywa, operator spread

// let a = 3;
// let b = 7;
// let suma = 0;

// (function dodawanie (x,y){
//     let suma = x+y
//     return console.log(suma)
// }(a,b));


// let suma = (x,y) => console.log(x+y)

// suma(a,b)



// ((x,y) => console.log(x+y))(a,b)

// co gdy duzo liczb?

const liczby = [1,2,3,4,5,6]
const liczby2 = [8,9,...liczby]

console.log(liczby2)

// function suma(a,b,c,d,e,f){
//     return a+b+c+d+e+f
// }

// console.log(suma(...liczby))