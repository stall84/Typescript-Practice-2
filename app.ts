

const button1: any = document.getElementById('button1');

function clickAlert() {

    const alertString: string = 'STOP!!!  ..  In tha naaammee of LET! (before U break MY CODE!!)';
    alert(alertString);
   
}

button1.addEventListener('click', clickAlert);


// Basic type annotation examples, y is inferred by the compiler, but always a good idea
// to make it explicit anyway

let x: string = 'I will forever be a string';

let y = 'I will also forever be a string (inferred)';


// Built-In Types in Typescript are:

//          Boolean : true/false
//          Number  : 45
//          String  : "Delmar"
//          Array   : ['a', 'b', 'c']
//          Enum:   : Allow names for a finite set of numeric values i.e. 1:'Apple', 2:'Tree'

// Additional Built-In Types:

//          Void    : Used to indicate the absence of a type. 
//                      Usually as return type of functions that don't return a type
//                       i.e. let jammy: void = function () {//...}

//          Null    : Can assign to all other types not Built-In
//          Undefined:  an assign to all other types not Built-In

//          Never   : Type assigned to values that will never occur.. i.e. a function that will never return (infinite loop, etc)
//          Any     : Any value can be assigned 