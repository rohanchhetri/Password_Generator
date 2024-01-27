const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `\`!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;

const allCharacters = upperCase + lowerCase + numbers + symbols;

// function to generate random 12 characters password
const generatePassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (password.length < 12) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  passwordBox.value = password;
};

// function to copy password to the clipboard
const copyPassword = () => {
  if (passwordBox.value === "") return;
  else passwordBox.select();
  navigator.clipboard.writeText(passwordBox.value);
  alert("Text copied to clipboard.");
};
