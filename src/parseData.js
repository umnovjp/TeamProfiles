// const Employee = require("../lib/Employee");
let Manager= require("../lib/Manager");
const getManager = teamData => {
// let newEmployee = new Employee() 
let newManager = new Manager(teamData.managerName, teamData.managerID, teamData.managerEmail, teamData.officeNumber);
return `xxx ${newManager.getName()} yyy`}
    
module.exports = getManager;