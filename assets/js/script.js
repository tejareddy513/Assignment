var doc = document

// Function to prompt user for password criteria

function getPasswordCriteria() {
  
  // Prompt for password length
  
  let passwordLength = prompt("Enter the desired password length (between 8 and 128 characters):");

  // Prompt for character types
  
  var confirmLowercase = confirm("Include lowercase characters?");
      confirmUppercase = confirm("Include uppercase characters?");
      confirmNumeric = confirm("Include numeric characters?");
      confirmSpecialChars = confirm("Include special characters?");


  // Return an object with the selected criteria
  
  return {
    passwordLength,
    confirmLowercase,
    confirmUppercase,
    confirmNumeric,
    confirmSpecialChars
  };
}


// Function to generate a random password

function generatePassword(criteria) {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      numericChars = "0123456789";
      specialChars = "!@#$%^&*()-_=+";

  let charset = "";

  if (criteria.confirmLowercase) {
    charset += lowercaseChars;
  }

  if (criteria.confirmUppercase) {
    charset += uppercaseChars;
  }

  if (criteria.confirmNumeric) {
    charset += numericChars;
  }

  if (criteria.confirmSpecialChars) {
    charset += specialChars;
  }

  let password = "";

  for (let i = 0; i < criteria.passwordLength; i++) {
    let rand = Math.floor(Math.random() * charset.length);
    password += charset.substring(rand, rand + 1);
  }

  return password;
}

// Function to write the generated password to the page

function writePassword() {
  var passwordCriteria = getPasswordCriteria();
      password = generatePassword(passwordCriteria);
      passwordText = doc.querySelector("#password");

  passwordText.value = password;
}

// Get reference to the #generate button

var generateBtn = doc.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
