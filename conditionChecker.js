/*
Assignment provided by FreeCodeCamp.org

Completed: December 31st, 2025
Program Description: Function takes an array of numbers and a user-created function. Will return either true or false.
Concepts Utlized: For loops, using a user-created function in a function

User Stories:
1. You should have a function named findElement that accepts an array and a function as arguments.
2. The function should return the first item in the array that passes a truth test. This means that, calling the passed in function func, given an element x, the truth test is passed if func(x) is true.
3. If no element passes the test, the function should return undefined.
*/

function findElement(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) { // This is the first time I've used a function in a function. Originally, I compared this to true, but that is what an if statement already does so I removed it.
      return array[i];
    }
  }
  return undefined;
}
