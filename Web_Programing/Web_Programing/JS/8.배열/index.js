let person = {
    Name : '윤종혁',
    Age : 18,
    Id : 2407
}

let personEl = document.getElementById("person-el");
personEl.textContent = "저는" + person.Id + person.Name + "이고, 나이는" + person.Age+"입니다";
console.log("person-el")