---
sidebar_position: 5
---

# Timers

In JavaScript, setTimeout, setInterval, and setImmediate are all functions used to execute code asynchronously, but they have different behaviors and use cases.

### setTimeout 

setTimeout schedules a function to run once after a specified delay in milliseconds.
It takes two parameters: a function to execute and the delay (in milliseconds) before executing the function.

```bash 
setTimeout(() => {
    console.log('This message will appear after 1000 milliseconds');
}, 1000);

```

### setInterval
setInterval repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
It also takes two parameters: a function to execute and the time interval (in milliseconds) between each execution.


```bash 
let count = 0;
const intervalId = setInterval(() => {
    console.log('Count:', count);
    count++;
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 iterations
    }
}, 1000);

```

### setImmediate

setImmediate executes a specified function after the current event loop cycle, allowing any I/O operations in the queue to be processed before executing the callback.
It is only available in some environments (e.g., Node.js), and its behavior can vary across implementations.

```bash 
setImmediate(() => {
    console.log('This message will appear after the current event loop cycle');
});


```