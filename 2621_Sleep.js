/*
Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
*/

async function sleep(millis) {
    return new Promise(delayed=>setTimeout(delayed,millis))
}


// Javascript Solution without using error handling and Async/await:
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise(delayresolve => setTimeout(delayresolve, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

//Typescript Solution without using error handling and uses async/await:
async function sleep(millis: number): Promise<void> {
    return new Promise<void>(delayresolve => {
        setTimeout(delayresolve, millis);
    });
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
//Javascript solution using error handling and async/await:
/**
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((delayresolve, reject) => {
    if (typeof millis !== 'number' || isNaN(millis)) {
      reject(new Error('Invalid argument. Expected a number.'));
    } else {
      setTimeout(delayresolve, millis);
    }
  });
}
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
Concepts:
Asynchronous functions: The question specifies that the sleep function should be an asynchronous function. In simple terms, Asynchronous functions allow code to execute non-blocking I/O operations and other time-consuming tasks without blocking the main thread.
Promises: Asynchronous operations typically return a Promise object. Promises are a way of handling asynchronous operations and specifying what should happen when the operation completes (either successfully or with an error).
setTimeout: The setTimeout function is a built-in function that can be used to schedule a function to run after a certain amount of time has elapsed. In our question we will use setTimeout to implement the sleep function.
Error handling: Asynchronous operations can fail for various reasons (e.g. network errors, invalid input). Error handling is important as its like a fallback mechanism if the code doesn't work.
Async/await: Async/await is a syntactic feature that makes it easier to write asynchronous code that looks like synchronous code. It allows us to write code that "waits" for a Promise to resolve before continuing execution.
*/