class Employee {
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email,
        this.role = 'Employee'
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}

// let will = new Employee("will", 1, "w@w.com")

// will.name

module.exports = Employee