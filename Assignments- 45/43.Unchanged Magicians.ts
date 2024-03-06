//Task 43
// Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the array
//  of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
//   separate array. Call show_magicians() with each array to show that you have one array of the original names and one 
//   array with the Great added to each magician’s name.

// Copy of 41
function show_magicians(magician: string[]): void
 {
    
    for (const magicians of magician) {
     console.log(magicians);
    }
 }
     const magicians: string [] = ['Harry Porter', 'Ron Weasley','Ali', 'Jawad','Aatif']; 
     show_magicians(magicians);
   
// Copy of 42

function make_great1(magicians:string[]): string[]{
    const greatMagicians: string [] = [];
    for(let i = 0; i < magicians.length; i++) {

        magicians[i]= magicians[i] + ` the Great Magician.`
     greatMagicians.push(magicians[i])  
    }
      return greatMagicians;           
}
    
       const magicians3: string[]= ['Harry Porter', 'Rony','Ali','Doctor','Qurishi'];
       const greatMagician1: string [] = make_great1(magicians3)
       make_great1(magicians3);
       show_magicians(greatMagician1);