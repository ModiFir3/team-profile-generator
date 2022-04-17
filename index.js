const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

let teamArry = [];

const teamManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the of the Team Manager?',
            //dont forget to validate they must have a team manager
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Team Manager',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Team Manager email?',
        },
        {
            type: 'input',
            name: 'officNumber',
            message: 'What is the Offic Number of the Team Manager?',
        }
    ])
}

const menu = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add Team Members?'
        },
        {
            type: 'confirm',
            name: 'addEngineer',
            message: 'Would you like to add an Engineer to your team?',
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'addIntern',
            message: 'Would you like to add an Intern to your team?',
            when: ({ addEngineer }) => {
                if (!addEngineer) {
                    return true
                } else {
                    return false
                }
            }
        }
    ])
}

const engineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the of the Engineer?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Engineer',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Engineer email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Github of the Engineer?',
        }
    ])
}

const intern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the of the Intern?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Intern',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Intern email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the Intern attending?',
        }
    ])
}

teamManager()
.then(menu)
.then()




// .then((answers) => {
//     console.log(answers)
//     fs.writeFile('./dist/employeePage.html', generatePage(answers), (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('success')
//         }
//     })
// })