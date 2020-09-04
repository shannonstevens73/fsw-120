import React, { useState, useEffect } from 'react'

function App() { 

  const [keyvalue, setkeyvalue] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [op, setOp] = useState(null)

  useEffect(() => {}, [op, num1, num2])

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  }

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(num1),
      parseFloat(num2)
    )
      setOp(null)
      setNum2(String(temp))
      setNum1(null)
  }

  const handleNum = (number) => {
    setNum2(num2 === "0" ? String(number) : num2 + number);
  }

  const clearData = () => {
    setNum2("0");
    setNum1(0);
  }

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10))
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value)
        setNum1(num2)
        setNum2("")
        console.log("Hello")
      }
      if (op) {
        setOp(value)
      }
      if (num1 && op && num2) {
        performOperation();
      }
    } else if (value === "c") {
      clearData()    
    }
  }

  return (

    <div>

      <h4>React Calculator</h4>

      <div id="calculator">

        <div id="row1">
          <button id="display" onClick={() => (keyvalue)}>
            {keyvalue}
          </button>
        </div>

        <div id="row2">
          <button id="seven" keyvalue={7} onClick={handleOperation}>7</button>
          <button id="eight" keyvalue={8} onClick={handleOperation}>8</button>
          <button id="nine" keyvalue={9} onClick={handleOperation}>9</button>
          <button id="divide" keyvalue={"/"} onClick={handleOperation}>/</button>
        </div>
        
        <div id="row3">
          <button id="four" setkeyvalue={4} onClick={handleOperation}>4</button>
          <button id="five" keyvalue={5} onClick={handleOperation}>5</button>
          <button id="six" keyvalue={6} onClick={handleOperation}>6</button>
          <button id="multiply" keyvalue={"*"} onClick={handleOperation}>*</button>
        </div>

        <div id="row4">
          <button id="one" keyvalue={1} onClick={handleOperation}>1</button>
          <button id="two" keyvalue={2} onClick={handleOperation}>2</button>
          <button id="three" keyvalue={3} onClick={handleOperation}>3</button>
          <button id="add" keyvalue={"+"} onClick={handleOperation}>+</button>
        </div>

        <div id="row5">
          <button id="clear" keyvalue={"c"} onClick={handleOperation}>Clear</button> 
          <button id="zero" keyvalue={0} onClick={handleOperation}>0</button>
          <button id="equals" keyvalue={"="} onClick={handleOperation}>=</button>
          <button id="minus" keyvalue={"-"} onClick={handleOperation}>-</button>          
        </div>

      </div>

    </div>    
  )
}

export default App
