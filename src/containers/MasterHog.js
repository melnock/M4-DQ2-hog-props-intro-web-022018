import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import Master from '../assets/master-hog.png'
import BabyHog from '../components/BabyHog'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'


const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

class MasterHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      eyeColor: "blue",
      name: "Master Blaster",
      weight: '2.54 Tons',
      offspring: [...props.offspring]
    }
  }


  changeEyeColor(event) {
    event.preventDefault()
    this.setState({
      eyeColor: event.target.value,
    })
  }

  getOffspring(){
    const color = this.state.eyeColor
    return this.state.offspring.map((hog)=>{
      return <BabyHog name={hog.name} eyeColor={this.state.eyeColor} weight={hog.weight} img={imgMapper[color]} />
    })
  }


  render() {
    return (
      <div>

        <form>
          <input
            type="radio"
            name="eyeColor"
            value="blue"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Blue<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="sun"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Sun<br></br>
          <input
            type="radio"
            name="eyeColor"
            value="glowing"
            onChange={this.changeEyeColor.bind(this)}>
          </input> Glowing<br></br>
        </form>


        <h2>Name: {this.state.name}</h2>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>
        <div id="masters-domicile">
          <img id="master-blaster" src={Master} alt='MasterBlaster' style={{height: 400}}></img>
        </div>
        <ul className="hoglist">
          {this.getOffspring()}
        </ul>

      </div>

    )
  }

}

export default MasterHog;
