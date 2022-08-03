// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter the title of the project",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter the description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage information",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter the contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Please enter the test instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Please chose the license for the project",
    choices: [
      "GUNAGPLv3",
      "GUNGPLv3",
      "GUNLGPLv3",
      "Mozilla",
      "Apache",
      "MIT",
      "None",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "Please enter the Github username",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter the email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Successfully created README.md")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    writeToFile("README.md", answer);
  });
}

// Function call to initialize app
init();
