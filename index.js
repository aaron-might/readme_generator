// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
inquirer
const renderReadMe=((answers) => {
        const heading = answers.name;
        const template =`# ${title}
        # Table of content
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)
        ## Installation
        ${Installation}
        ## Usage
        ${usage}
        ## Credits
        ${Credits}
        ## Licenses
        ${license}
        ## Badges
        ${badges}
        ## test:
        in order to test open the console and run the following command
        ${test}
        
        ## Contact
        *Github:${git}
        *LindedIn:${linkedIn}
        *E-mail:${email}
        ### question:
        if you have any questions contact me on [Github](https://aaron-might.github.com/${username})or contact
        ${author} at ${email}`
        },
        
        function writeToFile(fileName, data) {
    
        fs.writeFile('README','md',(err,data) =>
        err ? console.error(err) : console.log('Your README.md has been generated!')
        );
        })
// TODO:inquirer to generate questions
    // title,
    // description,
    // installation, 
    // instructions,
    // linkedIn,
    // contribution,
    // license,
    // credits,
    
//})=>{
    
    //template to be used
// // TODO: Create a function to write README file



inquirer.prompt(    [
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
        
        //WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    },
    {
        type:'input',
        message:'how do you use your app',
        name:'usage information',
        validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        
    },
    {
        type:'input',
        message:'credit:',
        name:'credit',
        validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        
    },
    {
        type:'input',
        message:'what licence did you used',
        name:'license',
        // create choices for different type of licence
        choices:['the MIT License','The GPL License','Apache license','GNU license','N/A'],
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
        message:'Github username',
        name:'git',
        validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        
    },
    {
        type:'input',
        message:'E-mail:',
        name:'email',
        validate:(value)=>{if (value){return true}else {return 'i need a value to continue'}}
        
    },
]).then (renderReadMe)


// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();