//function declaration
function breakfastMenu(food){
    return `I'm going to ${food} for breakfast.`;
}

//anonymous function
const lunchMenu = function(food = 'pizza'){
    return `I'm going to eat ${food} for lunch.`
}
// Arrow function
/* const dinnerMenu = () => {
//     return `I'm going to eat a ${food} for dinner.`
 }*/

const dinnerMenu = food => `I'm going to eat a ${food} for dinner`; //<- 파라미터가 한개면 생략가능
const dinnerMenu2 = (food,drink) => `I'm going to eat a ${food} and ${drink} for dinner`; //<- 파라미터가 0개거나 2개 이상이면 생략xs

console.log(lunchMenu('scrmbled egg') );
console.log(lunchMenu() )