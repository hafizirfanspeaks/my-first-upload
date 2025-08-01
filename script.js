// 1. Unique Words Counter

// const text = "JavaScript is great and JavaScript is powerful";

// function countUniqueWords(str) {
//   const words = str.toLowerCase().split(/\s+/);
//   const wordCount = {};

//   words.forEach(word => {
//     if (wordCount[word]) {
//       wordCount[word] += 1;
//     } else {
//       wordCount[word] = 1;
//     }
//   });

//   return wordCount;
// }

// const result = countUniqueWords(text);

// // Display result in the web page
// const output = document.createElement("pre"); // <pre> keeps formatting
// output.textContent = JSON.stringify(result, null, 2);
// document.body.appendChild(output);

// 2. Group Students by Class

// const students = [
//   { name: "Ali", class: "10th" },
//   { name: "Sara", class: "9th" },
//   { name: "Ahmed", class: "10th" },
//   { name: "Zara", class: "9th" }
// ];

// function groupByClass(studentArray) {
//   const grouped = {};

//   studentArray.forEach(student => {
//     const className = student.class;
//     if (!grouped[className]) {
//       grouped[className] = [];
//     }
//     grouped[className].push(student);
//   });

//   return grouped;
// }

// const result = groupByClass(students);

// const output = document.createElement("pre");
// output.textContent = JSON.stringify(result, null, 2);
// document.body.appendChild(output);

// 3. Filter Products by Price Range

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Mouse", price: 20 },
//   { name: "Phone", price: 500 }
// ];

// function filterByPrice(productsArray, min, max) {
//   return productsArray.filter(product => product.price >= min && product.price <= max);
// }

// // Example usage:
// const filtered = filterByPrice(products, 100, 600);

// // Show the result in the web page
// const output = document.createElement("pre");
// output.textContent = JSON.stringify(filtered, null, 2);
// document.body.appendChild(output);


// 4. Check Palindrome Using Function

// const input = "madam";

// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// const result = isPalindrome(input);

// // Display the result on the web page
// const output = document.createElement("p");
// output.textContent = `Is "${input}" a palindrome? Answer: ${result}`;
// document.body.appendChild(output);

// 5. Flatten Array

// const nestedArray = [1, [2, [3, 4]], 5];

// function flattenArray(arr) {
//   return arr.flat(Infinity); // flattens any depth
// }

// const result = flattenArray(nestedArray);

// // Display the result on the web page
// const output = document.createElement("pre");
// output.textContent = `Flattened Array: ${JSON.stringify(result)}`;
// document.body.appendChild(output);

// 6. Total Salary Calculation (Using Reduce)

// const employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Zara", salary: 1500 },
//   { name: "Ahmed", salary: 1200 }
// ];

// function getTotalSalary(employeeArray) {
//   return employeeArray.reduce((total, emp) => total + emp.salary, 0);
// }

// const totalSalary = getTotalSalary(employees);

// // Display the result on the web page
// const output = document.createElement("p");
// output.textContent = `Total Salary of All Employees: $${totalSalary}`;
// document.body.appendChild(output);

// 10. Sum of All Even Numbers in Nested Array

// const data = [1, 2, [4, 5, [6, 8]], 10];

// function flattenAndSumEvens(arr) {
//   const flat = arr.flat(Infinity);
//   const evenSum = flat.reduce((sum, num) => {
//     return num % 2 === 0 ? sum + num : sum;
//   }, 0);
//   return evenSum;
// }

// const result = flattenAndSumEvens(data);

// // Display the result on the web page
// const output = document.createElement("p");
// output.textContent = `Sum of All Even Numbers: ${result}`;
// document.body.appendChild(output);

// 11. Rest Operator in Function

// function calculateAverage(...numbers) {
//   if (numbers.length === 0) return 0;
//   const total = numbers.reduce((sum, num) => sum + num, 0);
//   return total / numbers.length;
// }

// const avg = calculateAverage(10, 20, 30, 40); // Example

// // Display the result on the web page
// const output = document.createElement("p");
// output.textContent = `Average: ${avg}`;
// document.body.appendChild(output);

// 12. Frequency Count with Spread

// const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// function countFrequencies(items) {
//   return items.reduce((acc, fruit) => {
//     return { ...acc, [fruit]: (acc[fruit] || 0) + 1 };
//   }, {});
// }

// const result = countFrequencies(arr);

// // Display the result on the web page
// const output = document.createElement("pre");
// output.textContent = `Fruit Frequency:\n${JSON.stringify(result, null, 2)}`;
// document.body.appendChild(output);

// 13. Toggle Status

// const tasks = [
//   { id: 1, name: "Code", done: false },
//   { id: 2, name: "Eat", done: true }
// ];

// function toggleTaskStatus(taskArray, id) {
//   return taskArray.map(task =>
//     task.id === id ? { ...task, done: !task.done } : task
//   );
// }

// // Toggle task with id 1
// const updatedTasks = toggleTaskStatus(tasks, 1);

// // Display the result on the web page
// const output = document.createElement("pre");
// output.textContent = `Updated Tasks:\n${JSON.stringify(updatedTasks, null, 2)}`;
// document.body.appendChild(output);

// 14. Sort by Name Length

// const names = ["Ali", "Zara", "Ahmed", "Usman"];

// function sortByLength(arr) {
//   return [...arr].sort((a, b) => a.length - b.length);
// }

// const sortedNames = sortByLength(names);

// // Display the result on the web page
// const output = document.createElement("pre");
// output.textContent = `Sorted by Length:\n${JSON.stringify(sortedNames, null, 2)}`;
// document.body.appendChild(output);
















