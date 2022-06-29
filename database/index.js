const mongoose = require('mongoose');
const { Schema } = mongoose;

// mongoose.connect('mongodb://localhost/fetcher');

mongoose.connect('mongodb://localhost/fetcher',
                 {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
          console.log('MANGO CONNECTION OPEN!!')
        })
        .catch((err) => {
          console.log('OH ERROR ABOUT MANGO CONNECTION!!');
          console.log(err)
        })

let repoSchema = new Schema({
  id: {type: Number, unique: true},
  repo_name: String,
  username: String,
  url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// Test if Mango works in mongoDB: db.repos.find()

let save = (repos) => {
  // Save a repo or repos to the MongoDB
  console.log(repos);
  var all = [];
  repos.data.forEach(function(repo) {
    let newRepo = new Repo({
      id: repo.id,
      username: repo.owner.login,
      repo_name: repo.name,
      url: repo.html_url,
      stars: repo.stargazers_count,
    });
  all.push(newRepo)
  });

  console.log(all)
  Repo.create(all);
}


let getAll = () => {
  return Repo.find({})
             .sort('-stars')
             .limit(25)
             .exec()
}

module.exports.save = save;
module.exports.getAll = getAll;