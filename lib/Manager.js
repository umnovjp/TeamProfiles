const Employee = require ('./Employee');
class Manager extends Employee {constructor(officeNumber)
{super(name, id, email);
this.officeNumber = officeNumber;}
getRole(){console.log('Manager')}//return 'Manager'
getOfficeNumber(){return this.officeNumber}
}
const officeNumber = dataArray[0].officeNumber;
const newManager = new Manager(name, id, email, officeNumber);
module.exports = Manager;