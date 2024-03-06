// // Task 
// Seeing the World: Think of at least five places in the world you’d like to visit.


// • Store the locations in a array. Make sure the array is not in alphabetical order.
let placesToVisite : string[] = ['Tokyo','Pakistan', 'America', 'London', 'switzerland'];
 
// • Print your array in its original order.
console.log("Original Order :", placesToVisite);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order :", [...placesToVisite].sort());

// • Show that your array is still in its original order by printing it.

console.log("Original Order after sorting :",placesToVisite);


// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("Reverse Alphabetical Order :", [...placesToVisite].sort().reverse());

// • Show that your array is still in its original order by printing it again.

console.log("Original Order after reverse sorting:",placesToVisite);

// • Reverse the order of your list. Print the array to show that its order has changed.

placesToVisite.reverse();

console.log("Reverse Order:",placesToVisite);