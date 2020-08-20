import React, {Component} from 'react';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super()

    this.state = {
      list: [],
      input: ''
    }
    this.addTask = this.addTask.bind(this)
  }

  inputChange (value){
    this.setState({input: value})
  }

  addTask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render(){
    let list = this.state.list.map((element, index) =>{
      return <Todo key={index} task={element} />
    })

    return (
      <div className='App'>
        <h1> My to-do list </h1>
        <div>
          <input value={this.state.input} placeholder='Enter New Task' onChange={e => this.inputChange(e.target.value)} />

          <button onClick={this.addTask}> Add </button>
        </div>
        <br/>

        {list}
      </div>
    )
  }
}



export default App;


