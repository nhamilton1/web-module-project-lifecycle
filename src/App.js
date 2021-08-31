
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    gitUserData: [],
    username: ''
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Git User Search</h1>
        <form>
          <input value={this.state.username} onChange={this.handleChange}/>
          <button>Search Git User</button>
        </form>
      </div>
    )
  }
}

export default App;
