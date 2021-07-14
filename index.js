// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const READMEGenerator = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }, 
    {
        type: "input",
        message: "What is your project's name",
        name: "title",
    },
    {
        type: "input",
        message: "Please write a short description of your project",
        name: "description",
    },
    {
        type: "checkbox",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", ""],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installationInstructions",
    },
    {
        type: "input",
        message: "What command should be run to run tests",
        name: "testInstructions",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usageInfomation",
    },
    {
        type: "input",
        message: "what does the user need to know about contributing to the repo?",
        name: "contributionGuidlines",
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./Sample/" + fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
            // var content = READMEGenerator.generateMarkdown(data);
            // writeToFile("README.md", content);
        })
}

// Function call to initialize app
init();
