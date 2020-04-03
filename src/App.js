import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Counters from './Components/counters';


class App extends Component {
  
state = {
  counters :[{id :1 ,value:4},{id :2 ,value:0},{id :3 ,value:0},{id :4 ,value:0}]
}

handleDelete =(counterId)=>{
  const counters = this.state.counters.filter(c=>c.id !== counterId)
  this.setState({counters});
  console.log("delete ", counterId);
}
handleIncrement =(counter)=>{                
  const counters=[...this.state.counters]; 
  const index = counters.indexOf(counter);
  counters[index] = {...counter};

  counters[index].value++;
  this.setState({counters})
  //this.setState({count : this.state.count+1  })
}

handleReset =()=>{
  const counters = this.state.counters.map(c=>{c.value = 0;return c;})
  this.setState({counters})
}
  render() { 
    return ( 
      <React.Fragment>
        <NavBar total={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters onReset={this.handleReset} onIncrement = {this.handleIncrement}  onDelete ={this.handleDelete} counters={this.state.counters}/>
        </main>
      </React.Fragment>     );
  }
}
 
export default App;
 
