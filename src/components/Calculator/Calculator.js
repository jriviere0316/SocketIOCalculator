import React, { useState } from "react";
import { connect } from "react-redux";
import "./Calculator.css";

function Calculator(props) {

    const [equation, setEquation] = useState('');

    const handleChange = (event) => {
        setEquation(equation + 
            event.target.value
        )
    }

    const clearScreen = () => {
        console.log('in clear screen');
        setEquation(''
        )
    }

    const invertNumber = () => {
        console.log('in invert number');
    }

    const calculatePercentage = () => {
        console.log('in calculate percentage');
    }

    const submitEquation = () => {
        console.log('in submit equation');
        
    }
  return (
    <div>
      <div className="calcBody">
        <div className="screen">
        {equation}
        </div>

        <table className="calcTable">
          <tbody className="calcButtons">
            <tr>
              <td>
                <button onClick={()=>clearScreen()}>AC</button>
              </td>
              <td>
                <button onClick={()=>invertNumber()}>+/-</button>
              </td>
              <td>
                <button onClick={(value)=>calculatePercentage()}>%</button>
              </td>
              <td>
                <button value="%" onClick={(value)=>handleChange(value)}>/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="7" onClick={(value)=>handleChange(value)}>7</button>
              </td>
              <td>
                <button value="8" onClick={(value)=>handleChange(value)}>8</button>
              </td>
              <td>
                <button value="9" onClick={(value)=>handleChange(value)}>9</button>
              </td>
              <td>
                <button value="*" onClick={(value)=>handleChange(value)}>X</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="4" onClick={(value)=>handleChange(value)}>4</button>
              </td>
              <td>
                <button value="5" onClick={(value)=>handleChange(value)}>5</button>
              </td>
              <td>
                <button value="6" onClick={(value)=>handleChange(value)}>6</button>
              </td>
              <td>
                <button value="-" onClick={(value)=>handleChange(value)}>-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="1" onClick={(value)=>handleChange(value)}>1</button>
              </td>
              <td>
                <button value="2" onClick={(value)=>handleChange(value)}>2</button>
              </td>
              <td>
                <button value="3" onClick={(value)=>handleChange(value)}>3</button>
              </td>
              <td>
                <button value="+" onClick={(value)=>handleChange(value)}>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="0" onClick={(value)=>handleChange(value)}>0</button>
              </td>
              <td>
                <button onClick={(value)=>handleChange(value)}>Party</button>
              </td>
              <td>
                <button value="." onClick={(value)=>handleChange(value)}>.</button>
              </td>
              <td>
                <button onClick={()=>submitEquation()}>=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="centered">
        <thead>
          <tr>
            <td><h1>PREVIOUS CALCULATIONS</h1></td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

    </div>
  );
}

export default connect()(Calculator);
