let finalString;

const formatString = function (string) {
  const result = string.length > 40 ? finalString : string;

  const stringToArray = string.split(" ");
  console.log(stringToArray);

  const newString = stringToArray.splice(40);
  console.log(newString);

  const cutString = stringToArray.splice(39, 0, "...");

  finalString = cutString.join(" ");

  return result;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
