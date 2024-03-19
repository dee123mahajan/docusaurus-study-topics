---
sidebar_position: 1
---

# Promises

Promises in JavaScript provide a way to handle asynchronous operations more effectively, ensuring better control flow and error handling. A promise represents a value that may be available now, in the future, or never.

There are three states that a promise can be in:

1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed, and an error reason is provided.

Here's an example demonstrating a simple asynchronous operation using promises and covering all three states:

```bash
// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, for example, fetching data from an API
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // Resolve the promise with the random number if it's greater than 0.5
    } else {
      reject(new Error("Random number is less than or equal to 0.5")); // Reject the promise with an error otherwise
    }
  }, 1000);
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log("Promise resolved with value:", result);
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error.message);
  });

```

In this example:

1. We create a new Promise using the Promise constructor. Inside the constructor, we have an asynchronous operation (a setTimeout function simulating an asynchronous task like fetching data from an API).
2. Depending on the outcome of the asynchronous operation (in this case, the value of a random number), we either resolve the promise with resolve() or reject it with reject().
3. We then consume the promise using the then() and catch() methods. If the promise is resolved, the then() method is called with the resolved value. If the promise is rejected, the catch() method is called with the error object.