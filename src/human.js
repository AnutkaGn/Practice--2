class Human{
    constructor(name, age, weight, gender){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender;
    }
    getInfo(prop){
        if (prop == null) return this;
        else return this[prop]
    }
    greeting(){
        return "Hi!"
    }
}

export default Human;