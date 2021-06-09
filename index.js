// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO:inquirer to generate questions
inquirer.prompt(
    [
        {
            type:'input',
            message: 'what is the project title',
            name:'title',
            //validate: property to check that the user provided a value
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'describe the project goals',
            name:'description',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}

        },
        {
            type:'input',
            message:'how do you install your app',
            name:'installation',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
            WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        },
        {
            type:'input',
            message:'how do you use your app',
            name:'usage information',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}

        },
        {
            type:'input',
            message:'how do you test instructions',
            name:'instructions',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}

        },
        {
            type:'input',
            message:'how can we contribute',
            name:'contribution',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}

        },
        {
            type:'input',
            message:'linkedIn',
            name:'linkedIn',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}

        },
        {
            type:'input',
            message:'what licence did you used',
            name:'license',
            choices:['the MIT License','The GPL License','Apache license','GNU license','N/A'],
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'Github username',
            name:'git',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        },
        {
            type:'input',
            message:'E-mail:',
            name:'email',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        }
        {
            type:'input',
            message:'credit:',
            name:'email',
            validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
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





const fs = require('fs');


const inquirer = require('inquirer');
const { title } = require('process');

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
fs.writeFile('README', md, (err) =>
 err ? console.error(err) : console.log('Success!')
);
})

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
