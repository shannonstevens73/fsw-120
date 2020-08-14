import React from "react"
import "./App.css"
import SuperHero from "./SuperHero"
import HeroData from "./HeroData"


       

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      heros: HeroData
    }
   
  }  
    
  render() {
    const heroItems = HeroData.map(item => <SuperHero key={item.id} name={item.name} show={item.show} catchPhrase={item.catchPhrase} imageName={item.imageName} handleChange={this.handleChange}/>)

  
    return (
      <div>
        {heroItems}
      </div>
    )
    } 
}    


export default App
