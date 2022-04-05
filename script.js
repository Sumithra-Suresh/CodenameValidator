//===========================================================
// Function that checks the length of the string.
// return true if the string is more than 5 characters long.
// Otherwise, return false.
//===========================================================
function checkLength(str) {
    return str.length > 5 ? true : false;
  }
  
  //===========================================================
  // Function returns true if the string contains at least one
  // lowercase letter and at least one uppercase letter.
  // Otherwise, return false.
  //===========================================================
  function checkUpperLowerCase(str) {
    let foundUpper = false;
    let foundLower = false;
  
    for (let i in str) {
      if (
        !foundUpper &&
        isNaN(parseInt(str[i])) &&
        str[i] === str[i].toUpperCase()
      ) {
        foundUpper = true;
      }
      if (!foundLower && str[i] === str[i].toLowerCase()) {
        foundLower = true;
      }
    }
  
    return foundUpper && foundLower;
  }
  
  //===========================================================
  // Function return true if the string has at least two numbers
  // in it. Otherwise, return false.
  //===========================================================
  function checkForNumbers(str) {
    let count = 0;
    let found = false;
  
    for (let i in str) {
      if (!found && isNaN(str[i]) === false) {
        count++;
        found = count === 2 ? true : false;
      }
    }
    return found;
  }
  
  //===========================================================
  // Function validateUsername
  //
  //===========================================================
  function validateUsername() {
    let userName = document.forms['form']['uname'].value;
  
    if (
      checkLength(userName) &&
      checkUpperLowerCase(userName) &&
      checkForNumbers(userName)
    ) {
      alert('Username accepted');
    } else {
      alert('Please eneter valid username');
    }
  }
  