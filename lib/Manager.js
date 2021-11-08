const Employee = require ('./Employee');
class Manager extends Employee {constructor(officeNumber)
{super(name, id, email);
this.officeNumber = officeNumber;}
getRole(i){const role = 'Manager'}//return 'Manager'
getOfficeNumber(i){const officeNumber = data[i].officeNumber}
}
const manager = new Manager('123456');
console.log(manager);
module.exports = {Manager, manager};
