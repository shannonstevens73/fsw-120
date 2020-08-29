import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles.css'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './Home'
import About from './About'
import Services from './Services'

function App() {
  return (
    <div>
      <Navbar />      
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
      </Switch>
      <Footer />
    </div>
  
  )
}
        

export default App
