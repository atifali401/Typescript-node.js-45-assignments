// Task 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for
//  certain fruits in your array.• Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your 
// array, the if block should print a statement, such as You really like bananas!

let F_fruits : string []= ['Kivi', 'Oranges', 'Apples','berry', 'Peach'];

if (F_fruits.includes('Kivi')){
console.log('Kivi');
}

if (F_fruits.includes('Peach')){
    console.log('You really like bananas');
 }
    
    if (F_fruits.includes('Oranges')) {
        console.log('Oranges');
   }

   if (F_fruits.includes('berry')){
    console.log('You really like bananas');
 }

 if (F_fruits.includes('Apples')){
    console.log('Apples');
 }