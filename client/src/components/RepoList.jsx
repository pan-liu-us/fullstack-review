import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <h5>There are {props.repos.length} repos.</h5>
    {props.repos.map(repo => {
      return (
        <li key={repo.id}>{repo.repo_name}</li>
      )
    })}
  </div>
)

export default RepoList;