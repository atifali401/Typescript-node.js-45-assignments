//Task 17 
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have
//  space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two 
// people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from
//  your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an
//  empty list at the end of your program.

let guestarr : string [] = ["Aftab","joyo","Hashim","Jawad"];

//for(let i=0; i<guestarr.length; i++){
     /*console.log(`Dear Mr,`+ guestarr[i]+ ` ,\n\n
      I invited you for the dinner\n\nThankyou\n\n`);}*/

let  canNotAttened : string = 'joyo';
let newguest : string = 'Zobi';
guestarr[guestarr.indexOf(canNotAttened)]= newguest ;
/*for(let i=0; i<guestarr.length; i++){
    console.log(`Dear Mr,`+ guestarr[i]+`,\n\n
I invited you for the dinner.\n\nThankyou.\n\n`);}*/

    console.log(`Mr. ${canNotAttened} isn't coming for the dinner`);
    console.log(`Good news, I found out a bigger table so, i invited 3 more friends.`);
    guestarr.unshift(`Habib`);
    guestarr.splice(2,0,`Aatif`);
    guestarr.push(`Asad`);
   
    for(let i=0; i<guestarr.length; i++){
    console.log(`Dear Mr,`+ guestarr[i]+ `,\n\n
    I invited you for the dinner.\n\nThankyou.\n\n`);
}
    console.log('\n Sorry we cant find a big table so, only two people will be invited');
   
    while(guestarr.length >2){

        let remove_guestarr = guestarr.pop();

        console.log(`Sorry Mr. ${remove_guestarr}, your not invited cuz of some reson.\n\nThank you.\n\n`)
    }
    for(let i=0; i<guestarr.length; i++){
        console.log(`Dear Mr,`+ guestarr[i]+ `,\n\n
        You people are still invited you for the dinner.\n\nThankyou.\n\n`);
    }
    guestarr.splice(0, 2);

    console.log( guestarr);