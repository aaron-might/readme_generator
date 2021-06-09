// TODO: Include packages needed for this application
const fs = require('fs');


const inquirer = require('inquirer');

inquirer
const renderHTML=((answers) => {
        const heading = answers.name;
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1>${heading}</h1> 
<h2>${heading}</h2> 
<h3>${heading}</h3> 

</body>
</html>
`
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
