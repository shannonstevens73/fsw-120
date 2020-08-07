import React from 'react'

import Spot from "./Spot"
import VacationData from "./VacationData"

function App() {
  const vacayComponents = VacationData.map(spot => <Spot key={spot.id} place={spot.place} price={spot.price} time={spot.time} />)
  
  return (
      <div>
          {vacayComponents}            
      </div>
  )
}

export default App
