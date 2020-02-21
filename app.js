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
        const manager = new Manager(respone.name, response.id, response.email, response.officeNumber)
        employees.push(manager);

        makeTeam();
    })
};

managerInfo();

makeTeam => {
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
}
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
          const engineer = new Engineer(respone.name, response.id, response.email, response.github)
          employees.push(engineer);

          makeTeam();
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
          const intern = new Intern(respone.name, response.id, response.email, response.school)
          employees.push(intern);

          makeTeam();
        })
    }

    teamEnd => {
      fs.writeFile(
        '../output/team.html',
        // "team.html",
          // `Whatever you're writing to it goes here`,
        function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("Success!");
        }
      );
      };