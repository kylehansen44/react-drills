import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      shows: ['The Office', 'Seinfeld', 'Arrested Development', 'Parks and Recreation', 'Psych']
    }
  }
  render(){

    let shows = this.state.shows.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <h2> {shows} </h2>
      </div>
  );
  }
}

export default App;
