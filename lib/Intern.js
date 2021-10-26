const Employee = require ('./Employee');
class Intern extends Employee {constructor(school)
{super(name, id, email);
this.school = school}
getSchool(){return this.school}
getRole(){return 'Intern'}}
if (dataArray[1].keys.includes('internSchool'))
{const school = dataArray[1].internSchool;
const newIntern1 = new Intern(name, id, email, school)}
if (dataArray[2].keys.includes('engineerGithub'))
{const github = dataArray[2].internSchool;
const newIntern2 = new Intern(name, id, email, school)}
module.exports = Intern;