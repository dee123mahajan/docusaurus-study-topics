# Let var const

In JavaScript, let, var, and const are used for variable declaration, but they have different behaviors and scopes.

## var

1. var is the oldest way to declare variables in JavaScript.
2. Variables declared with var are function-scoped or globally-scoped, but they are not block-scoped. This means they are accessible throughout the entire function in which they are declared, regardless of the block in which they are defined.
3. Variables declared with var can be re-declared and updated.

```bash 
var x = 10;
if (true) {
    var y = 20;
    console.log(x); // Output: 10
}
console.log(y); // Output: 20
```

## let

1. let was introduced in ECMAScript 6 (ES6) to address some of the issues with var.
2. Variables declared with let have block scope. This means they are only accessible within the block in which they are defined.
3. Variables declared with let can be reassigned but not re-declared within the same scope.
Example

```bash 
let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
}
console.log(y); // Error: y is not defined

```

## const 

1. const also introduced in ECMAScript 6 (ES6), declares a constant whose value cannot be changed after initialization.
2.  Like let, variables declared with const have block scope.
3. Variables declared with const must be initialized at the time of declaration, and their value cannot be reassigned.
However, if the variable is an object or array, its properties or elements can be modified.
Example:

```bash 
const x = 10;
// x = 20; // Error: Assignment to constant variable

const obj = { name: 'John' };
obj.name = 'Jane'; // Valid, changes the property of the object

```

In general, it's recommended to use const by default for declaring variables and only use let when you know the variable's value will change, and avoid using var due to its hoisting behavior and less predictable scoping rules.





