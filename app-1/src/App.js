import React, {Component} from 'react';
import './App.css';


class App extends Component {
  constructor () {
    super ()

    this.state = {
      message: ''
    }
  }

  inputChange(value) {
    this.setState({message: value})
  }

  render() {
    return (
      <div className="App">
        <input className='input' onChange={e => this.inputChange(e.target.value)} type='text'/>
        <h2>{this.state.message}</h2>
      </div>

  );
}
}

export default App;
