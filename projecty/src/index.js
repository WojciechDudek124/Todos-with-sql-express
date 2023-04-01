class Country {
    constructor() {
        this.places = [];
    }

    placeAdder (placeNumber){
        this.places.push(placeNumber);
    }

    placeVerification (){
        for(let i=0; i<this.places.length; i++) {
            if (this.places[i] === 1) {
                console.log('you are the best');
                break;
            }
        }
    }
}

const poland = new Country();
poland.placeAdder(1);
poland.placeAdder(2);
poland.placeAdder(1);
poland.placeAdder(2);
poland.placeVerification();


const germany = new Country();
germany.placeAdder(1);
germany.placeAdder(6);
germany.placeAdder(7);
germany.placeAdder(4);

console.log(poland);
console.log(germany);