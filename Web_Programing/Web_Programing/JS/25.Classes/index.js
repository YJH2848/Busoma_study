class Animal{
    constructor(type, legs){
        this._type = type;
        this.legs = legs;
    }

    makeNoise(sound = 'Loud Noise'){
        console.log(sound);

    }
    get type(){
        return this._type.toUpperCase();
    }
    set type(newType){
        if(newType){
            this._type = newType;
        }
    }
    static return10(){
        return 10;
    }
}

class Cat extends Animal{
    constructor(type, legs, tail){
        super(type, legs);
        this.tail = tail;
    }
    makeNoise(sound = 'Meow'){
        console.log(sound);
    }
}
let cat = new Cat ('cat', 4, 1);
cat.makeNoise();
let dog = new Animal('dog', 4);
dog.makeNoise('Bark! Bark!');
dog.type = 'Jindo';
console.log(dog.type);
console.log(Animal.return10())