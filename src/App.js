import GitUser from './components/GitUser';
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './index.css';

class App extends React.Component {
  state = {
    gitUserData: [],
    gitFollowers: [],
    username: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/nhamilton1')
      .then(res => {
        this.setState({
          ...this.state,
          gitUserData: res.data
        })
      })
      .catch(err => {
        console.error(err)
      })
  }



  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        this.setState({
          ...this.state,
          gitUserData: res.data
        })
      })
      axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        this.setState({
          ...this.state,
          gitFollowers: res.data
        })
      })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  render() {
    return (
      <div style={{alignContent: 'center'}}>
        <h1>Git User Search</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.username} onChange={this.handleChange}/>
          <button>Search Git User</button>
          <div id='gitUser'>
            {
              (this.state.gitUserData.length < 1) ? <div>Loading...</div> : <GitUser user={this.state.gitUserData} followers={this.state.gitFollowers}/>
            }     
          </div>
        </form>
      </div>
    )
  }
}

export default App;
