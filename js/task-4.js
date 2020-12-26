const formatString = function (string) {
  if (string.length > 40) {
    string = string.pop(41);
  }

  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
