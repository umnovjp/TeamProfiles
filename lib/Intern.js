const Employee = require('./Employee');
class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school
    }
    getSchool(i) { const school = data[i].school }
    getRole() { const role = 'Intern' }
}
const intern = new Intern('Harvard');
console.log(intern);
module.exports = {Intern, intern};