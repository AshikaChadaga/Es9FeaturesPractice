const student = {
    age: 10,
    height: 5,
    weight: 50
}
const { age, ...other } = student;
console.log(age);
console.log(other);

//spread operator
const obj1 = { a: 10, b: 20 };
const obj2 = { c: 30 };

//clone obj1
const clone_obj = { ...obj1 };

//combine obj1 and obj2
const obj3 = { ...obj1, ...obj2 };
console.log("Cloned Object : ", clone_obj);
console.log("Combined object: ", obj3);