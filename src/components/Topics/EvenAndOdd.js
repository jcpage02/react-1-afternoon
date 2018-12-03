import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleUserInput(e) {
        this.setState({
            userInput: e
        })
    }

    handleUpdateArrays(userInput) {
        let array = userInput.split(",")
        let evenArrayCopy = []
        let oddArrayCopy = []

        array.forEach((val,i)=>{
            val % 2 === 0 ? evenArrayCopy.push(parseInt(val, 10)) : oddArrayCopy.push(parseInt(val, 10))
        })

        this.setState({
            evenArray: evenArrayCopy,
            oddArray: oddArrayCopy
            // userInput: ''
        })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleUserInput(e.target.value)} value={this.state.userInput}></input>
                <button className="confirmationButton" onClick={() => this.handleUpdateArrays(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

