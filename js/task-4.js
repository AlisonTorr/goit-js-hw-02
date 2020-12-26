const formatString = function (string) {
  //   if (string.length > 40) {
  //     string = string.pop(41);
  //     }

  const result = string.length > 40 ? string.pop(41) : string;

  return result;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
