const samochody = {
    marka: 'Opel',
    model: 'Astra',
    wyswietl: function(){
        console.log(this.model+' '+this.marka)
    }
}

// samochody.wyswietl()


let auto = samochody.wyswietl.bind(samochody);

auto()