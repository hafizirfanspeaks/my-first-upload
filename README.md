// Name: Hafiz Irfan Farooq
// Roll No: 272551

// // 1) Write a program that checks whether a number is even or odd using +prompt

// let number = +prompt("Enter a number to check if it's even or odd:");

// if (isNaN(number)) {
//   alert("Invalid input! Please enter a valid number.");
// } else {
//   if (number % 2 === 0) {
//     alert(number + " is an Even number.");
//   } else {
//     alert(number + " is an Odd number.");
//   }
// }

// 1) Write a program that checks whether a number is even or odd using input field and button

// function checkNumber() {
//   const num = +document.getElementById("numberInput").value;
//   const result = document.getElementById("result");

//   if (isNaN(num)) {
//     result.textContent = "Please enter a valid number.";
//     result.style.color = "red";
//   } else if (num % 2 === 0) {
//     result.textContent = num + " is an Even number.";
//     result.style.color = "green";
//   } else {
//     result.textContent = num + " is an Odd number.";
//     result.style.color = "blue";
//   }
// }


// 2) Write a program that checks if someone's age is eligible to vote (age >= 18)

// let age = +prompt("Enter your age:");

// if (isNaN(age)) {
//   alert("Please enter a valid number.");
// } else if (age >= 18) {
//   alert("Eligible to vote.");
// } else {
//   alert("Not eligible to vote.");
// }


// 3) Print numbers from 1 to 10 using a for loop

// let result = "";

// for (let i = 1; i <= 10; i++) {
//   result += i + "\n";
// }

// alert(result);


// 4) Print even numbers between 1 to 20 using a while loop

// let i = 1;
// let result = "";

// while (i <= 20) {
//   if (i % 2 === 0) {
//     result += i + "\n";
//   }
//   i++;
// }

// alert(result);


// 5) Print the reverse of a given string using a for loop

// let original = prompt("Enter a string:");
// let reversed = "";

// for (let i = original.length - 1; i >= 0; i--) {
//   reversed += original[i];
// }

// alert("Reversed string: " + reversed);


// 6) Write a function that adds two numbers and returns the result


// function addNumbers(a, b) {
//   return a + b;
// }

// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");

// let sum = addNumbers(num1, num2);

// alert("The sum is: " + sum);



// 7) Write a function that returns the factorial of a number

// function factorial(n) {
//   if (n < 0) {
//     return "Factorial is not defined for negative numbers.";
//   }

//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// let num = +prompt("Enter a number to find its factorial:");

// let output = factorial(num);

// alert("Factorial of " + num + " is: " + output);



// 8) Check if a given string is a palindrome (e.g., "madam")

// const word = prompt("Enter a word:");
// const reversed = word.split('').reverse().join('');

// if (word === reversed) {
//   alert("Yes, it's a palindrome!");
// } else {
//   alert("No, it's not a palindrome.");
// }

// 9) Create an object student with the following properties: name, rollNo, marks, isPassed

// const student = {
//   name: "Irfan",
//   rollNo: 101,
//   marks: 85,
//   isPassed: "yes absolutely"
// };

// console.log(student);


// 10) Access the properties of the student object using dot and bracket notation

// const student = {
//   name: "Irfan",
//   rollNo: 101,
//   marks: 85,
//   isPassed: "YES"
// };

// // Dot notation
// console.log(student.name);
// console.log(student.rollNo);

// // Bracket notation
// console.log(student["marks"]);
// console.log(student["isPassed"]);

// 11) Add a method inside the student object that prints: "Hello, I am [name]"

// const student = {
//   name: "Irfan",
//   rollNo: 101,
//   marks: 85,
//   isPassed: "YES",
//   greet: function() {
//     document.writeln("Hello, I am " + this.name);
//   }
// };

// student.greet();

// 12) Create a function that takes an object and prints all keys and values using a loop

// function printObject(obj) {
//   for (let key in obj) {
//     document.writeln(key + ": " + obj[key] + "<br>");
//   }
// }

// const student = {
//   name: "Irfan",
//   rollNo: 101,
//   marks: 85,
//   isPassed: "YES"
// };

// printObject(student);

// 13) Create an array of your favorite fruits

// const fruits = ["Mango", "Banana", "Apple", "Grapes", "Orange"];

// document.writeln("My favorite fruits are:<br>");
// document.writeln(fruits.join(", "));

// 14) Add a new fruit to the array

// const fruits = ["Mango", "Banana", "Apple", "Grapes", "Orange"];

// fruits.push("Pineapple");

// document.writeln("Updated fruits list:<br>");
// document.writeln(fruits.join(", "));

// 15) Remove the last fruit from the array

// const fruits = ["Mango", "Banana", "Apple", "Grapes", "Orange", "Pineapple"];

// fruits.pop();

// document.writeln("Fruits after removing the last one:<br>");
// document.writeln(fruits.join(", "));


// 16) Check if "banana" is present in the array using .includes()

// const fruits = ["Mango", "Banana", "Apple", "Grapes", "Orange"];

// if (fruits.includes("Banana")) {
//   document.writeln("Yes, Banana is in the list.");
// } else {
//   document.writeln("No, Banana is not in the list.");
// }


// 17) Create an array of numbers. Return a new array where each number is multiplied by 2.

// const numbers = [2, 4, 6, 8, 10];

// const doubledNumbers = numbers.map(num => num * 2);

