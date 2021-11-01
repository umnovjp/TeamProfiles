const Intern = require('./Employee');
class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.school = school
    }
    getSchool(i) { const school = data[i].school }
    getRole() { const role = 'Intern' }
}
module.exports = Intern;