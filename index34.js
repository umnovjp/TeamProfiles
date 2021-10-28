const {promptManager, addTeamMember} = require("./src/inquirer3.js");
// const getManager = require('./src/parseData');
function buildDataArray () {
  console.log('start');
  return promptManager()
  .then(teamData => {  dataArray = [];
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