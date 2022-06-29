const express = require('express');
const getReposByUsername = require('../helpers/github.js')
const { getAll, save } = require('../database')
let app = express();

// Adds a middleware for serving static files
// access files from this folder via HTTP
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  // and rend a GET request to the github API, then
  // save the repo information in the database
  // response to client with 201
  console.log(req.body);
  getReposByUsername(req.body.username)
    .then((data) => save(data))
    .then(() => res.status(201).send())
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  getAll().then((data) => {
    res.send(data)
  })
});

let port = process.env.PORT || 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

