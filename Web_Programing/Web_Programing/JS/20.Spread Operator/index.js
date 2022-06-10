// let contacts = ['mary', 'joel', 'Danny'];
// //let friends = ['david', 'mary', 'joel', 'danny', 'luke' ];
// let friends = ['david', ...contacts, 'luke'];
// console.log(friends);
// contacts.push('john');
// console.log(contacts);
// console.log(friends);

let person = {
    name : 'adam',
    age : 25

}
let employee = {
    ...person,
    salary : 5000,
    position : 'software developer'
}
console.log(employee);
//겹치는 내용은 ...(이름)을 적으면 된다.