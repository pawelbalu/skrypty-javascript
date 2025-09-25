// function ogloszenie(){
//     console.log(this);
// }
// ogloszenie();


let ofertyPracy = {
    nazwa: 'Programista',
    wynagrodzenie: 5000,
    iloscKandydatow: 29,
    wymagania: ['doświadczenie','wykształcenie'],
    oferujemy: {
        dniWTygodniu: 4,
        urlop: 26,
    },
    ogloszenie() {
        console.log(`${this.nazwa}`, `${this.wynagrodzenie}`+'zł');
    },
    show(){
        this.wymagania.forEach(rev => {
            console.log(this.nazwa, rev);
        })
    }
}



ofertyPracy.show();