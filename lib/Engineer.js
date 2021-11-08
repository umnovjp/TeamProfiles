const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.github = github
    }
    getGithub() {return this.github}
    getRole() {return 'Engineer'}
}
const engineer = new Engineer ('umnovjp'); // new line
console.log(engineer);
module.exports = {Engineer, engineer};