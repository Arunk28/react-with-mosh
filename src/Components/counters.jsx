import React, { Component } from 'react';  
import Counter from './counter1' ;
import Counter1 from './counter1';
class Counters extends Component {
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
        return ( <div>
            <button className="btn-primary btn-sm m-2" onClick={this.handleReset}> Reset </button>
            {this.state.counters.map
            (m=>
            <Counter1 key ={m.id}   onDelete={this.handleDelete} c={m} onIncrement={this.handleIncrement}>
                {/* <h4>Counter # {m.id}</h4> */}
            </Counter1>

                )}
        </div> );
    }
}
 
export default Counters;

//Passing Data to Components
//passign children
//updating the state