const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(username) {
// GRAB USER INFROMATION
    const queryUrl = `https://api.github.com/users/${username}`;
    console.log(queryUrl);
    return axios.get(queryUrl).catch(err => {
      console.log("User not found");
      process.exit(1);
    });
  },
};

module.exports = api;