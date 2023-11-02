// Завдання 1

/**
 * Функція `filterStudentsByGrade` фільтрує студентів за рівнем оцінки та виводить інформацію про них.
 *
 *  grade - Рівень оцінки для фільтрації.
 */
function filterStudentsByGrade(students, grade) {
  console.clear();

  console.log("Завдання: 1 ==============================");

  const filteredStudents = students.filter(
    (student) => student.grade === grade
  );

  filteredStudents.forEach((student) => {
    console.log(`Студент: ${student.name}`);
  });
}

// Виклик функції для фільтрації студентів з рівнем "A"
filterStudentsByGrade(
  [
    { name: "John", grade: "A" },
    { name: "Kate", grade: "B" },
    { name: "Mike", grade: "A" },
    { name: "Anna", grade: "C" },
    { name: "Tom", grade: "B" },
  ],
  "A"
);

// Завдання 2
/**
 * Функція `logArrayElements` приймає масив та виводить кожен його елемент в консоль.
 *
 *  arr - Масив для обробки.
 */
function logArrayElements(arr) {
  console.clear();

  console.log("Завдання: 2 ==============================");

  if (!Array.isArray(arr)) {
    console.error("Аргумент має бути масивом!");
    return null;
  }

  arr.forEach((element, index) => {
    console.log(`Елемент ${index}: ${element}`);
  });
}

// Перевірка
console.log("Завдання: 2 ==============================");
logArrayElements([1, 2, 3, "a", "b", "c"]);
// Виведе в консоль:
// Елемент 0: 1
// Елемент 1: 2
// Елемент 2: 3
// Елемент 3: a
// Елемент 4: b
// Елемент 5: c

// Завдання 3
/**
 * Функція `warnAboutMaxArrayLength` перевіряє, чи перевищує довжина масиву вказане максимальне значення.
 *
 *  arr - Масив для перевірки.
 *  maxLength - Максимальна довжина масиву.
 */
function warnAboutMaxArrayLength(arr, maxLength) {
  if (!Array.isArray(arr) || typeof maxLength !== "number") {
    console.error(
      "Перший аргумент має бути масивом, другий аргумент має бути числом!"
    );
    return null;
  }

  if (arr.length > maxLength) {
    console.warn("Увага! Довжина масиву перевищує максимально допустиму!");
  } else {
    console.log("Довжина масиву не перевищує максимально допустиму.");
  }
}

// Перевірка
console.log("Завдання: 3 ==============================");
warnAboutMaxArrayLength([1, 2, 3, 4, 5], 3);
// Виведе в консоль попередження: "Увага! Довжина масиву перевищує максимально допустиму!".

// Завдання 4
/**
 * Функція `compareArrays` приймає два масиви чисел як аргументи і порівнює їх.
 * Вона використовує `console.assert()` для перевірки того, чи обидва масиви є однаковими.
 *
 *  arr1 - Перший масив чисел.
 *  arr2 - Другий масив чисел.
 */
function compareArrays(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  const arr1Json = JSON.stringify(arr1);
  const arr2Json = JSON.stringify(arr2);

  console.assert(arr1Json === arr2Json, "Масиви не однакові!");
}

console.log("Завдання: 4 ==============================");
compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4]);
// Виведе "Assertion failed: Масиви не однакові!"

// Завдання 5
/**
 * Функція `buildMatrix` створює двовимірний масив (матрицю) розміром size x size,
 * заповнює її випадковими числами від 0 до 9, а потім виводить матрицю в консоль
 *
 *  size - розмір матриці.
 *  Повернеться згенерована матриця.
 */
function buildMatrix(size) {
  if (typeof size !== "number") {
    console.error("Аргумент має бути числом!");
    return null;
  }

  const matrix = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      const randomNum = Math.floor(Math.random() * 10);
      row.push(randomNum);
    }

    matrix.push(row);
  }

  console.table(matrix);

  return matrix;
}

