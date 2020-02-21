var fs = require("fs");
var inquirer = require("inquirer");
const Manager  = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern   = require("./lib/Intern");
const render   = require("./lib/htmlRenderer");
const employees = [];

managerInfo => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      }
    ]).then(response=> {
      
    })
};

managerInfo();


inquirer
  .prompt([
    {
      type: "list",
      message: "Let's create your team. Select a team member from below to begin.",
      name: "employeeType",
      choices: [
        "Engineer",
        "Intern",
        "No more team members"
      ],
    }
  ]).then(response => {
      switch(response.employeeType){
        case 'Engineer':
            engineerInfo();
            break;
        case 'Intern': 
            internInfo();
            break;
        case 'No more team members': 
            teamEnd();
            break;
      }
    })
  
    // make functions for each diff employee type and .then construct new employee and push to array
    // make function to end the whole thing adn write to team.html under output

    engineerInfo => {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is their name?",
            name: "name"
          },
          {
            type: "input",
            message: "What is their ID number?",
            name: "id"
          },
          {
            type: "input",
            message: "What is their email?",
            name: "email"
          },
          {
            type: "input",
            message: "What is their Github username?",
            name: "github"
          }
        ]).then(response=> {

        })
    }

    internInfo => {
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is their name?",
            name: "name"
          },
          {
            type: "input",
            message: "What is their ID number?",
            name: "id"
          },
          {
            type: "input",
            message: "What is their email?",
            name: "email"
          },
          {
            type: "input",
            message: "What school do they attend?",
            name: "school"
          }
        ]).then(response=> {

        })
    }

    teamEnd => {
      fs.writeFile(
        "team.html",
          // `Whatever you're writing to it goes here`,
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        }
      );
      }
    


// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster

// going to need switch case based on which type of employee the user selects

//  In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.???

// The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.