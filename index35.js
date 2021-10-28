const {promptManager, addTeamMember} = require("./src/inquirer5.js");
// const inquirer = require('inquirer');
// const getManager = require('./src/parseData');
function buildDataArray () {
  console.log('start');
  return promptManager()
  .then(teamData => {  dataArray = [];
    console.log('continue');
    dataArray.push(teamData);
    console.log(dataArray);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    console.log(dataArray);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    console.log(dataArray);
    return dataArray 
  })
}
module.exports = buildDataArray;