---
sidebar_position: 1
---

# This keyword

In JavaScript, the 'this' keyword signifies the environment in which a function operates. Primarily, it symbolizes the object to which the function is attached when it's invoked. Nevertheless, the 'this' value is dynamic and can alter based on the method of invocation.

Here's a straightforward illustration to elucidate its application:

```bash
const obj = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

obj.greet(); // Outputs: Hello, John!

```

In this instance, within the 'greet' method, 'this' pertains to the 'obj' object because 'greet' is invoked upon the 'obj' object via dot notation. This mechanism facilitates the method's access to the properties of the object.





