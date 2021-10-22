const Manager= require("../lib/Manager");
const getManager = indexData => {
let newManager = new Manager(indexData.managerName, indexData.managerID, indexData.managerEmail, indexData.officeNumber);}
    
module.exports = getManager;