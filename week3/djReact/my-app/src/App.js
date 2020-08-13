import React from 'react'
import './App.css'
import Square from "./Square"



class App extends React.Component {
  constructor() {
    super()
    this.state = {

    colors: [
      "red", "blue", "purple", "green"]
    }

  }

  smallTime = () => {
    this.setState(prevState => {
      if(prevState.colors[0] !== "white"){
        return {colors: [ "white", "white", "white", "white"]} 
      } else if(prevState.colors[0] === "white") {
        return {colors: [ "black", "black", "black", "black"]} 
          }
    })
  }

  party = () => {
    this.setState(prevState => {
      if(prevState.colors[0] !== "purple"){
        return {colors: [ "purple", "purple", prevState.colors[2], prevState.colors[3]]} 
      } 
    })
  }

  professional1  = () => {
    this.setState(prevState => {
      if(prevState.colors[2] !== "blue"){
        return {colors: [ prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]} 
      } 
    })
  }

  professional2  = () => {
    this.setState(prevState => {
      if(prevState.colors[3] !== "blue"){
        return {colors: [ prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]} 
      } 
    })
  }

  bigTime1  = () => {
    this.setState(prevState => {
      if(prevState.colors[0] !== "pink"){
        return {colors: [ "pink", "slategray", "slategray", "slategray"]} 
      } 
    })
  }

  bigTime2  = () => {
    this.setState(prevState => {
      if(prevState.colors[1] !== "pink"){
        return {colors: [ "slategray", "pink", "slategray", "slategray"]} 
      } 
    })
  }

  bigTime3  = () => {
    this.setState(prevState => {
      if(prevState.colors[3] !== "pink"){
        return {colors: [ "slategray", "slategray", "slategray", "pink"]} 
      } 
    })
  }

  bigTime4  = () => {
    this.setState(prevState => {
      if(prevState.colors[2] !== "pink"){
        return {colors: [ "slategray", "slategray", "pink", "slategray"]} 
      } 
    })
  }


  render() {
    return (
        <div>
          <div className="wrapper">
            <Square backgroundColor = {this.state.colors[0]}/>
            <Square backgroundColor = {this.state.colors[1]}/>
            <Square backgroundColor = {this.state.colors[2]}/>
            <Square backgroundColor = {this.state.colors[3]}/> 
          </div>
          <div className="button">
            <button className="button1" onClick = {this.smallTime}>Small Time</button>
            <button className="button2" onClick = {this.party}>Party</button>
            <button className="button3" onClick = {this.professional1}>Professional 1</button>
            <button className="button4" onClick = {this.professional2}>Professional 2</button>
          </div>
          <div className="button">
            <button className="button1" onClick = {this.bigTime1}>Big Time 1</button>
            <button className="button2" onClick = {this.bigTime2}>Big Time 2</button>
            <button className="button3" onClick = {this.bigTime3}>Big Time 3</button>
            <button className="button4" onClick = {this.bigTime4}>Big Time 4</button>
          </div>
        </div>
    )       
  }
}

export default App
