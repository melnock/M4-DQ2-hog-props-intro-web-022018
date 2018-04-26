import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    console.log(Offspring)
    return (
      <div className="App">
        <MasterHog offspring= {Offspring.offspring}/>
      </div>
    )
  }

}

export default App
