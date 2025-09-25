// OBIEKTY

var osoba = {
    imie: 'Jan',
    nazwisko: 'Kowalski',
    wiek: 34,
    show: function(){
        console.log('Mam na imię '+this.imie+' a na nazwisko '+this.nazwisko+' mam '+this.wiek+' lat');
    }
}


osoba.show()