const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMe = require("./utils/generateMarkdown");
const api = require("./utils/api.js");

const writeFileAsync = util.promisify(fs.writeFile);

function userQuestions() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "Description",
            message: "Give a brief description of your project."
        },
        {
            type: "list",
            name: "License",
            message: "Choose a license?",
            choices: ["MIT", "GPL", "BSD"]
        },
        {
            type: "input",
            name: "gitUsername",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }
    ]);
}

init();

async function init() {
    try {
        var userAnswers = await userQuestions();
        console.log(userAnswers);
        var response = await api.getUser(userAnswers.gitUsername);
        
        var data = { userAnswers, ...response.data };
        console.log(data);

        var userMD = await readMe(data);

        await writeFileAsync("README.md", userMD, "utf8");
    } catch (err) {
        console.log(err);
    }
}


// https://api.github.com/users/lfernandez79

