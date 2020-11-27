

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


// ******** Built-In Types in Typescript are: ********* //

//          Boolean : true/false
//          Number  : 45
//          String  : "Delmar"
//          Array   : ['a', 'b', 'c']
//          Enum:   : Allow names for a finite set of numeric values i.e. 1:'Apple', 2:'Tree'

// ******** Additional Built-In Types: ********* //

//          Void    : Used to indicate the absence of a type. 
//                      Usually as return type of functions that don't return a type
//                       i.e. let jammy: void = function () {//...}

//          Null    : Can assign to all other types not Built-In
//          Undefined:  an assign to all other types not Built-In

//          Never   : Type assigned to values that will never occur.. i.e. a function that will never return (infinite loop, etc)
//          Any     : Any value can be assigned 

// ******** Union Types ********* //
// A way to define SEVERAL types that might apply to a variable.  Vertical Bar ( | ) is operator

    let someValue: number | string;

    someValue = 32;                     // valid - compiles

    someValue = 'Hello World';          // valid - compiles

//  someValue = true;                   // invalid - fails compile

// ******** Null & Undefined ********* //
// By default Null & Undefined can be assigned to ANY Type. 
// This has led to countless bugs in javascript.
// Can now be avoided in Typescript by using 
// ** --strictNullChecks  compiler option in tsconfig.json ** //
// when --strictNullChecks: true,  null and undefined are no longer valid values for any-other type


    let basicString: string = 'Snerdle Monkey';
//  basicString = null;     // invalid - compiler error
//  basicString = undefined;  // invalid - also compiler error 

    let nullableString: string | null;
    nullableString = null;      // valid - compiles successfully 
//  nullableString = undefined; // invalid - fails compile

    let mysteryString: string | null | undefined;
    mysteryString = null;       // valid - compiles
    mysteryString = undefined;  // valid - compiles
    mysteryString = 'Tater Tot' // valid - compiles

// ******** Type Assertions ********* //
// If you're using dynamically typed code,
// you can assign the correct type (you want) with an assertion
// Syntax:  <type to assert>variable you want to assert 
// as-keyword Syntax: variable to assert  as  type to assert
let value: any = 5;

// later in your code you can assert that the value variable should instead
// be of the number type instead of it's original type 'any'

let fixedString: string = (<number>value).toFixed(4);       // wrapping in parenthesis so can dot method toFixed()

console.log(fixedString);   // 5.0000

