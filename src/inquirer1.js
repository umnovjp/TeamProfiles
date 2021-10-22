const inquirer = require('inquirer');

const promptManager = () => {
  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName', // changed managerName to name
      message: 'please enter name of the project manager',
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'what is his or hers or its id?',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "enter manager's email",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'please enter the office number',
    }
  ])
  ;
};

const addEngineer = teamData => {
  if (!teamData.members){
    teamData.members=[];
  };
  return inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Do you want to add an engineer?',
      choices: ["y", "n"]
    }]).then(choice => {
      if (choice.type === "y") {
        return inquirer.prompt([
          {
            type: 'input',
            name: 'engineerName',
            message: 'please enter name of engineer',
          },
          {
            type: 'input',
            name: 'engineerID',
            message: 'please enter his or her id',
          },
          {
            type: 'input',
            name: 'engineerEmail',
            message: 'please enter the email address',
          },
          {
            type: 'input',
            name: 'engineerGithub',
            message: 'please enter github username',
          },
        ])
      }
    })
      // return addEngineer(teamData);
      //return(teamData)
   // });
  
}
// console.log(teamData[0]);
// console.log(memberData);

const addIntern = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Do you want to add an intern?',
      choices: ["y", "n"]
    }]).then(choice => {
      if (choice.type === "y") {
        return inquirer.prompt([
          { type: 'input',
            name: 'internName',
            message: "please enter name of intern",
          },
          { type: 'input',
            name: 'internID',
            message: "please enter his or her id",
          },
          { type: 'input',
            name: 'internEmail',
            message: 'please enter email of the intern',
          },
          { type: 'input',
            name: 'internSchool',
            message: 'please enter school intern attends',
          },
        ])
      }
    })
}
module.exports = { promptManager, addEngineer, addIntern };