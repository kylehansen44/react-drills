import React, {Component} from 'react';
import './App.css';

 class App extends Component {
   constructor(){
     super()

     this.state = {
       filterString: '',
       candy: ['snickers', 'twix', 'life saver gummies', 'symphony bar', 'mike n ikes']
     }
   }
   inputChange (filter) {
     this.setState({filterString: filter})
   }

   render(){
     let candy = this.state.candy.filter((element, index) => {
       return element.includes(this.state.filterString)
     })
     .map((element, index) => {
       return <h2 key={index}>{element}</h2>
     })

     return (
       <div className='App'>
         <input onChange={e => this.inputChange(e.target.value)} type='text'/> {candy}
       </div>
     )
   }
 
}

export default App;
