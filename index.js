const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile); 

    userQuestions();

    function userQuestions() {
    
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is the respository name?",
            name: "title"
        },

        {
            type: "input",
            message: "Describe the project",
            name: "description"
        },
        {
            type: "input",
            message: "Table of Contents",
            name: "contents"
        },
        {
            type: "input",
            message: "Installation notes",
            name: "install"
        },
        {
            type: "input",
            message: "How does the project work?",
            name: "usage"
        },
        {
            type: "input",
            message: "Any licences on this project?",
            name: "licence"
        },
        {
            type: "input",
            message: "Any other contributors to the project?",
            name: "contributors"
        },
        {
            type: "input",
            message: "Any testing done to thios project",
            name: "test"
        },
        {
            type: "input",
            message: "Comments relating to the project?",
            name: "questions"
        },
        
    ]);
};
    async function init(){

    try {
        const dataInput = await userQuestions();
        let {data} = axios.get(`https://api.github.com/users/${username}`)
    } catch (err) {
        console.log(err);
    }
};


// https://api.github.com/users/lfernandez79

