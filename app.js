const prompt = require('prompt-sync')();
const username = prompt('What is your name?');
console.log(`Your name is ${username}`);

const destination = prompt('Forest or Beach?');
console.log(`Your destination is ${destination}`);
if(destination === 'Beach') {
    console.log('Bring cash')
}
const cash = prompt('How much cash?');
if(cash >= 50) {
    console.log(`Buy food`)
const buyFood = prompt(`Pizza or Hamburger?`);
    if(buyFood === `Pizza`) {
        console.log(cash - 15)
    }else if(buyFood === `Hamburger`) {
        console.log(cash - 10)
}
} else {
    console.log(`Need more cash`)
    
} if(destination === 'Forest') {
    console.log('Bring sleeping bag')
}
