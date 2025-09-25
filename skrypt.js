const samochody = [
    {
    marka: 'Opel',
    model: 'Astra',
    przebieg: 120000,
    cena: 10000,
    ilosc: 3,
    },
    {
        marka: 'Mazda',
        model: '5',
        przebieg: 140000,
        cena: 12000,
        ilosc: 4,
    },
    {
        marka: 'Mazda',
        model: '5',
        przebieg: 230000,
        cena: 12000,
        ilosc: 4,
    },
];

// console.log(samochody)

// samochody.forEach(function(e) {console.log('!')})

// console.log(samochody.length)

samochody.forEach(function(e){
    if (e.przebieg>130000) return console.log(e.marka)
})

