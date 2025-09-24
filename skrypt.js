// INSTRUKCJA WARUNKOWA SWITCH
// break zatrzymuje działanie bo bez niego po case 5 wyświetla się w konsoli również default który nie powinien

let x = 3
let y = 5
let z = 0

if (x!=y && x!=z && y!=z){ // sprawdzanie czy są różne
    if(x>y && x>z){
        console.log('Największa wartość to '+x)
    }
    if (y>x && y>z){
        console.log('Największa wartość to '+y)
    }
    if (z>x && z>y){
        console.log('Największa wartość to '+z)
    }
}




// if (x>y){
//     if (x>z){
//         console.log('największa liczba to '+x)
//     }else{
//         console.log('największa liczba to '+z)
//     }
// }else if (y>x){
//     if (y>z){
//         console.log('największa liczba to '+y)
//     }else{
//         console.log('największa liczba to '+z)
//     }
// }



// switch (x) {
//     case 1:
//     case 2:
//     case 3:
//         if (x==1) console.log('x wynosi 1')
//         else if (x==2) console.log('x wynosi 2')
//         else console.log ('x wynosi 3')
//         break;
//     case 4:
//         console.log('x wynosi 4')
//         break;
//     case 5:
//         console.log('x wynosi 5')
//         break;
//     default:
//         console.log('żadna z powyższych opcji nie została wybrana')
// }