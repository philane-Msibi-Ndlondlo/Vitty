const ReadmeGenerator = require("./models/ReadmeGenerator");
const inquirer = require("inquirer");

// Questions asked to the user
const questions = [
  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "Please give image URL of your project.",
    name: "ImageURL",
  },
  {
    type: "input",
    message: "What necessary requirements must be installed to run this app?",
    name: "Requirements",
  },
  {
    type: "input",
    message: "How to install or run this project?",
    name: "Installation",
  },
  {
    type: "list",
    message: "What language was used to show examples for this app?",
    name: "Language",
    choices: ["javaScript", "Python", "C++", "C#", "Java"]
  },
  {
    type: "input",
    message: "Write a statement to be used as an example?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What test commands are available?",
    name: "Tests",
  },
  {
    type: "input",
    message: "Please add contributions",
    name: "Contributor",
  },
  {
    type: "list",
    message: "What license was used for this README?",
    name: "License",
    choices: ["MIT", "Apache"]
  },
];


async function setup() {

    const { Title, ImageURL, Description, Requirements, Installation, Language, Usage, Tests, Contributor, License } = await inquirer.prompt(questions);
    ReadmeGenerator.generate(Title, ImageURL, Description, Requirements, Installation, Language, Usage, Tests, Contributor, License);
}

setup();
