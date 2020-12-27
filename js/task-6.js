const numbers = [];
let total = 0;

let input = prompt("Введите число");

const addNumber = (input) => {
  if (input !== null) {
    break;
  } else {
    numbers.push(input);
    console.log(numbers);
  }

  for (const number of numbers) {
    total += number;
  }

  return total;
};
