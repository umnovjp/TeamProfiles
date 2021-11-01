const Employee = require ('./Employee');
class Manager extends Employee {constructor(officeNumber)
{super(name, id, email);
this.officeNumber = officeNumber;}
getRole(i){const role = 'Manager'}//return 'Manager'
getOfficeNumber(i){const officeNumber = data[i].officeNumber}
}
module.exports = Manager;
