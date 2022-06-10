const player = {
    name : "Lebron James",
    club : "LA Lakers",
    address : {
        city : "Los Angeles"
    }
}
//console.log(player.address.city) <- 이렇게 매번 하기 귀찮기에 쓴다
//이게 디스트럭팅 오브젝트이다
const {name, club, address: {city} } = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} plays for ${city}`);

// let fullName = ['jonghuyuck', 'yun'];
// console.log(fullName[1]);

let [firstName, lastName] = ['jonghyuck', 'yun'];
lastName = 'cho'; //<- 수정하면 수정이 된다.
console.log(lastName);
