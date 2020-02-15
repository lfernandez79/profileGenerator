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
            message: "What is the licensing of your project?",
            choices: ["MIT", "GPL", "Apache License 2.0", "BSD"]
        },
        {
            type: "input",
            name: "gitUsername",
            message: "What is your Github username?"
        }
    ]);
}

init();

async function init() {
    try {
        var userAnswers = await userQuestions();
        // console.log(userAnswers);
        var response = await api.getUser(userAnswers.gitUsername);
        // var totalStars = await api.getStars(userAnswers.gitUsername);
        var data = { userAnswers, ...response.data };
        console.log(data);

        var userMD = await readMe(data);

        await writeFileAsync("README.md", userMD, "utf8");
    } catch (err) {
        console.log(err);
    }
}


// https://api.github.com/users/lfernandez79

