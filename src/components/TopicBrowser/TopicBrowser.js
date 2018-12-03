import React, { Component } from 'react'
import EvensAndOdd from './../Topics/EvenAndOdd'
import FilterObject from './../Topics/FilterObject'
import FilterString from './../Topics/FilterString'
import Palindrome from './../Topics/Palindrome'
import Sum from './../Topics/Sum'

class TopicBrowser extends Component {
    constructor() {
      super()
  
    }
    
    render(){
        return (
            <div>
                <p>Hellow World</p>
                <EvensAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser


