class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    
    }
    describe(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
    const person = new Person("Emma",30);
    console.log(person.describe());
