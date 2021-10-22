const Employee = require ('./Employee');
class Manager extends Employee {constructor(officeNumber)
{super(name, id, email);
this.officeNumber = officeNumber;}
getRole(){console.log('Manager')}//return 'Manager'
getOfficeNumber(){return this.officeNumber}
}
module.exports = Manager;