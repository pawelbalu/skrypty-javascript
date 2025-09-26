let nr;
let wybor;
const pracownicy = new Array()

function Osoba(imie,nazwisko, numer){
    this.imie = imie
    this.nazwisko = nazwisko
    this.numer = parseInt(numer)
}


// function tworzenie(imie,nazwisko){
//     let osoba = new Osoba(imie,nazwisko)
//     pracownicy.push(osoba)
// }

// function usuwanie(nr){
//     delete pracownicy[nr]
// }

const metody = {
    tworzeniePracownika: function(imie,nazwisko,numer){
        console.log(this)
        let osoba = new Osoba(imie,nazwisko,numer)
        pracownicy.push(osoba)
    },
    wyswietlPracownika: function(){
        document.write('Imię: ',this.imie, ' nazwisko: ',this.nazwisko)
    },
    usuwaniePracownika: function(){
        delete pracownicy[this.numer-1]
    }
}


while(wybor!=0){
    wybor = prompt('Podaj co chcesz zrobić. (1-tworzenie, 2-usuwanie, 3-wyświetlanie, 0-wyjście')
    switch(wybor){
    case '1':
        let imie = prompt('podaj imię:')
        let nazwisko = prompt('podaj nazwisko:')
        let numer = prompt('podaj numer pracownika')
        let tworzenie = metody.tworzeniePracownika.bind(pracownicy)
        tworzenie(imie,nazwisko,numer)
        break;

    case '2':
        let nrP = prompt('podaj nr pracownika do usunięcia')
        metody.usuwaniePracownika.apply(pracownicy[nrP])
        wybor=0
        break;

    case '3':
        pracownicy.forEach((e)=>{
            console.log(e)
        })
        break;

    case '4':
        let nr = prompt('Podaj nr indeksu pracownika')
        metody.wyswietlPracownika.call(pracownicy[nr])
        wybor=0
        break;

    default:
        document.write('Nie wybrano odpowiedniej opcji!')
        break;
}
}


console.log(pracownicy)