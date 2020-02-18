const axios = require("axios");


// require("dotenv").config();


// GRAB USER INFORMATION
const api = {
    getUser(username) {

    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl);
    return axios.get(queryUrl).catch(err => {
      console.log("User not found");
      process.exit(1);
    });
  },

};

module.exports = api;
