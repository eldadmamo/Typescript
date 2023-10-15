let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = false;

let nothingmuch: null = null;
let nothing:undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green','blue'];
let myNumber: number[] = [1,3,4,5];
let truths: boolean[] = [true, false, true];

class Car{

}

let car:  Car = new Car();

let point: {x:number; y:number} = {
    x:10,
    y:20
};


//Function

const logNumber: (i: number) => void = (i: number) => {
    i = 20;
    console.log(i)
}

const json = '{"x" : 10, "y": 20}';
const coordiantes :{x: number , y: number} = JSON.parse(json);
console.log(coordiantes);

let words: String[] = ['red', 'green', 'blue', 'White'];

let foundWord: boolean;

for (let i=0; i < words.length ; i++){
    if(words[i] == 'green'){
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly

let number = [-10,-1,12];
let numberAboveZero:number | boolean = false;

for(let i=0; i < number.length ; i++){
    if(number[i] > 0){
        numberAboveZero = number[i];
    }
}



