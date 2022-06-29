import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount() {
    axios.get('/repos')
      .then(response => this.setState({repos:response.data}))
      .catch(error => console.log(error))
  }

  search (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {
      username: term
    }).then(response => {
        axios.get('/repos')
          .then(response => this.setState({repos:response.data}))
          .catch(error => console.log(error))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));