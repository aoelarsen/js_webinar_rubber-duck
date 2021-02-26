// Hello

// Declaring a constant variable with the name "logToConsole" and initializing it with an anonymous arrow function as the value.
// The arrow function takes in one argument called "someData"
// Inside the function the value of the argument "someData" will be logged to console
const logToConsole = (someData) => {
    console.log(someData);
};

// Declaring a mutable variable with the name "i" and initializing it with an integer value "0"
let i = 0;

// Declaring a constant variable with the name "constantVariable" and initializing it with the string value "this is immutable"
const constantVariable = 'this is immutable';

// Calling the logToConsole function and passing in the variable i as an argument
logToConsole(i);

// Declaring a constant variable with the name "notJason" (which is not a good variable name) and initializing it with an object.
const notJason = {
    step1: 0,
    step12: [
        1,
        {
            step2: 0,
            step22: [
                2,
                {
                    step3: 0,
                    step33: [
                        3,
                        {
                            step3: 0,
                            step33: [
                                3,
                                {
                                    step4: 0,
                                    step44: [
                                        4,
                                        {
                                            cake: false, // so sad
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

// Declaring a constant variable with the name "isCake" and initializing it with the value of the "notJason" object that:
// has a property called "step12" that is holds an array
// we target the second item in the array - item 1
// This item holds an object with a property named "step22"
// "step22" holds an array - we target the second item in the array - item 1
// This item holds an object with a property named "step33"
// "step33" holds an array - we target the second item in the array - item 1
// This item also holds an object with a property named "step33"
// "step33" holds an array - we target the second item in the array - item 1
// This item holds an object with a property named "step44"
// "step44" holds an array - we target the second item in the array - item 1
// This item holds an object with a property named "cake"
// "cake" holds the Boolean value false
const isCake = notJason.step12[1].step22[1].step33[1].step33[1].step44[1].cake; // false
// The "isCake" variable is false...
// But we want cake...
// Let's use our front-end developer powers to make the cake come true!

// Declare a constant variable with the name "cake" and initializing it with the value of NOT isCake
// isCake is false so NOT isCake becomes true
const cake = !isCake; // true

// Declare a constant variable with the name "container" an initialize it with a "querySelector" that targets the HTML element with the class "container"
const container = document.querySelector('.container');

// If statement with cake as a condition

if (cake) {
    // if the cake is true:
    // we take the variable "container" that holds the HTML element with the class of "container" and set the inner HTML to be a string value of "hurray cake!"
    container.innerHTML = 'hurray cake!';

    // logging the value of cake to console:
    console.log(cake);
} else {
    // if the cake is NOT true:
    // we take the variable "container" that holds the HTML element with the class of "container" and set the inner HTML to be a string value of "the cake is a lie... so sad :("
    container.innerHTML = 'the cake is a lie... so sad :(';

    // logging the value of cake to console:
    console.log(cake);
}
