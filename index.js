// TODO: Include packages needed for this application
const markdown = require("./generateMarkdown") ;
const fs = require('fs') ;
const inquire = require('inquirer');
const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'inpute' ,
    name: 'Github name' ,
    Message: 'What is your GitHub username?' ,
},
{
    type: 'inpute' ,
    name: 'Email Address' ,
    Message: 'What is your email?' ,
},
{
    type: 'inpute' ,
    name: 'Project Name' ,
    Message: 'What is the name of your project?'  , 
},
{
    type: 'inpute' ,
    name: 'Project Description' ,
    Message: 'Write a description of your project.' ,
},
{
    type: 'inpute' ,
    name: 'Liscense' ,
    Message: '?' ,
    choices: ['GPL 3.0', 'BSD 3', 'APACHE 2.0', 'MIT', 'None' ,] 
},
{
    type: 'inpute' ,
    name: 'repo' ,
    Message: 'What does the user need to know about your repo?'  , 
},
{
    type: 'inpute' ,
    name: 'contributing' ,
    Message: 'What does the user need to know about contributing to the repo?'  , 
},
{
    type: 'inpute' ,
    name: 'install' ,
    Message: 'What comman should be ran to install dependencies?' ,
},
{
    type: '' ,
    name: 'tests' ,
    Message: 'What command should be ran to run a test?' ,
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquire.createPromptModule(questions)
    .then((inquirerResponse, data) => {
        fs.writeFileSync("ReadMe.md" , inquirerResponse, data) ;
    } )
}

// TODO: Create a function to initialize app
const init = () => inquirer.prompt(questions)

// Function call to initialize app
init()
    .then((readmeData) => generateMarkdown(readmeData))
    .then((dataReceived) => writeToFile(dataReceived)) ;