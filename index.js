const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile); 


const getInfo = async function userQuestions() {
    
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
    ])
    
    try {
        const { name, email, username, title } = await inquirer.prompt(questions);

        let { data } = await axios.get(`https://api.github.com/users/${username}`)

    } catch (err) {
        console.log(err);
    }
 };

console.log(getInfo);
// https://api.github.com/users/lfernandez79



