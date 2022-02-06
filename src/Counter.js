import React from "react";
import App from "./App";

class Counter extends React.Component{
    constructor(props){
        super(props);
            this.state={
                count:10
            }
        }
        increament=()=>{
            this.setState({
                count: this.state.count+1
            })
        }
   decreament=()=>{
       this.setState({
count: this.state.count-1
       })
   }
    render(){
        return(

<div className="Counter-head">
    <p>This our current Count:{this.state.count}</p>
    <button className="btn1" onClick={this.increament}>+</button>
    <button className="btn1"onClick={this.decreament}>-</button>
</div>
        )};
        }
        
    
    

export default Counter;