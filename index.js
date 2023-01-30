// External packages
const fs = require('fs');
// const util = require('util');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
//const api = require('./utils/api');

// inquirer prompts for array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your Github username? (Not email)",
        name: 'username',
        default: 'Damiennsoh',
        validate: function (answer){
            if(answer.length < 1) {
                return console.log("Username not valid");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your password?",
        name: 'password',
    },
    {
        type: 'password',
        message: 'Re-enter password to confirm',
        name: 'password confirmed',
    },
    {
        type: 'input',
        message: 'what is your email',
        name: 'email',
    },
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        message: "Write a description of your project",
        name: 'description',
        validate: function(answer){
            if(answer.length < 1){
                return console.log("A valid description is required");
            }
            return true;
            
        }

    },
    {
        type: 'input',
        message: "How do you install the application",
        name: 'installation',

    },
    {
        type: 'input',
        message: "Are there usage instruction to pass to the users",
        name: 'usage',
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license that your application is under",
        choices: ['GNU AGPLv3', 'MIT License', 'Apache License 2.0', 'Mozilla Public License', 'The Unlicense'],
    },
    {
        type: 'input',
        message: "Provide rules for other developers to contribute to the application if applicable",
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How can the application be tested?',
        name: 'test'

    },
    {
        type: 'input',
        message: 'insert your deployed link here',
        name: 'deployed_site_url',
    },
    {
        type: 'input',
        message: 'Please insert license text here',
        name: 'insert_license_text',
        
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('success'));
     console.log(data.title);
}
// Now initializing the program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response));
            console.log(response);
        }
        );
}



// function call to initialize program
init();
