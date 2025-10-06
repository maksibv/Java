let input = prompt("Введите числа массива через пробел:");
let arr = input.split(" ").map(Number);

let transformed = arr.map((num, idx) => (num % 3 === 0 ? num * idx : num));

let sum = transformed.reduce((acc, val) => acc + val, 0);
let average = sum / transformed.length;

alert("Преобразованный массив: " + transformed.join(", ") + "\nСреднее арифметическое: " + average);
let input = prompt("Введите числа массива через пробел:");
let arr = input.split(" ").map(Number);

let transformed = arr.map((num, idx) => (num % 3 === 0 ? num * idx : num));

let sum = transformed.reduce((acc, val) => acc + val, 0);
let average = sum / transformed.length;

alert("Преобразованный массив: " + transformed.join(", ") + "\nСреднее арифметическое: " + average);
