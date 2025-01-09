import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {

  const [calculation, setCalculation] = useState("");

  const handleClick = (operationSign) => {
    setCalculation(prev =>  {
      
      if (operationSign === "0" && (prev === "" || /[+\-*/]$/.test(prev) || prev === "Invalid Math Operation")) {
        return prev; 
      }
    
      if (operationSign === "0" && /^[0-9]+$/.test(prev)) {
        return prev + operationSign;
      }

      return prev === "Invalid Math Operation" ? operationSign : prev + operationSign;

    });
  }

  const GenerateBtns = ({operationSign}) => {
    return (
      <button onClick={() => handleClick(operationSign)} className='btn'>{operationSign}</button>
    )
  }

  const handleEquation = () => {
    try {
      setCalculation(prev => {

        if (/\/0(?!\d)/.test(prev) || /[+\-*/]$/.test(prev)) {
          return "Invalid Math Operation"
        } 
        
        if (eval(prev) === Infinity || eval(prev) === -Infinity) {
          return "Invalid Math Operation";
        }

        return String(eval(prev));

      });
    } catch(err) {
      setCalculation("Invalid Math Operation");
      console.error(`Something went wrong: ${err}`);
    }
  }

  const handleClear = () => {
    setCalculation("");
  }

  return (
    <div>
      <div className='calculation-result'>
        <h2 className='calculation-display' style={{color: calculation === "Invalid Math Operation" ? "red" : "black"}}>{calculation}</h2>
      </div>

      <div className='operation-btns'>
        <GenerateBtns operationSign={"1"} />
        <GenerateBtns operationSign={"2"} />
        <GenerateBtns operationSign={"3"} />
        <GenerateBtns operationSign={"4"} />
        <GenerateBtns operationSign={"5"} />
        <GenerateBtns operationSign={"6"} />
        <GenerateBtns operationSign={"7"} />
        <GenerateBtns operationSign={"8"} />
        <GenerateBtns operationSign={"9"} />
        <GenerateBtns operationSign={"0"} />
        <GenerateBtns operationSign={"+"} />
        <GenerateBtns operationSign={"-"} />
        <GenerateBtns operationSign={"*"} />
        <GenerateBtns operationSign={"/"} />
        <button onClick={handleEquation} className='equalBtn'>=</button>
        <button onClick={handleClear} className='clearBtn'>C</button>
      </div>
    </div>
  )
}

export default Calculator