console.log("Завдання: 5 ==============================");
buildMatrix(5);
// Виведе в консоль матрицю розміром 5x5, заповнену випадковими числами від 0 до 9.

// Завдання 6
/**
 * Функція `traceBackward` виводить числа від заданого до 1 у зворотному порядку,
 * використовуючи рекурсію.
 *
 *  n - стартове число.
 */
function traceBackward(n) {
  console.log(n);

  if (n > 1) {
    traceBackward(n - 1);
  }
}

console.log("Завдання: 6 ==============================");
traceBackward(5);
// Виведе в консоль числа від 5 до 1, а потім виведе стек викликів.

// Завдання 7
/**
 * Функція `displayGroupedInfo` виводить інформацію про групу студентів в консоль, організовуючи дані у групи.
 * students - масив об'єктів-студентів.
 */
function displayGroupedInfo(students) {
  for (const student of students) {
    console.log(`Студент: ${student.name}`);
    console.log(`  Вік: ${student.age}`);
    console.log(`  Предмет: ${student.subject}`);
  }
}

console.log("Завдання: 7 ==============================");
displayGroupedInfo([
  { name: "Alex", age: 22, subject: "Math" },
  { name: "Max", age: 23, subject: "Physics" },
  { name: "Anna", age: 21, subject: "Chemistry" },
]);
// Виведе в консоль:
// Студент: Alex
//   Вік: 22
//   Предмет: Math
// Студент: Max
//   Вік: 23
//   Предмет: Physics
// Студент: Anna
//   Вік: 21
//   Предмет: Chemistry

// Завдання 8
/**
 * Функція `validateUserInput` перевіряє коректність введених користувачем даних.
 * Для цього використовуємо `console.warn()` та `console.assert()`.
 *
 *  userInput - об'єкт з введеними користувачем даними.
 */
function validateUserInput(userInput) {
  if (!userInput.username) {
    console.warn("Помилка: ім'я користувача відсутнє!");
  }

  if (!userInput.password) {
    console.warn("Помилка: пароль відсутній!");
  } else {
    if (userInput.password.length < 8) {
      console.warn("Попередження: пароль має бути довшим за 8 символів!");
    }
  }
}

console.log("Завдання: 8 ==============================");
validateUserInput({ username: "alex", password: "pass" });
// Виведе в консоль:
// Попередження: пароль має бути довшим за 8 символів!

// Завдання 9
/**
 * Функція `calculateTotalPrice` обчислює загальну вартість товарів та логує час виконання.
 *
 * products - Масив об'єктів товарів з властивостями `price` та `title`.
 */
function calculateTotalPrice(products) {
  const startTime = Date.now();

  let total = 0;

  for (const product of products) {
    total += product.price;
  }

  console.log(`Загальна вартість товарів: ${total}`);

  const endTime = Date.now();
  console.log(
    `calculateTotalPrice: ${endTime - startTime}ms (час може відрізнятись)`
  );
}

console.log("Завдання: 9 ==============================");
const products = [
  { title: "Телефон", price: 1000 },
  { title: "Ноутбук", price: 2000 },
  { title: "Планшет", price: 500 },
];

calculateTotalPrice(products);
// Виведе
// Загальна вартість товарів: 3500
// calculateTotalPrice: 0.994ms (час може відрізнятись)

// Завдання 10
/**
 * Функція `countVowelsAndConsonants` пораховує кількість голосних і приголосних літер у слові.
 *
 *  word - слово, для якого потрібно порахувати кількість літер.
 */
function countVowelsAndConsonants(word) {
  const vowels = "aeiou";

  let vowelCount = 0;
  let consonantCount = 0;

  for (const letter of word) {
    const lowerCaseLetter = letter.toLowerCase();

    if (vowels.includes(lowerCaseLetter)) {
      vowelCount++;
    } else if (lowerCaseLetter >= "a" && lowerCaseLetter <= "z") {
      consonantCount++;
    }
  }
}
console.log("Завдання: 10 ==============================");
countVowelsAndConsonants("HelloWorld!");

