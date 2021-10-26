const Employee = require ('./Employee');
class Engineer extends Employee {constructor(github)
{super(name, id, email);
this.github = github}
getId(){return this.github}
getRole(){return 'Engineer'}}
if (dataArray[1].keys.includes('engineerGithub'))
{const github = dataArray[1].engineerGithub;
const newEngineer1 = new Engineer(name, id, email, github)}
if (dataArray[2].keys.includes('engineerGithub'))
{const github = dataArray[2].engineerGithub;
const newEngineer2 = new Engineer(name, id, email, github)}
module.exports = Engineer;