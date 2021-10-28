const {promptManager, addTeamMember} = require("./src/inquirer5.js");
// const inquirer = require('inquirer');
// const getManager = require('./src/parseData');
promptManager()
  .then(teamData => {  dataArray = [];
    // console.log('continue');
    dataArray.push(teamData);
    // console.log(dataArray);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    // console.log(dataArray);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    console.log(dataArray);
    console.log('end');
    return dataArray 
  })
module.exports = dataArray;