import React, { useState } from 'react'
import './index.css'

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [addTotal, setAddTotal] = useState(number1 + number2)
  const [subTotal, setSubTotal] = useState(number1 - number2)
  const [mulTotal, setMulTotal] = useState(number1 * number2)
  const [divTotal, setDivTotal] = useState(number1 + number2)
  // const [total, setTotal] = useState

  function calculateAddTotal() {
    setAddTotal(number1 + number2)
    setNumber1(0)
    setNumber2(0)
  }

  function calculateSubTotal() {
    setSubTotal(number1 - number2)
    setNumber1(0)
    setNumber2(0)
  }

  function calculateMulTotal() {
    setMulTotal(number1 * number2)
    setNumber1(0)
    setNumber2(0)
  }

  function calculateDivTotal() {
    setDivTotal(number1 / number2)
    setNumber1(0)
    setNumber2(0)
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
        />
        <input
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
        />
      </div>

      <button onClick={calculateAddTotal}>Add</button>
      <button onClick={calculateSubTotal}>Subtract</button>
      <button onClick={calculateMulTotal}>Multiply</button>
      <button onClick={calculateDivTotal}>Divide</button>

      <br /><br />

      <span>
        {addTotal}
        {subTotal}
        {mulTotal}
        {divTotal}  
      </span>   

    </div>
  )
}



export default App;
