// Task 41
/* Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.*/

const magicians: string [] = ['Harry Porter', 'Ron Weasley','Ali', 'Jawad','Aatif'];

function show_magicians(magician: string[]): void {
    
    for (const magicians of magician) {
     console.log(magicians);
    }
}
   
   show_magicians(magicians);