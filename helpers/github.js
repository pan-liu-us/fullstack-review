const axios = require('axios');
// const request = require('request');
const config = process.env.GIT_TOKEN || require('../config.js').TOKEN;

// axios.defaults.headers.common["Authorization"] =`token ${config}`

let getReposByUsername = (username) => {
  // Use the axios module to request repos for a specific user from the github API
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config}`
    }
  };

  return axios.get(options.url, options.header);

  // axios.get(options.url, options.headers)
  //      .then(response => {
  //       console.log('Github Response Here: ', response.data);
  //       return response.data;
  //     })
}

// Test if API works:
// getReposByUsername('octocat')

module.exports = getReposByUsername;