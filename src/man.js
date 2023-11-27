import Human from "./human.js";
class Man extends Human{
    constructor(name, age, weight){
        super(name, age, weight, 'male');
    }
    greeting()
    {
        return `${super.greeting()} My name ${this.name}. I'm ${this.age} years old.`
    }
}

export default Man;