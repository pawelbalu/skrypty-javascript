// const samochod = {
//     marka: 'Mazda',
//     model: '5',
//     show: function(){
//         alert(this.marka);
//     }
// }

// console.log(samochod)


function Samochod(marka, model){
    this.marka = marka;
    this.model = model;
    this.show = function(){
        alert(this.marka)
    };
}

const sam1 = new Samochod('Honda', 'Civic');

console.log(sam1)