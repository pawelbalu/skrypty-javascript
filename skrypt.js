// INSTRUKCJA WARUNKOWA SWITCH
// break zatrzymuje działanie bo bez niego po case 5 wyświetla się w konsoli również default który nie powinien

let x = 5

switch (x) {
    case 1:
        console.log('x wynosi 1')
        break;
    case 3:
        console.log('x wynosi 3')
        break;
    case 5:
        console.log('x wynosi 5')
        break;
    default:
        console.log('żadna z powyższych opcji nie została wybrana')
}