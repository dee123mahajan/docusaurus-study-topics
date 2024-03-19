# Hoisting

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that regardless of where variables and functions are declared in the code, they are actually processed first by the JavaScript engine.

#### Example 

```bash 
console.log(x); // undefined
var x = 5;

```

Under the hood, JavaScript actually interprets this code as:

```bash 
var x;
console.log(x); // undefined
x = 5;

```

This behavior of moving variable declarations to the top is what is referred to as hoisting. However, it's important to note that only the declarations are hoisted, not the initializations or assignments. So while variable and function declarations are hoisted, assignments and initializations remain where they are in the code.

Hoisting can sometimes lead to unexpected behavior if not understood properly, so it's important for JavaScript developers to be aware of how it works in order to write predictable and maintainable code.


## Hoisting with let and const 

let and const: Variables declared with let and const are also hoisted to the top of their block scope (the nearest enclosing curly braces {}). However, unlike var, they are not initialized until their actual declaration is encountered in the code. This is known as the "temporal dead zone"

```bash 
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

```
In this example, you would receive a ReferenceError because you're trying to access the variable y before it's declared. This is due to the temporal dead zone for let and const variables.


##

So, while all variable declarations are hoisted in JavaScript, the behavior regarding their initialization differs between var, let, and const. With let and const, you need to be aware of the temporal dead zone, which prevents you from accessing the variable before its declaration.