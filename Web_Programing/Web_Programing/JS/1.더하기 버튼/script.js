/*let a = 7;
let b = -3;

console.log(a + b);
/////4
let str = 'type';
str += ' ';
str += 'yunjonghyuck';

console.log(str);
/////type yunjonghyuck
let e = 'hi';
let f = 'yunjonghyuck';

console.log(e +', ' + f);
/////hi, yunjoinghyuck
let count = 0;
count += 1;

console.log(count);
/////1
let count2 = 0;
count2 += 2;

console.log(count2);
////2*/
let count = 0;
function increase(){
    console.log("clicked");
    count++;
    console.log(count);
    document.getElementById("count-el").innerText = count;
} 

function save(){
    document.getElementById("his_score").innerText += `${count} - ` ;
    count = 0;
    document.getElementById("count-el").innerText = 0;
}


