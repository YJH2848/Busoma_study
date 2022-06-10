let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const tabbtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
const deletebtn= document.getElementById("delete-btn");
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}

deletebtn.addEventListener("dblclick", function(){
    myLeads = [];
    localStorage.clear();
    renderLeads(myLeads);
})
tabbtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);   
    })
})
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);

})

function renderLeads(leads){

let listItems = "";
for (let i = 0; i < leads.length; i++) {

    listItems += `
    <li>
        <a href="${leads[i]}" target="_blank">
        ${leads[i]}
        </a>
        
    </li>
    `
}
ulEl.innerHTML = listItems;
}