//PART -1 MOSH CLASS

import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        
        count : 1 ,
        //setting attributes
        image : 'https://picsum.photos//200' ,
        tags: ['tag1','tag2','tag3']
    }

    //event hand;ers
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    //one way of do styling 
    styles ={
        fontSize : 50,fontWeight:'bold'
    }

    render() { 

        //let classes =  this.getClasses();

        return ( 
        <div>
           
            {/* <img src={this.state.image}></img> */}            
            {/* other way of do styling -------- style = {{fontSize:30} } */}

             <span  className={this.getClasses()}>{this.formatCount()}</span>
             <button className="btn btn-secondary btn-sm" onClick={()=>this.handleIncrement({id:1})}>Increment</button>

            {/* {this.state.length === 0 && "Please enter a new tag"}
            {this.rendertags()} */}
             
        </div> 
        );
    }

    handleIncrement =(product)=>{
        console.log(product); 
        this.setState({count : this.state.count+1  })
    }

    rendertags(){
            if(this.state.tags.length  ===0 ) return <p>There are no tags</p>;
            return <ul>{this.state.tags.map(t=><li key={t}>{t}</li>)}</ul>

    }
    getClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    //Embedding Expressions
    formatCount(){
        const {count}= this.state; // object restructuring done here
        return count ==0?'Zero' : count;

    }

    //MOSH Classes 
    //Embedding expressions
    //setting attributes
    //rendenring lists
        //notes >>>>>>>>>>>
         //1.Each child in an array unique error >>>>>>>> add Key 
    //Conditional rendenring
    //handling events
    //update the state
    //what happend when state changes
}
 
export default Counter;