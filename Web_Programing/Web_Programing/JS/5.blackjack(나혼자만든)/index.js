let A_card = Math.random();
let B_card = Math.random();
let hasblackjack = false;
let isalive = true;
let message = "";
let messageEl = document.getElementById("message-el");
C = Math.floor(A_card * 20);
D = Math.floor(B_card * 20);
let sum = C + D;

function start(){
    console.log("hi");
    if(sum < 21){
        message = "더 뽑으시겠습니까?";
    }
    else if(sum == 21){
        message = "블랙잿!";
        hasblackjack = true;
    }
    else{
        message = "패배";
        isalive = false;
    }
    messageEl.textContent = message;
    document.getElementById("number").value = C +"+"+ D;
    document.getElementById("Sum").value = sum;
    
    
}


function reset(){
    location.reload();
}