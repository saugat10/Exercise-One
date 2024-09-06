const names = ['Saugat', 'Sabin', 'Kengo', 'Patrik', 'Nasim'];
console.log('the first name in the array is', names[0]);

console.log('The index of name Nasim in array name is', names.indexOf('Nasim'));

console.log('The index of the name that does not exist in the array', names.indexOf('Sahita'));

console.log('The length of array is', names.length)
names.push('Sajja');
console.log('The length of array after pusing one name is', names.length, names);

const newNameArray = names.slice(0,3);
console.log('The new array after slicing the name array is', newNameArray);

const person1 = {
    firstName : "Saugat",
    lastName : "Khatiwada",
    email : "saugat@gmail.com"
};

const person2 = {
    firstName : "Sabin",
    lastName : "Bhandari",
    email : "sabin@gmail.com"
};

const person = [person1, person2];
console.log(person);
console.log('The first person\'s email is',person[0].email);