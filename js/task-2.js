const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const wordsNumber = words.lenght;
  const totalPrice = wordsNumber * pricePerWord;

  return totalPrice;
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);
