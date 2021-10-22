const {promptManager, addEngineer, addIntern} = require("./src/inquirer1.js");
const getManager = require('./src/parseData');
promptManager()
.then(addEngineer)
.then(addIntern)
.then(teamData => {
    return getManager(teamData);
  })