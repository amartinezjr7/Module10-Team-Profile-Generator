const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, teamName){
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.teamName = teamName;
    }
    
    getOfficeNumber(){
    return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getTeamName(){
        return this.teamName;
    }
}

module.exports = Manager;


