# Condition Checker
Function takes an array of numbers and a user-created function. Will return either true or false.
Assignment provided by FreeCodeCamp.org

## User Stories
1. You should have a function named findElement that accepts an array and a function as arguments.
2. The function should return the first item in the array that passes a truth test. This means that, calling the passed in function func, given an element x, the truth test is passed if func(x) is true.
3. If no element passes the test, the function should return undefined.

## Tools & Languages Used
* JavaScript

## Features
* Add an array and a function that uses the array's values to determine if it is true or false

## Concepts Learned
* An if loop does not require a true or false check because it already returns true or false

## Examples
```
JavaScript

function findElement(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined

```

## How to Run
1. Clone the repository
2. Run the script using Node.js or import the function into any JS file
