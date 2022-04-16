const inquirer = require('inquirer');
const fs = require('fs')

const employeeInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },{
            type: 'input',
            name: 'id',
            message: 'What is the ID of the employee?',
        },{
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'checkbox-plus',
            name: 'employeeType',
            message: 'Is this employee any of the following?',
            choices: ['Manager', 'Engineer', 'Intern', 'N/A']
        }
        
    ])
}