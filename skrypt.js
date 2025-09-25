function Samochod(marka, model){
    this.marka = marka;
    this.model = model;
    this.show = function(){
        alert(this.marka)
    };
}

const samochod1 = new Samochod('Ford', 'Mondeo');

console.log(samochod1)

samochod1.przebieg = 120000;
samochod1.show1 = function(){alert(this.model)}

console.log(samochod1.show1());