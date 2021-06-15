// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown');


//inquirer        
// function writeToFile(fileName, data) {

// fs.writeFile('README.md',data,(err) =>
// err ? console.error(err) : console.log('Your README.md has been generated!')
// );
//function init () {

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions",
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage",
    },
    {
        type: "input",
        name: "credits",
        message: "Please provide the project credits",
    },
    
    {
        type: "list",
        name: "licences",
        messages: "Please provide the license information",
        choices: ["MIT", "GNU public Licence", "Apache license 2.0", "Mozilla public licence 2.0"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties",
    },
    {
        type: "input",
        name: "test",
        message: "Please provide the project tests",
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?",
    },
    {
        type: "input",
        name: "name",
        message: "what is your name?",
    },
];

inquirer
    .prompt(questions)
    .then(function (data) {
        const queryUrl = `https://api.github.com/users/${data.username}`;


        if (data.licences === "MIT") {
            data.badges = "https://img.shields.io/badge/License-MIT-yellow.svg"
        } else if (data.licences === "GNU public Licence") {
            data.badges = "https://img.shields.io/badge/License-GPLv3-blue.svg"
        } else if (data.licence === "Apache 2.0 License") {
            data.badges = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
        } else {
            data.badges = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
        }


        axios.get(queryUrl).then(function (res) {
            const githubInfo = {
                githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name,
            };

            fs.writeFile('README.md', generate(data, githubInfo), function (err) {
                if (err) {
                    throw err;
                };
                console.log("Your README.md file has been generated!")
            });
        });
    });
// // TODO: Create a function to initialize app
function init() {

}
// // Function call to initialize app
init();

//init(inquirer.prompt);