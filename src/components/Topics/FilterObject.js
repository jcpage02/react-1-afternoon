import React, { Component } from 'react'

export default class FilterObject extends Component {

    constructor() {
        super()

        this.state = {
            family: [
                { 
                    name: "James", 
                    age: 27, 
                    hobby: "basketball" 
                },
                { 
                    name: "Laura", 
                    food: "chicken", 
                    hobby: "horseback riding" 
                },
                { 
                    name: "Ashlee", 
                    age: 24,
                }
            ],

            userInput: "",
            filteredFamily: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val })
    }

    filterProperty(prop) {
        let family = this.state.family
        let filteredFamily = []

        for (let i = 0; i < family.legth; i++) {
            if (family[i].hasOwnProperty(prop)) {
                filteredFamily.push(family[i])
            }
        }

        this.setState({ filteredFamily: filteredFamily })
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4> Filter Object </h4>
                <span className="puzzleText"> Original: { JSON.stringify(this.state.family, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterProperty(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB"> Filtered:  { JSON.stringify(this.state.filteredFamily, null, 10) }</span>
            </div>
        )
    }
}
