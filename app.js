var fs = require("fs");
var inquirer = require("inquirer");
const Manager  = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern   = require("./Develop/lib/Intern");
const render   = require("./Develop/lib/htmlRenderer");
const employees = [];

function managerInfo(){
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Let's build your software engineering team",
        name: "build"
      },
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
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
        employees.push(manager);

        makeTeam();
    })
    
};

managerInfo();

function makeTeam() {
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
            console.log(employees);
            teamEnd();
            break;
      }
    })
}
    // make functions for each diff employee type and .then construct new employee and push to array
    // make function to end the whole thing adn write to team.html under output

    function engineerInfo(){
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
          const engineer = new Engineer(response.name, response.id, response.email, response.github)
          employees.push(engineer);

          makeTeam();
        })
    }

    function internInfo() {
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
          const intern = new Intern(response.name, response.id, response.email, response.school)
          employees.push(intern);

          makeTeam();
        })
    }

    function teamEnd(){
      fs.writeFile(
        // '../output/team.html', process.argv[2],
        'team.html', render(employees),
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


      // .then(function(data) {

      //   var filename = data.name.toLowerCase().split(' ').join('') + ".json";
      
      //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
      
      //     if (err) {
      //       return console.log(err);
      //     }
      
      //     console.log("Success!");
      
      //   });
      // });

      