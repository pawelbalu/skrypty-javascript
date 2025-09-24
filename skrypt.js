// INSTRUKCJA WARUNKOWA SWITCH
// break zatrzymuje działanie bo bez niego po case 5 wyświetla się w konsoli również default który nie powinien

let x = 2

switch (x) {
    case 1:
    case 2:
    case 3:
        console.log('x wynosi 1 lub 2 lub 3')
        break;
    case 4:
        console.log('x wynosi 4')
        break;
    case 5:
        console.log('x wynosi 5')
        break;
    default:
        console.log('żadna z powyższych opcji nie została wybrana')
}