const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  console.log(words);

  const wordsNumber = Number(words.lenght);
  console.log(wordsNumber);

  const totalPrice = Number(wordsNumber * pricePerWord);

  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
