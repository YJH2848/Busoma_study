
let output = document.getElementById('print')
function button1_click(){
    let a = Math.floor(Math.random()*3)
    switch(a){
        case 0:
            output.textContent = 'rock';
            break;
        case 1:
            output.textContent = 'sissor';
            break;
        case 2:
            output.textContent = 'paper';
            break;
    }

}