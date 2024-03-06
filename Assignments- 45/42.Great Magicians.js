"use strict";
// Task 42 
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
//41
function show_magicians(magician) {
    for (const magicians of magician) {
        console.log(magicians);
    }
}
//     const magicians: string [] = ['Harry Porter', 'Ron Weasley','Ali', 'Jawad','Aatif']; 
//     show_magicians(magicians);
// 42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great magician.';
    }
}
const magicians2 = ['Harry Porter', 'Rony', 'Ali', 'Doctor', 'Qurishi'];
make_great(magicians2);
show_magicians(magicians2);
