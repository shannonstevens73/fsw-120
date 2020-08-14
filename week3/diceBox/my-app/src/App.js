import React from "react"
import "./App.css"
import DiceBox from "./DiceBox"

class App extends React.Component {

  constructor(){
      super()
      this.state = {
          num1: 1,
          num2: 1,
          num3: 1,
          num4: 1,
          num5: 1
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    
            this.setState(prevState => {return {num1: Math.floor(Math.random() * 6)}})
            
            
        

        }
    


  render() {
    return (
        <div>
          <div className="wrapper">
            <DiceBox num1 = {this.state.num1}/>
            <DiceBox num2 = {this.state.num2}/>
            <DiceBox num3 = {this.state.num3}/>
            <DiceBox num4 = {this.state.num4}/> 
            <DiceBox num5 = {this.state.num5}/> 
          </div>
          <div className="button">
            <button className="button1" onClick = {this.handleClick}><strong>Roll the Dice</strong></button>
          </div>
         
        </div>
    )       
  }
}

export default App
