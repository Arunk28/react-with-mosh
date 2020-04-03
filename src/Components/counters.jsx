import React, { Component } from 'react';  
import Counter from './counter1' ;
import Counter1 from './counter1';
class Counters extends Component {
    
    render() { 
        const {onReset,onDelete,onIncrement,counters} = this.props;    //destructuring elements
        return ( <div>
            <button className="btn-primary btn-sm m-2" onClick={onReset}> Reset </button>
            {counters.map
            (m=>
            <Counter1 key ={m.id}   onDelete={onDelete} c={m} onIncrement={onIncrement}>
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