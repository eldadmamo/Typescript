class Vechile {


    constructor(public color:string) {

    }
    private drive(): void {
        console.log('chugga chugga');

    }
    protected honk(): void {
        console.log('beep');
    }
}

const vechile = new Vechile('orange');
console.log(vechile.color);


class Car extends Vechile {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drivers(): void {
        console.log('I love you')
    }

    startdriving(): void {
        this.drivers();
    }
}

const CAR =  new Car(4,'red');
CAR.startdriving();

