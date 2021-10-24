const {promptManager, addTeamMember, addSecondTeamMember, addThirdEngineer, addIntern} = require("./src/inquirer3.js");
const getManager = require('./src/parseData');
promptManager()
.then(teamData => {  dataArray = [];
  dataArray.push(teamData);
})
.then(addTeamMember)
.then(teamData => {
  dataArray.push(teamData);
})
.then(addSecondTeamMember)
.then(teamData => {
  dataArray.push(teamData);
  console.log(dataArray);
})
