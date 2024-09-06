export default class Cat{
    constructor(name, color, breed){
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    
    getCatInfo(){
        console.log('Name of the cat is ' + this.name +'.Its color is ' + this.color + ' and is of ' + this.breed + ' breed.');
        // return `Name of the cat is ${this.name}. Its color is ${this.color} and is of ${breed} breed.`
    }

    changeName(newName){
        this.name = newName;
        console.log('The name has been changed to ' + newName);
    }
}