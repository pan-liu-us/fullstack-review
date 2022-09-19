<div>
  <h1 id="github-fetcher-fullstack-review">GitHub Fetcher: Fullstack Review</h1>
  <p>You are given a skeleton of frontend and backend code. On the frontend, you have React. On the backend, you have Express and MongoDB.</p>
  <p>Your task is to fetch data from an API, store that data in a database, and display the data on your app's main page.</p>
  <h3 id="takeaways">Takeaways</h3>
  <p>The primary purpose of this sprint is to give you the opportunity to compose together all the isolated concepts you've learned in the past 5 weeks. While this is an exercise, not an assessment, DO NOT reference any code in your past projects. Instead, use Google (to find official documentation and helpful Stack Overflow answers) as your primary source of information.</p>
  <h2 id="getting-started">Getting Started</h2>
  <ul class="task-list">
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Install MongoDB.</p>
      <ul>
        <li>Follow the <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition-with-homebrew" class="external-link" target="_blank">installation instructions
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a>.</li>
        <li>Follow <a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition" class="external-link" target="_blank">these instructions
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a> to run MongoDB.</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Install dependencies.</p>
      <pre><code class="bash hljs" tabindex="0">$ npm install
</code></pre>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Start webpack and the server in separate terminal tabs, using the following commands.</p>
      <pre><code class="bash hljs" tabindex="0">$ npm run react-dev
