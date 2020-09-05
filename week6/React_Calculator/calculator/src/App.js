import React, { useState } from 'react'
import './index.css'

function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [total, setTotal] = useState(0)

  function calculateAddTotal() {
    setTotal(number1 + number2)
    setNumber1(0)
    setNumber2(0)
  }

  function calculateSubTotal() {
    setTotal(number1 - number2)
    setNumber1(0)
    setNumber2(0)
  }

  function calculateMulTotal() {
    setTotal(number1 * number2)
    setNumber1(0)
    setNumber2(0)
  }

  function calculateDivTotal() {
    setTotal(number1 / number2)
    setNumber1(0)
    setNumber2(0)
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>

      <br />

      <div className="number-inputs">
        <input
          id="input1"
          type="number"
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
        />
        <input
          id="input2"
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
        />
      </div>

      <br /><br />

      <div id="buttons">
        <button id="btn1" onClick={calculateAddTotal}>Add</button>
        <button id="btn2" onClick={calculateSubTotal}>Subtract</button>
        <button id="btn3" onClick={calculateMulTotal}>Multiply</button>
        <button id="btn4" onClick={calculateDivTotal}>Divide</button>
      </div>

      <h1 id="total">Answer: {total}</h1>   

    </div>
  )
}

export default App
