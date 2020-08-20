import React, {Component} from 'react';
import './App.css';
import Image from './Image'

class App extends Component {
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return (
      <div className='App'>
        <Image url={'https://static.seattletimes.com/wp-content/uploads/2018/12/north-south-orcas-flat-FINAL-P-c-780x826.jpg'} />
      </div>
    )
  }
}


export default App;
