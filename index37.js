const {promptManager, addTeamMember} = require("./src/inquirer6.js");
const buildDataArray = require('./lib/Employee');
const parseData3 = require('./src/parseData3');
promptManager()
  .then(teamData => {  dataArray = [];
    dataArray.push(teamData);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    // console.log(dataArray);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    x = dataArray.length;
    // console.log(typeof dataArray);
    console.log(teamData.toAddOrNotToAdd);
    console.log('end');
    // return dataArray 
    buildDataArray(dataArray)
    parseData3(dataArray)
})
// module.exports = dataArray;