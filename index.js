import Cat from "./Cat.js"

function returnName (firstName, lastName){
    return `${firstName} ${lastName}`;
}

returnName('Sahita', 'Khatiwada');

function calculateRectangleArea(length, width){
    return (length * width);
}

calculateRectangleArea(4,3);

function calculateDistance(speed, time){
    let a = speed * time;
    return ('You have travelled ' + a + ' KM.')
}

calculateDistance(60, 1);


const Calculator = {
    owner: "Saugat Khatiwada",
    printName: returnName('Saugat', 'Khatiwada'),
    printArea : calculateRectangleArea(5,6),
    printDistance : calculateDistance(50,2)
    }

console.log(Calculator);

const cat1 = new Cat ('Kitty', 'blue', 'Siamese')
cat1.getCatInfo();
cat1.changeName("Tom");
cat1.getCatInfo();


