const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const { writeFile, copyFile } = require('./Utils/generate-site');


const inquirer = require('inquirer');
const fs = require('fs');

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
        .then(managerInput => {
            const { name, id, email, officNumber } = managerInput;
            const manager = new Manager(name, id, email, officNumber);

            teamArry.push(manager);
            // console.log(manager)
        })
}

const employeeMenu = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add Team Members?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?',
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Employee',
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employee email?',
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of your employee?',
            choices: ['Engineer', 'Intern'],
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true
                } else {
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the GitHub of the employee? ',
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school is the Intern attending?',
            when: (input) => input.role === "Intern"
        }
    ])
        .then(employeeData => {
            let { name, id, email, github, school } = employeeData;
            let employee;

            if (employeeData.role === 'Engineer') {
                employee = new Engineer(name, id, email, github)

                // console.log(employee)
            } else if (employeeData.role === 'Intern') {

                employee = new Intern(name, id, email, school)

                // console.log(employee)
            }

            teamArry.push(employee);

            if (employeeData.addEmployee === true) {
                return employeeMenu(teamArry)
            } else {
                return teamArry;
            }

            // console.log(employeeData);
        })
}

teamManager()
    .then(employeeMenu)
    .then(teamArry => {
        //console.log(teamArry);
        return generatePage(teamArry);
    })
    .then(pageHTML => {
        console.log(pageHTML)
        return writeFile(pageHTML);
    })
    .then(writeFileRes => {
        console.log(writeFileRes);
        return copyFile();
    })
    .then(copyFileRes => {
        console.log(copyFileRes)
    })
    .catch(err => {
        console.log(err);
    });