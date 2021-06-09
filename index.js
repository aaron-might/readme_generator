// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO:inquirer to generate questions
inquirer.prompt(    [
    {
        type:'input',
        message: 'what is the project title',
        name:'title',
        
    },
    {
        type:'input',
        message:'describe the project goals',
        name:'description',
        

    },
    {
        type:'input',
        message:'how do you install your app',
        name:'installation',
       
        WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    },
    {
        type:'input',
        message:'how do you use your app',
        name:'usage information',
      

    },
    {
        type:'input',
        message:'how do you test instructions',
        name:'instructions',
      

    },
    {
        type:'input',
        message:'how can we contribute',
        name:'contribution',
        

    },
    {
        type:'input',
        message:'linkedIn',
        name:'linkedIn',
        

    },
    {
        type:'input',
        message:'what licence did you used',
        name:'license',
       
    },
    {
        type:'input',
        message:'Github username',
        name:'git',
        
    },
    {
        type:'input',
        message:'E-mail:',
        name:'email',
       
    }
    {
        type:'input',
        message:'credit:',
        name:'email',
        
    }

    
]
)

.then(({
title,
description,
installation,
usage information, 
instructions,
linkedIn,
contribution,
license,
email,
credits,

})=>{

//template to be used






const fs = require('fs');


const inquirer = require('inquirer');
const { title } = require('process');




// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('README', md, (err) =>
 err ? console.error(err) : console.log('Success!')
);
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
