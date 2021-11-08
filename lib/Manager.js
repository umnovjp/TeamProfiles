const Employee = require ('./Employee');
class Manager extends Employee {constructor(officeNumber)
{super(name, id, email);
this.officeNumber = officeNumber;}
getRole(){return 'Manager'}//return 'Manager'
getOfficeNumber(){return this.officeNumber}
}
const manager = new Manager('123456');
console.log(manager);
module.exports = {Manager, manager};
