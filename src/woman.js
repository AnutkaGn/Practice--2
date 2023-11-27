import Human from "./human.js";

class Woman extends Human{
    constructor(name, age, weight){
        super(name, age, weight, 'female');
    }
    greeting()
    {
        return `${super.greeting()} My name ${this.name}.`
    }
}

export default Woman;