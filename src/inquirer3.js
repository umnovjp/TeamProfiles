const inquirer = require('inquirer');

const promptManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName', // changed managerName to name
            message: 'please enter name of the project manager',
            validate: val => /[a-z1-9]/gi.test(val),
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'what is his or hers or its id?',
            validate: val => /[1-9]/gi.test(val),
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "enter manager's email",
            validate: val => /[a-z1-9]/gi.test(val),
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'please enter the office number',
            validate: val => /[1-9]/gi.test(val),
        }
    ])
        ;
};

const addTeamMember = teamData => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Do you want to add an engineer or an intern?',
            choices: ["engineer", "intern"],
        }]).then(choice => {
            if (choice.type === "engineer") {
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
                    {
                        type: 'list',
                        name: 'type',
                        message: 'Do you want to add another member to your team?',
                        choices: ["y", "n"]
                    }
                ])
            }
            else {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: "please enter name of intern",
                    },
                    {
                        type: 'input',
                        name: 'internID',
                        message: "please enter his or her id",
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'please enter email of the intern',
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'please enter school intern attends',
                    },
                ])
            }
        })
}

const addSecondTeamMember = teamData => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Do you want to add another engineer or intern?',
            choices: ["engineer", "intern"],
        }]).then(choice => {
            if (choice.type === "engineer") {
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
                    {
                        type: 'list',
                        name: 'type',
                        message: 'Do you want to add another member to your team?',
                        choices: ["y", "n"]
                    }
                ])
            }
            else {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: "please enter name of intern",
                    },
                    {
                        type: 'input',
                        name: 'internID',
                        message: "please enter his or her id",
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'please enter email of the intern',
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'please enter school intern attends',
                    },
                ])
            }
        })
}

const addThirdTeamMember = teamData => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Do you want to add third engineer or intern?',
            choices: ["engineer", "intern"],
        }]).then(choice => {
            if (choice.type === "engineer") {
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
                    {
                        type: 'list',
                        name: 'type',
                        message: 'Do you want to add another member to your team?',
                        choices: ["y", "n"]
                    }
                ])
            }
            else {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: "please enter name of intern",
                    },
                    {
                        type: 'input',
                        name: 'internID',
                        message: "please enter his or her id",
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'please enter email of the intern',
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'please enter school intern attends',
                    },
                ])
            }
        })
}

module.exports = { promptManager, addThirdTeamMember, addSecondTeamMember, addTeamMember};