let student = {
    name : 'Saugat',
    id : 1,
    grades : [7,7,10,7,10]
}

function addGrade (student, grade){
    student.grades.push(grade);
    return student.grades;
}

function updateName(student, newName){
    student.name = newName;
    return student.name;
}


let student1 ={
    firstName: 'sabin',
    id: 2,
    grades: [4,7,12,12]
}

console.log("i am here")
console.log(addGrade(student1,10));
console.log(updateName(student1, 'Sabina'))