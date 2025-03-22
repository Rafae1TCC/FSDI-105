console.log("Welcome to FSDI 104");

let globalVariable = "I am a global variable";

function exampleFunction() {
  let localVariable = "I am a local variable";
  console.log(globalVariable);
  console.log(localVariable);
  if (true) {
    let blockVariable = "This is a block variable";
    console.log(blockVariable);
  }
}
console.log(globalVariable);
exampleFunction();

let fruits = ["apple", "banana", "orange"];
console.log(`This is an array: ${fruits}`);
console.table(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log(fruits);

console.log(fruits.length);

fruits.push("watermelon");
console.log(fruits);

fruits.pop();
fruits.pop();

console.log(fruits);

let students = ["Isai", "Rafael", "Erick", "George", "Jeffrey"];

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

let person = {
  name: "Mike",
  lastName: "Scott",
  age: 40,
  isStudent: false,
};

console.log(`The person name is ${person.name}`);
console.log(person["age"]);
console.log(person.lastName);
console.log(person.isStudent);

let student1 = {
  name: "Leo",
  email: "leo@gmail.com",
  age: 80,
  address: "742 evergreen terrace springfield, USA",
  isStudent: true,
};
let student2 = {
  name: "Erick",
  email: "Erick@gmail.com",
  age: 26,
  address: "742 evergreen terrace springfield, USA",
  isStudent: true,
};
let student3 = {
  name: "George",
  email: "George@gmail.com",
  age: 34,
  address: "742 evergreen terrace springfield, USA",
  isStudent: true,
};
let student4 = {
  name: "Isai",
  email: "Isai@gmail.com",
  age: 25,
  address: "742 evergreen terrace springfield, USA",
  isStudent: true,
};

let studentList = [student1, student2, student3, student4];

console.log("Student list " + studentList.length);

document.getElementById("studentsCounter").innerHTML = `
  We have ${studentList.length} students
  in the sytem
`;

function getStudentNames() {
  let list = document.getElementById("studentNames");
  for (let i = 0; i < studentList.length; i++) {
    list.innerHTML += ` <li>${studentList[i].name}</li> `;
  }
}

getStudentNames();
