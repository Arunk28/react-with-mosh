import React, { Component } from 'react';   
class Counter1 extends Component {

componentDidMount(prevProps,prevState){

    //update the component will call if diff value make a call and change it
}

componentWillMount(){
//delete the component will call 
//memory leaks clean ups 

}

    //state = { count: this.props.c.value  }
    render() { 
        return (
        <div>
                {/* {this.props.children} */}
                <span  className={this.getClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={()=>this.props.onIncrement(this.props.c)}>Increment</button>
                <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.c.id)}>Delete</button>

        </div> );
    }

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.c.value === 0 ? "warning" : "primary";
        return classes;
    }

    //Embedding Expressions
    formatCount(){
        const {value}= this.props.c; // object restructuring done here
        return value ==0?'Zero' : value;

    }

    // handleIncrement =(product)=>{
    //     console.log(product); 
    //     this.setState({count : this.state.count+1  })
    // }

   
}
 
export default Counter1;