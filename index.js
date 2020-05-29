const inquirer = require("inquirer")
const axios = require("axios")
const fs = require("fs")
let generateMarkdown = require("./utils/generateMarkdown")


const questions = [
    {
        type: "questions",
        name: "Username",
        message: "What is your Github Username?",
        default: "Isaias2020"
    },
    {
        type: "questions",
        name: "Projectsname",
        message: "What is your project's name?",
    },
    {
        type: "questions",
        name: "Description",
        message: "Please write a short description of your project.",
    },
    {
        type: "questions",
        name: "License",
        message: "What kind of license should your project have?",
    },
    {
        type: "questions",
        name: "Dependencies",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "questions",
        name: "Runtests",
        message: "What command should be run to run tests?",
    },
    {
        type: "questions",
        name: "Repo",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "questions",
        name: "Contribute",
        message: "What does the user need to know about contributing to the repo?",
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err
    })
}

function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers);
        let url = "https://api.github.com/users/" + answers.Username + "/events/public"

        axios.get(url).then(function (response) {
            let image = response.data[0].actor.avatar_url
            answers["image"] = image
            let email = response.data[0].payload.commits[0].author.email
            answers["email"] = email

            writeToFile("readme.md", generateMarkdown(answers))
        })



    });
}

init();
