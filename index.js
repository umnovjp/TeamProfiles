const {promptManager, addTeamMember} = require("./src/inquirer5.js");
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
    console.log(dataArray);
    console.log('end');
    // return dataArray 
    //buildDataArray(dataArray)
    parseData3(dataArray)
})
// module.exports = dataArray;