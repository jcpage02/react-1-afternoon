import React, { Component } from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val){
        this.setState({number1: val})
    }
    handleChange2(val){
        this.setState({number2: val})
    }
    handleSum(num1, num2){
        let sum = +num1 + +num2
        this.setState({sum: sum})
    }

    render(){
        return(        
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>{this.handleChange1(e.target.value)}}></input>
                <input className="inputLine" onChange={(e)=>{this.handleChange2(e.target.value)}}></input>
                <button className="confirmationButton" onClick={()=>{this.handleSum(this.state.number1, this.state.number2)}}>Calculate</button>
                <span className="resultsBox">Sum: {JSON.stringify(this.state.sum, null, 10)}</span>
            </div>
        )
    }
}

export default Sum