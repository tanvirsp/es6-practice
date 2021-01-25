const student = {
    id: 105,
    name: "Bappy",
    fatherName: "Gama",
    age: 31,
    phone: 01712-124449,
}

const {id, name} = student;

console.log(id,  name);

const friends = ["Jamal", "Kamal", "Rohim", "Bozlu", "Rofiz", "Jony"];
const [firstFriend, second, ...restFriend] = friends;
console.log(firstFriend, second, restFriend);