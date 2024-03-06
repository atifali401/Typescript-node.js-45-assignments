"use strict";
// Task 41
/* Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/
const magicians = ['Harry Porter', 'Ron Weasley', 'Ali', 'Jawad', 'Aatif'];
function show_magicians(magician) {
    for (const magicians of magician) {
        console.log(magicians);
    }
}
show_magicians(magicians);