$ npm run server-dev
</code></pre>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Open the application in your browser at <code tabindex="0">localhost:1128</code>.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Take a look at the provided code. This repo uses webpack. webpack is a replacement for the babel command you used in recast.ly. Notice, however, that rather than attaching components to the window object, you'll use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import" class="external-link" target="_blank">import
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export" class="external-link" target="_blank">export
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> syntax.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> See the <strong>tips</strong> section before you start writing any code.</p>
    </li>
  </ul>
  <h2 id="overview">Overview</h2>
  <p>You are building an app that takes data from GitHub's API and stores it in your database. Here is an overview of what you'll need to do:</p>
  <ul>
    <li>
      <p>When a user types in a <strong>GitHub username</strong> and submits the form, your app should:</p>
      <ul>
        <li>Send a POST request to your Express server</li>
        <li>Your server should GET that user's repos from GitHub's API</li>
        <li>Your server should then save the repos to the database</li>
      </ul>
    </li>
    <li>
      <p>When a user visits or refreshes your page, your app should:</p>
      <ul>
        <li>GET the top 25 repos in your express server's database (How will you determine "top" repos? This doesn't mean "most recent")</li>
        <li>Take those repos and display them on the page</li>
      </ul>
    </li>
  </ul>
  <h2 id="basic-requirements">Basic Requirements:</h2>
  <ul class="task-list">
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Draw a diagram showing how this app works. Make sure your diagram includes the client, server, and database.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Explain your diagram to and get it signed off by a fellow student. Then do the same with your staff.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Design (draw a schema) a <code tabindex="0">repos</code> Mongoose schema. You can look at <code tabindex="0">data.json</code> to see the structure of the data from GitHub's API. What properties will you need? Once you've figured out your schema, complete <code tabindex="0">repoSchema</code> in <code tabindex="0">database/index.js</code>, using the <a href="http://mongoosejs.com/docs/index.html" class="external-link" target="_blank">Mongoose Quick Start Guide
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a> for help.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Explain your schema to and get it signed off by a fellow student. Then do the same with your staff.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> When a user types a GitHub username into the text field, use jQuery's ajax method to send a <code tabindex="0">POST</code> request to <code tabindex="0">/repos</code> (<strong>you'll have to fix the bug in the Search Component first</strong>).</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Complete the <code tabindex="0">getReposByUsername</code> function in <code tabindex="0">helpers/github.js</code>. In this function, you'll use the <code tabindex="0">axios</code> npm module to fetch a user's repositories from the <a href="https://developer.github.com/v3/" class="external-link" target="_blank">GitHub API
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a>.</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> To access the GitHub API without rate limits, you'll need a <a href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/" class="external-link" target="_blank">personal access token
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a>. Make a copy of <code tabindex="0">config.example.js</code> and rename it to <code tabindex="0">config.js</code>, then add your personal access token.</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Complete the <code tabindex="0">save</code> function in <code tabindex="0">database/index.js</code>. This function will save the relevant data from the GitHub API into your database.</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> Ensure there are no duplicate repos. If you happen to import the same repo twice, it should only show up once in your database. See the tips section about considering unique columns.</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Complete the <code tabindex="0">POST /repos</code> endpoint on your Express server - in this route, you'll use your <code tabindex="0">getReposByUsername</code> function to fetch the specified user's GitHub repos, then use your <code tabindex="0">save</code> function to store the repo information into your database.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Write a <code tabindex="0">GET /repos</code> endpoint that retrieves the top 25 repos stored in your database, sorted by the criteria you decided on earlier.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Refactor the client so that when the page loads, the top 25 repos are displayed on the page.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Make each repo's name in the table link to that repo's page on GitHub.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> After entering a GitHub handle in the form, update the page with the latest top 25 <strong>without requiring a page refresh</strong>.</p>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> Complete <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs" class="external-link" target="_blank">Getting Started on Heroku with Node.js
          <svg class="svg">
            <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
          </svg>
        </a>.</p>
      <ul class="task-list">
        <li class="task-list-item"><input type="checkbox" class="md-task"> What config variables will you need to set in order for the deployed version to work? Modify your existing code to use config variables, then set those config variables when you get to that section.</li>
        <li class="task-list-item"><input type="checkbox" class="md-task"> How will you include your database? The Heroku link above shows an example using Postgres. Though the commands are different for MongoDB, many of the underlying principles are the same. Take a look at <a href="https://www.mongodb.com/cloud/atlas" class="external-link" target="_blank">MongoDB Atlas
            <svg class="svg">
              <use href="/assets/images/svg/svg-sprite-action-symbol.svg#ic_launch_24px"></use>
            </svg>
          </a> to get started.</li>
      </ul>
    </li>
    <li class="task-list-item">
      <p><input type="checkbox" class="md-task"> After completing all of the above requirements, demo your app to your staff and it signed off by them.</p>
    </li>
  </ul>
  <p><strong>DO NOT MOVE ON TO ADVANCED CONTENT UNTIL YOU HAVE DEMOED YOUR APP!</strong></p>
  <h2 id="advanced-content">Advanced Content</h2>
  <ul>
    <li>After an import, display an "X new repos imported, Y repos updated" message.
      <ul>
        <li>This will require the server to send back that information in the POST response.</li>
      </ul>
    </li>
  </ul>
  <p>Add the following additional components:</p>
  <ul>
    <li>
      <p>When importing a repo, store the contributors for each repo as well. This will require at least one more table.</p>
    </li>
    <li>
      <p>A users component that lists all the users in your database</p>
      <ul>
        <li>Each user's username should be a link that takes you to that user's page (see next bullet)</li>
      </ul>
    </li>
    <li>
      <p>A user component that displays that user's top 10 repos (in your database)</p>
      <ul>
        <li>Each repo should be linked to its respective page on GitHub</li>
        <li>Display a "friends list", where each friend is a contributor to any of the user's repos.</li>
      </ul>
    </li>
    <li>
      <p>Deploy your application on Heroku</p>
    </li>
    <li>
      <p>Refactor your database code to use a SQL database</p>
    </li>
  </ul>
  <h2 id="tips">Tips</h2>
  <ul>
    <li>
      <p><strong>DO NOT</strong> reference any code in your past projects. Instead, use Google (to find official documentation and helpful Stack Overflow answers) as your primary source of information.</p>
      <p><em>Example: "How do I add a route in Express?"</em></p>
      <p><em>Solution:</em></p>
      <ol>
        <li>Google the above question</li>
        <li>Prioritize official docs
          <ul>
            <li>In this case, Express docs</li>
            <li>Do a search (command + f) on the docs page and search for your subject (routes)</li>
            <li>Read!</li>
          </ul>
        </li>
        <li>If official docs are too obscure, look for a Stack Overflow question (from the Google page you brought up earlier)</li>
        <li>Read the question content and make sure it's relevant</li>
        <li>If you find a good answer:
          <ul>
            <li>Understand it conceptually</li>
            <li>Reference the official documentation to see if its recommended usage matches the Stack Overflow answer</li>
            <li>Use that information to proceed in writing your app</li>
          </ul>
        </li>
      </ol>
    </li>
    <li>
      <p>You should learn how to be autonomous on the "how to do" (see previous bullet). However, if you don’t know “what to do", you should open a help desk ticket pretty quickly.</p>
      <ul>
        <li>It’ll be the same on the job. Your co-workers won’t have time to go over every "how to do" question you might have, but they will always be willing to go over the “what to do” strategies and approaches.</li>
      </ul>
    </li>
    <li>
      <p>To avoid duplicate repos, you first must decide which column(s) you should use to determine uniqueness.</p>
    </li>
  </ul>
</div>

<hr />

This is a project I completed as a student at [hackreactor](http://hackreactor.com). This project was worked on with a pair.
