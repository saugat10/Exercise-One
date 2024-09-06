export default class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isRunning = false;
    }

    getCarInfo(){
        return `${this.make} ${this.model} ${this.year}`;
    }

    start(){
        this.isRunning = true;
        return `The car is running`;
    }

    stop(){
        this.isRunning = false;
        return `The car has stopped`;
    }
}