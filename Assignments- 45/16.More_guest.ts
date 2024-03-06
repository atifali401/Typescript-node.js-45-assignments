// Task 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you 
// found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a
//  new set of invitation messages, one for each person in your list.

let guestarr : string [] = ["Aftab","joyo","Hashim","Jawad"];



for(let i=0; i<guestarr.length; i++){

     /*console.log(`Dear Mr,`+ guestarr[i]+ ` ,\n\n
      I invited you for the dinner\n\nThankyou\n\n`);*/

}
let  canNotAttened : string = 'joyo';

let newguest : string = 'Zobi';

guestarr[guestarr.indexOf(canNotAttened)]= newguest ;

for(let i=0; i<guestarr.length; i++)
{
    console.log(`Dear Mr.`+ guestarr[i]+`,\n\n
    I invited you for the dinner.\n\nThankyou.\n\n`);
}

    console.log(`Mr. ${canNotAttened} isn't coming for the dinner`);

    console.log(`Good news, I found out a bigger table so, i invited 3 more friends.`);

    
    guestarr.unshift(`Habib`);
    guestarr.splice(2,0,`Aatif`);
    guestarr.push(`Asad`);

    for(let i=0; i<guestarr.length; i++)
{
    console.log(`Dear Mr.`+  guestarr[i]+ `,\n\n
    I invited you for the dinner.\n\nThankyou.\n\n`);

}