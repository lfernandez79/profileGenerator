const inquirer = require ("inquirer");
const fs = require ("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile); 

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
            name: "github"
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

function generateHTML(dataInput) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${dataInput.name}</h1>
    <p class="lead">My email address is:  ${dataInput.email}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${dataInput.github}</li>
      <li class="list-group-item">Project: ${dataInput.description}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}


    async function init(){

    try {
        const dataInput = await userQuestions();
        const html = generateHTML(dataInput);
        await writeFileAsync("index.html", html);
        console.log("Successfully  created index.html!");

        let {data} = axios.get(`https://api.github.com/users/${username}`)
    } catch (err) {
        console.log(err);
    }
}

init();


// https://api.github.com/users/lfernandez79

