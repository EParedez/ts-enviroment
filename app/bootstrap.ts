export class Main{
    constructor(msg:string){
        console.log(msg);
    }
}

import * as Person from './Person';

var main = new Main('Cargo la clase escrita en Typescript');
var person = new Person.Person("Soy una persona");
