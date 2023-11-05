interface Vechiles {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    years: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const carType = {
    color: 'White',
    activated: false,
    month: 12,
    summary(): string {
        return `The Value is ${this.color}`;
    }
}

const printVechicles = (vehicle: Vechiles) => {
    console.log(vehicle.summary());
};

printVechicles(oldCivic);
printVechicles(carType);