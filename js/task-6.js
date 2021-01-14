const numbers = [];
let total = 0;

let input = prompt("Введите число");

const addNumber = (input) => {
  if (input !== null) {
    numbers.push(input);
    console.log(numbers);
  }

  for (const number of numbers) {
    total += number;
  }

  let result = `Общая сумма равна ${total}`;

  return result;
};

console.log(addNumber(input));
