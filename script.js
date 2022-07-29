'use strict';

const sub = substract(5,1);
const substract = function (num1,num2){
    return num1-num2;
}
const add = addition(10,12);
function addition(num1,num2)
{
    return num1+num2;
}
let js = 'hello'

if (js === 'hello') {
    console.log('hellow world');
}

let ispresent = true;

console.log(typeof(ispresent));

console.log('string with lines \n\
line 1\n\
line 2 \n\ '
)
const firstName ='anurag';
const lastname ='kumar'
const namee  = `hello ${firstName} how are you ${lastname}`;

console.log(namee);

const multi =`line1
line2
line3`

console.log(multi);
class Gender {
    constructor(){
        this.gender = 'M';
    }
    printGender(){
        console.log(this.gender);
    }
}
class Person extends Gender{
    constructor() {
        super();
        this.name= 'anuragKK'
    }
    printName(){
        console.log(this.name);
    }
}

const person01= new Person();
person01.printName();
person01.printGender();

class Bundle {
    name;
    version;
    printBundle = ()=>{
        this.name = 'bun01';
        this.version ='101';
        console.log(' bundle details ' + this.name + ' ' + this.version);
    }
}
class WindowsBundle extends Bundle {
    metadata;
    printMetadata(){
        this.metadata = 'dfgj';
        console.log('metada ' + this.metadata);
        console.log('and '+this.name + ' : '+this.version);
    }
}
const b = new Bundle();
b.printBundle();

const wb = new WindowsBundle();
wb.printMetadata();