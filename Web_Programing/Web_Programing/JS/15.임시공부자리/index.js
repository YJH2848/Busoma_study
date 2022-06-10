const ulEl = document.getElementById('ul-el');
const outEl = document.getElementById('out-btn');
const inputEl = document.getElementById('input-btn');
const steamEl = document.getElementById('steam-btn');

outEl.addEventListener('click', function(){
    let list = "";
    list += `
        <li>
            차량 외부 손세차
        </li>
    `
    
    ulEl.innerHTML = list;
})
inputEl.addEventListener('click', function(){
    let list = "";
    list += `
        <li>
            차량 내부 손세차
        </li>
    `
    
    ulEl.innerHTML = list;
})
steamEl.addEventListener('click', function(){
    let list = "";
    list += `
        <li>
            스팀 세차
        </li>
    `
    
    ulEl.innerHTML = list;
})