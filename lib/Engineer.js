const Employee = require ('./Employee');
class Engineer extends Employee {constructor(github)
{this.github = github}
getId(){return this.github}
getRole(){return 'Engineer'}}
module.exports = Engineer;