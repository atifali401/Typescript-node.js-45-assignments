//Task 2 
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be 
// simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName : string = ''

personName = prompt('what is your name?') || '';

if(personName !== null && personName !== ''){

alert(`Hello ${personName}, would you like to learn some python today?`)
}else{
    alert( `you have to fill your name !`);
}