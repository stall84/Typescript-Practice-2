

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


// ******** Control-Flow-based Type Analysis ********* //
// Typescript compiler analyzes the conditional behavior in your code 
// and applying type-checking to variables using the most narrow type possible

// The normal behavior in getElementById function is to return an HTMLElement type (the DOM node you want)
// If for say you want this displayDiv variable to also hold a string value along with HTMLElement type
// Add a union-type declaration to the variable declaration and move it's initialization to anothe line

function getDiv () {
// Original:  
// var displayDiv = document.getElementById('displayDiv');

// Modified:
var displayDiv: HTMLElement | string;
// Use conditional to return the variable if it's type is string
if (typeof displayDiv === 'string') {
        return displayDiv;  // compiler uses this condition and at this point this variable can ONLY be a string
    } 
else {
        return displayDiv;  // If flow hits else, the compiler makes the variable HTMLElement
    }

displayDiv = document.getElementById('displayDiv');     // Down here however displayDIv can be either string or HTMLElement (Widened)

}


// ******** FUNCTIONS ********* //

// **** Type Annotations on Functions **** //


// Old Javascript Function:
// function dullFunc(value1, value2) {
//     return 'Im a dumfunc that explicitly returns a string (type)';
// }

// Typescript Way of Annotating Functions: 
function funFunc(score: number, message?: string): string {
    // Above we have a parameter score typed as a number.
    // The 2nd param message is OPTIONAL (?) and typed as string. 
    // All optional params have to FOLLOW behind required params
    // the : string annotation after the parameter closing parenthesis
    // is the RETURN type of the function (string in this case)
    return 'Ive got personality and am rather badass, also returning a string';
}

// NOTES: 
// --noImplicitAny tsconfig.json option can be set to true if you don't want un-typed parameters to take
//  on default type of 'any' (as in the dullFunc example params)

// Default Initialized Parameters //

function sendGreeting(greeting: string = 'Good Morning!'): void {
    // Here we are defining the default greeting parameter as 'Good Morning!'
    // If no value is passed in that argument, the default will be executed, 
    // providing some grace  if param is forgotten/omitted 
    // Otherwise the passed value arg will be executed.
    // This function's return type is void. Because it doesn't return a value. (instead a console log)
    console.log(greeting);
}

sendGreeting();                 // Log's  'Good Morning!'
sendGreeting('Playsaywha??');   // Log's  'Playasaywha??'

// **** Arrow Functions (Lambdas) **** //

// General syntax:   parameters => function body
// Everything on the left side of the arrow is a parameter. 
// Everything on the right of the arrow is the function body. 
// Step by Step :  1)  initialize a variable 'squareit' and assign it (let squareit)
// to an arrow function (=).  2)  Define the parameter/input of the function (x). (=>)
// 3) Define the function body by multiplying the input/param by itself (x * x;)

let squareit = x => x * x;  // Return is implicit if there's only 1 expression on same line.
                            // If body spans more than 1 experssion and/or line, wrap it in brackets

let adder = (a, b) => a + b;    // More than 1 parameter must be wrapped in parenthesis

let greet2 = () => console.log('Sup');  // Of course you can have no params, wrapped in empty parenthesis

let scores: number[] = [70, 125, 85, 110];
let highScores: number[]; 

highScores = scores.filter((element, index, array) => {
    if (element > 100) {
        return true; 
    }
})

console.log(highScores);


// Convert vanilla function to typescript arrow functin>>

function logMessageOrig (message) {
    console.log(message);
}

// 1)  Lambdas are anonymous, so remove the name (we will be in actuality just moving it to define 
//     our constant here instead) and remove the function keyword as well 

/*>>  const logMessage = (message) {
    console.log(message);
} */

/* 2)  Type the message parameter as string. move the console log function body up to the same line
        because there is only one return value in the body. remove brackets
        assigning a VOID return type for this function, because of it's simplicity, is not necessary */
        
        const logMessageAdvanced = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}    


/* INTERFACES IN TYPESCRIPT */
// Interfaces contain properties that have empty implementations. It's up to the inheriting
// Class to implement those interface properties, and all of them must be implemented

interface Employee {

    name: string;

    title: string;
}

// One of the main functions of interfaces is the ability to inherit or be extended by other interfaces

interface Manager extends Employee {

    department: string;

    numOfEmployees: number;

    // Methods on interfaces only contain the function signature, and no implementation
    scheduleMeeting: (topic: string) => void;
    // It would be up to the class/object that implements this interface method to define the 
    // implementation details of this method
}

// If we have an object literal like the following, it implements the Employee interface and can
// be used anywhere the Employee object is implemented. As long as it has the base number 
// of interface properties (it can have more than them).

let developer = {
    name: 'Michael',
    title: 'Senior TS Developer',
    editor: 'Visual Studio Code'
}

let newEmployee: Employee = developer;  // no compile problems. As long as the structures match.


/******** CLASSES (in depth) ********/
// Class members are Public by default, but can be prefixed with private to make them private
// The convention is to underscore private members/fields/props (_snoop: string;)

class Developer {
    department: string;
    private _title: string;

    // Accessor Methods (getters/setters)
    get title(): string {       // the name of the function is the name of the property (title)
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }

    // Methods .. 'function' keyword is not used as in normal function 
    documentRequirements(requirements: string): void {
        console.log(requirements);
    }
}

// EXTENDING A CLASS //

class WebDeveloper extends Developer {
    favoriteEditor: string;

    writeTypeScript(): void {
        // some cool code
    }
}

let webdev: WebDeveloper = new WebDeveloper();

// Now you're able to set properties on the new webdev instance that were on the original Developer class (Inheritance)

webdev.department = 'Software Engineering';
webdev.favoriteEditor = 'VS Code';

// It's visible that Interface inheritance (implementation) is very similar to Class inheritance (extension)

interface Employee {
    name: string;
    title: string;
    logID: () => string;
}

class Engineer implements Employee {
    name: 'Michael';
    title: 'Awesome Developer';
    logID() {
        return `${this.name} ${this.title}`;
    }
}