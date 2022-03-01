const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.github = github;
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;