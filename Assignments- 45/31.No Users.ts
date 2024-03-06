// Task 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let username: string[] = ['Admin', ' Yasir' , 'Ali', 'Tariq', 'Jawad',]


 
//   if(username.length === 0){

//       console.log('We need to find some more users!')

//   } else{

//    for (let usernames of username  ) {

//        if (usernames === 'Admin'){

//         console.log(`Hello admin, would you like to see a status report?`)
//        }
//     else {
//         console.log(`Hello ${usernames}, thank you for logging in again.`)
//         }
//     }
// }
 username = []
  if (username.length=== 0){
   console.log('We need to find some users!')
  }