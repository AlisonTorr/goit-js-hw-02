let message;
let pricePerWord;

const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsNumber = message.split(" ").lenght;
  const totalPrice = wordsNumber * pricePerWord;

  return totalPrice;
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);
