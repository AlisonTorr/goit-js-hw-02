const checkForSpam = function (message) {
  const string = message.toLowerCase();
  console.log(string);

  string.includes("spam", "sale") ? true : false;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!"));

console.log(checkForSpam("[SPAM] How to earn fast money?"));
