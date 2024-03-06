//Task 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at
// east three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to
//  dinner.


let guestarr: string []= ["Aftab", "Joyo", "Yasir", "Jawad"];

//for(let i=0; i<guestarr.length; i++){
  //  console.log('Welcom, your invited '+ guestarr[i]);
//}
  // "OR

  guestarr.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));
