"use strict";
// Task 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and 
// titlecase.
let personName = '';
personName = prompt('what is your name?') || ('');
let lowercase = personName.toLowerCase();
let upercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase()
    + word.slice(1).toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, Here is your in:
  lowercase: ${lowercase}
  upercase:  ${upercase}
  titlecase: ${titlecase}`);
}
else {
    alert('Please fill your name!');
}
