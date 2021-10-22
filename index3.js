const {promptManager, addEngineer, addIntern} = require("./src/inquirer1.js");
const getManager = require('./src/parseData');
promptManager()
.then(addEngineer)
.then(addIntern)
.then(teamData => {
    //const dataArray = [];
    //let managerName = teamData.managerName;
    //let managerID = teamData.managerID;
    //dataArray.push(managerName);
    //dataArray.push(managerID);
    //console.log(dataArray);
    return getManager(teamData);
  })