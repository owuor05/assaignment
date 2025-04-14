
//1. Create a variable to store your name and display it in an alert.
let firstName = 'owuor'
let lastName = 'benedict'

console.log(firstName,'',lastName)


//2. Declare two number variables and show their sum, difference, product, and quotient.

let x = '2'
let y = '3'

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)


//3. Write a program that converts Celsius to Fahrenheit.


//4. Create a program that calculates the area of a rectangle using variables for length and width.

var length = 'a'
var width = 'b'

let a = 2;
let b = 3;

const area = 2*a*b;

console.log(area)


//5. Write code that checks if a number is even or odd and displays the result.

let number = 'a'
a = 5;

if (a%2 == 0 ){
    console.log('even')
} 
else {
    console.log('odd')
}


//6. Create a program that determines if a year entered is a leap year.

let year = 'y'
y = 2024;

if (y%4 == 0){
    console.log('leap year')
}
else {
    console.log('not leap year')
}    


// 7. Write a function that returns the reverse of a string input.
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  let input = "javascript";
  console.log("Reversed: " + reverseString(input));
  
  // 8. Create a function that counts the number of vowels in a string.
  function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  let text = "Hello James";
  console.log("Number of vowels: " + countVowels(text));
  
  // 9. Write a program that finds the largest number in an array of 5 numbers.
  function findLargest(arr) {
    return Math.max(...arr);
  }
  let numbers = [14, 3, 78, 21, 9];
  console.log("Largest number: " + findLargest(numbers));
  
  // 10. Create a function that checks if a string is a palindrome.
  function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  let word = "madam";
  console.log(word + " is a palindrome: " + isPalindrome(word));
  
  // 11. Write code that calculates the factorial of a number.
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  console.log("Factorial of 5:", factorial(5));
  
  // 12. Create a function that generates a random number between two given values.
  function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log("Random number between 10 and 20:", randomBetween(10, 20));
  
  // 13. Write a program that converts a number of seconds into hours, minutes, and seconds.
  function convertTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  }
  console.log("3665 seconds is:", convertTime(3665));
  
  // 14. Create a program that checks if a number is prime.
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  console.log("Is 17 prime?", isPrime(17));
  
  // 15. Write a function that capitalizes the first letter of each word in a sentence.
  function capitalizeWords(sentence) {
    return sentence
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  console.log(capitalizeWords("hello world from javascript"));
  
  // 16. Create a program that calculates the sum of all numbers from 1 to n.
  function sumToN(n) {
    return (n * (n + 1)) / 2;
  }
  console.log("Sum from 1 to 100:", sumToN(100));
  
  // 17. Write code that finds the average of numbers in an array.
  function average(arr) {
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  }
  console.log("Average:", average([10, 20, 30, 40, 50]));
  
  // 18. Create a function that removes duplicate values from an array.
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  console.log("Unique values:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  
  // 19. Write a program that counts down from 10 to 1, then displays "Blast off!".
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
  console.log("Blast off!");
  
  // 20. Create a function that determines if a string contains only numbers
  function isOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }
  console.log("Is '12345' only numbers?", isOnlyNumbers("12345"));
  console.log("Is '123a5' only numbers?", isOnlyNumbers("123a5"));
  
  // 21. Write code that finds the second smallest number in an array.
  function secondSmallest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => a - b);
    return unique[1];
  }
  
  // 22. Create a program that displays the multiplication table for a given number.
  function multiplicationTable(n) {
    for (let i = 1; i <= 12; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
  
  // 23. Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).
  function isValidPassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    return minLength && hasUpper && hasLower && hasNumber;
  }
  
  // 24. Create code that simulates a simple calculator with basic operations.
  function calculator(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Cannot divide by zero";
      default:
        return "Invalid operator";
    }
  }
  
  // 25. Write a program that finds all factors of a given number.
  function findFactors(n) {
    let factors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  // 26. Create a function that checks if two strings are anagrams.
  function isAnagram(str1, str2) {
    let normalize = (str) =>
      str.toLowerCase().replace(/\s/g, "").split("").sort().join("");
    return normalize(str1) === normalize(str2);
  }
  
  // 27. Write a program that generates the Fibonacci sequence up to n terms.
  function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
      seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
  }
  
  // 28. Create code that sorts an array of numbers without using the built-in sort method.
  function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }
    return arr;
  }
  
  // 29. Write a function that counts how many times a specific element appears in an array.
  function countOccurrences(arr, target) {
    return arr.filter((el) => el === target).length;
  }
  
  // 30. Create a shopping cart program where users can add items, remove items, and calculate the total price.
  let cart = [];
  
  function addItem(name, price) {
    cart.push({ name, price });
  }
  
  function removeItem(name) {
    cart = cart.filter((item) => item.name !== name);
  }
  
  function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }