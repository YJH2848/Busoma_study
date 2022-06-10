let cards = []
let sum =  0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let messageSum = document.getElementById('message-sum');
let messageCard = document.getElementById('message-card');
let player = {
    playerName: '홍길동',
    playerChips: 145,
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + ": $" + player.playerChips;
console.log("player-el");
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber === 1) return 11;
    if(randomNumber > 10) return 10;
    return randomNumber;
}

function startGame(){
    let firstCard = getRandomCard();
    let secondeCard = getRandomCard();
    cards = [firstCard, secondeCard];
    isAlive = true;
    sum = firstCard + secondeCard;
    renderGame();
}
function renderGame(){
    sum = 0;
    messageCard.textContent = "Cards: "
    for(let i=0; i<cards.length; i++){
        messageCard.textContent += cards[i]+' ';
        sum += cards[i];
    }
    messageSum.textContent = "Sum: "+sum;
    if(sum < 21){
        message = '더 드로우 하시겠습니까?';
    }else if(sum == 21){
        message = 'win';
        hasBlackJack = true;
    }else{
        message = 'lose';
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive == true && hasBlackJack == false){
    let card = getRandomCard();
    cards.push(card);
    renderGame();
    }
}