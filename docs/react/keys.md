# Keys 


In React, keys are unique identifiers used for efficiently rendering lists of components. They ensure proper updates by helping React identify changes, additions, and removals within arrays. Keys should be stable and unique among siblings to optimize performance and enable component reuse. They're essential for rendering arrays of components effectively.

#### Example 
```bash 
function MyComponent() {
  const items = ['apple', 'banana', 'orange'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```
In this example, each list item li is assigned a key based on its index in the array. While using array indices as keys is convenient, it's not always the best choice, especially if the order of items might change or if items can be added or removed. In such cases, using unique IDs or keys provided by data can be more appropriate.

```bash
function MyComponent() {
  const items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'orange' },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

```
In this improved example, each item in the array has a unique id property, which is used as the key for each list item. This ensures stability and uniqueness across renders, improving performance and component reuse.