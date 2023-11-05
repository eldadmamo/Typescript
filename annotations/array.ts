const carMakers:string[] = ['ford', 'toyota', 'chevy'];
const dated = [new Date(), new Date()];

const carsByMake:string[][] = [
    ['f150'],
    ['corolla'],
    ['cacaro']
]

const car = carMakers[0];
const myCar = carMakers.pop();



carMakers.map((car: string): string => {
    return car.toUpperCase();
})

//flexavle types
const importantDate:(string | Date ) [ ] = [new Date(), '2030-10-10'];
importantDate.push('2030-10-10');
importantDate.push(new Date());