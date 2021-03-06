const fs = require('fs');
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project?"
    },
    {
        
        type: "input",
        name: "installation",
        message: "What command should be ran to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be ran to run tests?",
    },
    {
        type: "list",
        name: "license",
        message: "What type of license would you like?",
        choices: [
            "Apache License %202.0",
            "GNU GPLv3",
            "MIT",
            "ISC",
            "None"
        ]
    },
    {
        type: "Input",
        name: "usage",
        message: "What does the user need to know about the repo?",
    },
    {
        type: "Input",
        name: "contributors",
        message: "What does the user need to know about contributing to the repo?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, err => {
        if(err) throw(err) => {
            return console.log(err)
        }
    });
}


function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      console.log("Creating README...");
      writeToFile("README.md", generateMarkdown({...answers}));
    })
  }


init();


