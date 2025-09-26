let nr;
let wybor;
const pracownicy = new Array()

function Osoba(imie,nazwisko){
    this.imie = imie
    this.nazwisko = nazwisko
}


function tworzenie(imie,nazwisko){
    osoba = new Osoba(imie,nazwisko)
    pracownicy.push(osoba)
}

function usuwanie(nr){
    delete pracownicy[nr]
}


while(wybor!=0){
    wybor = prompt('Podaj co chcesz zrobić. (1-tworzenie, 2-usuwanie, 3-wyświetlanie, 0-wyjście')
    switch(wybor){
    case '1':
        let imie = prompt('podaj imię:')
        let nazwisko = prompt('podaj nazwisko:')
        tworzenie(imie,nazwisko)
        break;

    case '2':
        nr = prompt('podaj nr pracownika do usunięcia')
        usuwanie(nr)
        break;

    case '3':
        pracownicy.forEach((e)=>{
            console.log(e)
        })
        break;

    default:
        document.write('Nie wybrano odpowiedniej opcji!')
        break;
}
}


console.log(pracownicy)