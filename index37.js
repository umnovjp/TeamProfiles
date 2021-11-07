const { promptManager, addTeamMember } = require("./src/inquirer6.js");
const buildDataArray = require('./lib/Employee');
const parseData3 = require('./src/parseData3');
promptManager()
  .then(teamData => {
    dataArray = [];
    dataArray.push(teamData);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    let param = 'y';
    console.log(param);
    console.log('end1');
    while (param === 'y') {
      addTeamMember();
      dataArray.push(teamData);
      param = teamData.toAddOrNotToAdd;
      console.log(param + ' in the loop')
    }
    console.log(teamData.toAddOrNotToAdd);
    console.log('end2');
    // console.log(dataArray);
  })
  .then(addTeamMember)
  .then(teamData => {
    dataArray.push(teamData);
    // x = dataArray.length;
    console.log('after then');
    // console.log(teamData.toAddOrNotToAdd);

    // return dataArray 
    buildDataArray(dataArray)
    parseData3(dataArray)
  })
// module.exports = dataArray;