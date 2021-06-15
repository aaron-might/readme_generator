
  # README GENERATOR

  # Description

  The what, why, and how: Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. 

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  
  
  ## Installation
  
  Steps required to install project and how to get the development environment running: To generate your own README, first run npm install in order to install the following npm package dependencies as specified in the package.json: inquirer that will prompt you for your inputs from the command line ,axios to fetch your info from the GitHub API.The application itself can be invoked with node index.js.
  
  ## Usage
  
  the following is walkthrough video and explanation:When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project. The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.Finally, fs.writeFile is used to generate your project's README.md file.
  
  ## credits

  © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

  ## licences

  Apache license 2.0

  ## Licences badges

  https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg

  ## Contributors
  
  anyone is welcome to contribute to this project
  
  ## Test
  
  run:npm run test
  
  ## Repository
  
  - [Project Repo](github.com/aaron-might/team_profile_generator)
  
  ## GitHub
  
  ![Image of me](https://avatars.githubusercontent.com/u/83680026?v=4),
  -![GitHub name](null),
  -![GitHub Profile](https://github.com/aaron-might),
  - [GitHub email](null)