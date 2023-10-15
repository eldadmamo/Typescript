const add = (a:number , b: number):number => {
    return a + b;
};

const subtract = (a:number,b:number) => {
    a - b;
}

function divide(a:number,b:number): number  {
    return a / b;
}

const multiply = function (a:number , b:number):number  {
  return  a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = (message: string): void => {
    if(!message){
        throw new Error(message);
    }
}

const forcast = {
    date : new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: {date: Date, weather: string }): void => {
    console.log(date);
    console.log( weather);
};

logWeather(forcast);

const profile = {
    names: 'alex',
    age: 20,
    coords: {
        lat: 0,
        log: 15
    },
    setAge(age: number):void {
        this.age = age;
    }
};

const {age, names}: {age:number, names: string} = profile;
const {coords: {lat, log}}:{coords: {lat:number, log: number}} = profile;
