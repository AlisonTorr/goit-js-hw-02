const pets = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let message;

const logItems = function (array) {
  for (let i = 0; i < pets.length; i += 1) {
    message = `${i + 1} - ${array[i]}`;
    console.log(message);
  }
};

logItems(pets);
logItems(numbers);
