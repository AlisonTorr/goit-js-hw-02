let message;
let pricePerWord;

const calculateEngravingPrice = function (message, pricePerWord) {
  const wordNumber = message.length;
  const totalPrice = Math(wordNumber * pricePerWord);

  console.log(totalPrice);
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);
