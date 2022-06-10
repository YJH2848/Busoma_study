let myLeads = [];
const output = document.getElementById('outcar-btn');
const input = document.getElementById('incar-btn');
const steam = document.getElementById('steamcar-btn');
const ulEl = document.getElementById('ul-el');
let bool, bool2, bool3  = false;

output.addEventListener("click", function(){
    bool = true;
    if(bool == true)
    {
        myLeads.push(output.value);
        output.value = "차량 외부 손세차";
        renderLeads();
    }
})
input.addEventListener("click", function(){

    bool2 = true;
    if(bool2 == true)
    {
        myLeads.push(input.value);
        input.value = "차량 내부 손세차";
        renderLeads();
    }
})
steam.addEventListener("click", function(){

    bool3 = true;
    if(bool3 == true)
    {
        myLeads.push(steam.value);
        steam.value = "스팀 세차";
        renderLeads();
    }
})
function renderLeads(myLeads){  

    let listItems = "";
    for (let i = 1; i < myLeads.length; i++) {
    
        listItems += `
        <li>
            ${myLeads[i]}  
        </li>
        `
    }   
    ulEl.innerHTML = listItems;
    }