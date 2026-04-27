// DAY 1: TypeScript Basics & Type Annotations
// Complete these exercises in order. Don't peek at solutions until you try!

// ============================================
// PART 1: Basic Type Annotations (15 min)
// ============================================

// Exercise 1.1: Fix the type errors
// TODO: Add proper type annotations to make this code type-safe

let studentName = "John Doe";
let studentAge = 20;
let isEnrolled = true;
let grades = [85, 90, 78, 92];

// studentName = 123;  // This should give an error
// studentAge = "twenty";  // This should give an error

console.log(`${studentName} is ${studentAge} years old`);


// Exercise 1.2: Create variables with explicit types
// TODO: Declare these variables with proper types

// A variable for storing a product price
// A variable for storing a product name
// A variable for checking if product is in stock
// An array of product categories


// Exercise 1.3: Type inference vs explicit typing
// TODO: Identify which uses inference and which uses explicit typing

let city = "New York";  // What type is this?
let temperature: number = 72;  // What about this?
let coordinates = [40.7128, -74.0060];  // And this?



// ============================================
// PART 2: Functions with Types (20 min)
// ============================================

// Exercise 2.1: Add type annotations to parameters and return type
// TODO: Complete this function

function calculateArea(width, height) {
  return width * height;
}

// Test it
console.log(calculateArea(5, 10));


// Exercise 2.2: Create a function to calculate discount
// TODO: Write a function that takes:
// - originalPrice (number)
// - discountPercent (number)
// - Returns the final price (number)

function applyDiscount(/* add parameters here */) {
  // Your code here
}


// Exercise 2.3: Optional parameters
// TODO: Create a greeting function that takes:
// - name (required, string)
// - greeting (optional, string, defaults to "Hello")
// - Returns a greeting message (string)

function greet(/* add parameters here */) {
  // Your code here
}

// Should work for both:
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(greet("Bob", "Hi"));  // "Hi, Bob!"


// Exercise 2.4: Arrow functions
// TODO: Convert this to an arrow function with proper types

function multiply(a, b) {
  return a * b;
}



// ============================================
// PART 3: Arrays (15 min)
// ============================================

// Exercise 3.1: Type array of numbers
// TODO: Create an array of test scores with proper type annotation

let testScores = [88, 92, 75, 95, 100];


// Exercise 3.2: Array of strings - two syntaxes
// TODO: Create the same array using both Array<T> and T[] syntax

let fruits1 = ["apple", "banana", "orange"];
let fruits2 = ["apple", "banana", "orange"];


// Exercise 3.3: Function that works with arrays
// TODO: Create a function that calculates the average of an array of numbers

function calculateAverage(numbers) {
  // Your code here
}

console.log(calculateAverage([10, 20, 30, 40]));  // Should return 25



// ============================================
// PART 4: Real-World Mini Project (30 min)
// ============================================

// PROJECT: Student Grade Calculator
// Create a system to calculate student grades

// TODO 4.1: Create these functions with proper types

// Calculate average grade
function getAverage(grades) {
  // Calculate and return average
}

// Get letter grade based on average
function getLetterGrade(average) {
  // Return "A" for 90+, "B" for 80-89, "C" for 70-79, "D" for 60-69, "F" below 60
}

// Check if student is passing (average >= 60)
function isPassing(average) {
  // Return true or false
}

// Generate a report
function generateReport(studentName, grades) {
  // Calculate average
  // Get letter grade
  // Check if passing
  // Return a formatted string report
  
  // Example output:
  // "Student: John Doe
  //  Average: 85.5
  //  Grade: B
  //  Status: Passing"
}


// Test your project
const myGrades = [88, 92, 75, 95, 85];
console.log(generateReport("John Doe", myGrades));



// ============================================
// BONUS CHALLENGES (If you finish early)
// ============================================

// BONUS 1: Create a function that finds the maximum number in an array
function findMax(numbers) {
  // Your code here
}


// BONUS 2: Create a function that counts how many numbers are above average
function countAboveAverage(numbers) {
  // Your code here
}


// BONUS 3: Create a function to validate email format (basic check)
function isValidEmail(email) {
  // Check if it contains @ and .
  // Return true or false
}



// ============================================
// SELF-CHECK: Can you answer these?
// ============================================

// 1. What's the difference between 'string' and 'String' in TypeScript?
// 2. When should you use explicit type annotations vs letting TypeScript infer?
// 3. What happens if you don't specify a return type for a function?
// 4. What is the 'void' return type used for?
// 5. Can you assign a number to a variable typed as string? Why not?

// Write your answers as comments below:
// Answer 1:
// Answer 2:
// Answer 3:
// Answer 4:
// Answer 5:
