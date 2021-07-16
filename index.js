// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
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
        name: "licenseArray",
        choices: ["MIT", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "GNU GPLv2", "Mozilla Public License 2.0", "Apache License 2.0", "ISC", "Boost Software License 1.0", "The Unlicense"],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies? Please use \\n to create new line",
        name: "installationInstructions",
    },
    {
        type: "input",
        message: "What command should be run to run tests? Please use \\n to create new line",
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
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Generating ./output/yourREADME.md ...");
            var content = generateMarkdown(data);
            writeToFile("./output/yourREADME.md", content);
        })
}

// Function call to initialize app
init();
