// The Main Object
const myObject = {
    a: 1,
    b: 2,
    c: 3
}

// Write Code Here To Prevent Changing Of Property C Value Without Using Object.freeze();
Object.defineProperty(myObject, "c",{
    writable: false,
})

myObject.c = 100;
console.log(myObject.c); // 3