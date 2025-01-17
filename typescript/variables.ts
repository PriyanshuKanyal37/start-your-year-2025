// variables.ts
let foo1 = "Hi";

{
    var foo2 = "Hello";
    let foo1 = "Goodbye!";
    const foo3 = "I am only here";
    let foo4 = "I am only here as well";
}

// foo3 and foo4 are scoped within the block, so they cannot be accessed here.
console.log(foo1, foo2); // foo1 should log 'Hi', foo2 should log 'Hello'
touch typescript/data-types.ts
