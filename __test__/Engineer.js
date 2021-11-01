const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github
    }
    getGithub(i) { const github = data[i].github }
    getRole(i) { const role = 'Engineer' }
}
module.exports = Engineer;