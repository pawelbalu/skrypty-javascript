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
        marka: 'Toyota',
        model: 'Auris',
        przebieg: 23000,
        cena: 56000,
        ilosc: 7,
    },
];

// METODA MAP

// const modyfikacjaCeny = samochody.map(function(e){
//     return e.cena*1.2
// });

// console.log(samochody)
// console.log(modyfikacjaCeny)


// METODA FILTER


// const results = samochody.filter(function(e){
//     return e.przebieg>130000
// });

// console.log(results)


// METODA REDUCE

const wartoscSamochodow = samochody.reduce(function(previousValue, currentValue){
    return previousValue + currentValue.ilosc*currentValue.cena
}, 0)

console.log(wartoscSamochodow)