// document.writeln("Original numbers: " + numbers.join(", ") + "<br>");
// document.writeln("Doubled numbers: " + doubledNumbers.join(", "));

// 18) Create an array of ages. Return only those who are 18 or older using .filter()

// const ages = [12, 17, 18, 21, 15, 30];

// const adults = ages.filter(age => age >= 18);

// document.writeln(adults);

// 19) Use .find() to get the first number greater than 10 from an array

// const numbers = [4, 7, 10, 12, 15, 8];

// const result = numbers.find(num => num > 10);

// document.writeln("First number greater than 10: " + result);

// 20) Use .forEach() to print every name from an array of names

// 20) Use .forEach() to print every name from an array of names

// const students = [
//   { name: "Irfan", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// students.forEach(function(student) {
//   document.writeln(student.name + "<br>");
// });


// 21) Use .map() to return an array of only student names

// const students = [
//   { name: "Irfan", marks: 80 },
//   { name: "Farooq", marks: 80 },
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// const names = students.map(student => student.name);

// document.writeln("Student Names: " + names.join(", "));

// 22) Use .filter() to return students who scored more than 50

// const students = [
//   { name: "Irfan", marks: 99 },
//   { name: "Farooq", marks: 80 },
//   { name: "Ali", marks: 40 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// const passedStudents = students.filter(student => student.marks > 50);

// passedStudents.forEach(student => {
//   document.writeln(student.name + " - " + student.marks + "<br>");
// });

// 23) Use .find() to get the student whose name is "Zara"

// const students = [
//   { name: "Irfan", marks: 80 },
//   { name: "Farooq", marks: 80 },
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// const zaraStudent = students.find(student => student.name === "Zara");

// document.writeln("Name: " + zaraStudent.name + "<br>");
// document.writeln("Marks: " + zaraStudent.marks);


// 24) Use .forEach() to print each student’s name and marks

// const students = [
//   { name: "Irfan", marks: 80 },
//   { name: "Farooq", marks: 80 },
//   { name: "Ali", marks: 80 },
//   { name: "Zara", marks: 95 },
//   { name: "Umar", marks: 45 }
// ];

// students.forEach(student => {
//   document.writeln(student.name + " - " + student.marks + "<br>");
// });


// 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.

// const numbers = [2, 4, 6, 8];

// const squared = numbers.map(num => num * num);

// document.writeln("Squared numbers: " + squared.join(", "));


// 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.

// const names = ["Ali", "Zara", "Umar", "Ahmed"];

// names.forEach(name => {
//   document.writeln(name + "<br>");
// });


// 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18

// const ages = [12, 25, 17, 20, 16, 30];

// const above18 = ages.filter(age => age > 18);

// document.writeln("Ages above 18: " + above18.join(", "));

// 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"]


// const fruits = ["banana", "mango", "grapes", "apple"];

// if (fruits.includes("apple")) {
//   document.writeln("Yes, apple exists in the array.");
// } else {
//   document.writeln("No, apple does not exist in the array.");
// }


// 29) Find the first student who scored more than 90

// const students = [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ];

// const topper = students.find(student => student.marks > 90);

// document.writeln("Name: " + topper.name + "<br>");
// document.writeln("Marks: " + topper.marks);


// 30) You have an array [200, 150, 300, 100]. Return the total sum.

// const amounts = [200, 150, 300, 100];

// const total = amounts.reduce((sum, value) => sum + value, 0);

// document.writeln("Total Sum: " + total);


// 31) From the given array, return a new array of only usernames

// const users = [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ];

// const usernames = users.map(user => user.username);

// document.writeln("Usernames: " + usernames.join(", "));


// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers

// const numbers = [1, 2, 3, 4, 5, 6];

// const oddNumbers = numbers.filter(num => num % 2 !== 0);

// document.writeln("Odd Numbers: " + oddNumbers.join(", "));



// 33) Count how many vowels are present in the string "javascript"

// const word = "javascript";
// const vowels = "aeiou";

// let count = 0;

// for (let i = 0; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//     count++;
//   }
// }

// document.writeln("Total vowels: " + count);


// 34) Show task name and status

// let tasks = [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ];

// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i].completed === true) {
//     document.writeln("Task: " + tasks[i].task + " - Status: Completed<br>");
//   } else {
//     document.writeln("Task: " + tasks[i].task + " - Status: Incomplete<br>");
//   }
// }

// 35) Add "status": "active" and print

// let employees = [
//   { name: "Ali", id: 1 },
//   { name: "Zara", id: 2 },
//   { name: "Umar", id: 3 }
// ];

// let newEmployees = [];

// for (let i = 0; i < employees.length; i++) {
//   let updated = {
//     name: employees[i].name,
//     id: employees[i].id,
//     status: "active"
//   };
//   newEmployees.push(updated);
//   document.writeln("Name: " + updated.name + 
//                    " - ID: " + updated.id + 
//                    " - Status: " + updated.status + "<br>");
// }

// 35) Add "status": "active" using .map()

// let employees = [
//   { name: "Ali", id: 1 },
//   { name: "Zara", id: 2 },
//   { name: "Umar", id: 3 }
// ];

// let updatedEmployees = employees.map(function(emp) {
//   return {
//     name: emp.name,
//     id: emp.id,
//     status: "active"
//   };
// });

// updatedEmployees.forEach(function(emp) {
//   document.writeln("Name: " + emp.name + 
//                    " - ID: " + emp.id + 
//                    " - Status: " + emp.status + "<br>");
// });
