# Note Taker
# Password Generator 

[Visit Deployed Site](https://abenedetti27.github.io/password-generator/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description <a name="description"></a>

This is an app to randomly generate a password that meets certain criteria so that the user can create a strong password that provides greater security.

## Table of Countents 
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation <a name="installation"></a>
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears



![Screenshot of Password Generator]![Screenshot](image.png)
![Screenshot of generated password]![Screenshot](image-1.png)


```
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let passwordLength;

    // Prompt for password length until a valid input is received
    do {
      passwordLength = parseInt(prompt("Enter password length (between 8 and 128 characters)"));

      if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
      }
    } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

    let includeLowerCase, includeUpperCase, includeNumbers, includeSymbols;

    // Prompt for character types until at least one type is selected
    do {
      includeLowerCase = confirm("Include lowercase characters?");
      includeUpperCase = confirm("Include uppercase characters?");
      includeNumbers = confirm("Include numbers?");
      includeSymbols = confirm("Include symbols?");

      if (!(includeLowerCase || includeUpperCase || includeNumbers || includeSymbols)) {
        alert("Please select at least one character type.");
      }
    } while (!(includeLowerCase || includeUpperCase || includeNumbers || includeSymbols));


```

## Usage <a name="usage"></a>
This is a deployed application to write and save notes to organize thoughts and keep track of tasks to be completed.


## License <a name="license"></a>
MIT License


## Questions <a name="questions"></a>

GitHub Profile: [github](https://github.com/abenedetti27)

Please direct any questions to:

Email: abenedetti27@gmail.com
