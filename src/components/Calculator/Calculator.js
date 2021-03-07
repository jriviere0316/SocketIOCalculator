import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./Calculator.css";

const io = require("socket.io-client");
const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

function Calculator(props) {
  const [equation, setEquation] = useState("");
  const [isParty, setIsParty] = useState(false);

  useEffect(() => {
    props.dispatch({
      type: "GET_EQUATIONS",
    });
  }, []);

  socket.on("socketEquation", () => {
    getEquations();
  });

  const getEquations = () => {
    props.dispatch({
      type: "GET_EQUATIONS",
    });
  };

  const handleChange = (event) => {
    setEquation(equation + event.target.value);
  };

  const clearScreen = () => {
    setEquation("");
  };

  const invertNumber = () => {
    const invertedNumber = Number(equation) * Number(-1);
    setEquation(invertedNumber);
  };

  const calculatePercentage = () => {
    const percentage = Number(equation) / 100;
    setEquation(percentage);
  };

  const submitEquation = () => {
    socket.emit("add_equation", equation);

    props.dispatch({
      type: "SEND_EQUATION",
      payload: equation,
    });
    setEquation("");
  };

  const partyMode = () => {
    setIsParty(!isParty);
    const audioEl = document.getElementsByClassName("audio-element")[0];
    if (audioEl.paused) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  };

  if (isParty === true) {
    document.body.style.animation = "partyColors infinite 2s linear";
  } else if (isParty === false) {
    document.body.style.animation = "";
  }

  return (
    <div className="calcContainer">
      {isParty === true ? (
        <>
          <img
            className="partyLogo left"
            alt="logo"
            src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_7a49b25a78d1a50285a6a37789b87072/sezzle.png"
          ></img>
          <img
            className="partyLogo right"
            alt="logo"
            src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_7a49b25a78d1a50285a6a37789b87072/sezzle.png"
          ></img>
        </>
      ) : (
        <></>
      )}

      <audio className="audio-element">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></source>
      </audio>

      <div className="calcBody">
        <div className="screen">
          <h1 className="screenText">{equation}</h1>
        </div>

        <table className="calcTable">
          <tbody className="calcButtons">
            <tr>
              <td>
                <button onClick={() => clearScreen()}>AC</button>
              </td>
              <td>
                <button onClick={() => invertNumber()}>+/-</button>
              </td>
              <td>
                <button onClick={(value) => calculatePercentage()}>%</button>
              </td>
              <td>
                <button value="/" onClick={(value) => handleChange(value)}>
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="7" onClick={(value) => handleChange(value)}>
                  7
                </button>
              </td>
              <td>
                <button value="8" onClick={(value) => handleChange(value)}>
                  8
                </button>
              </td>
              <td>
                <button value="9" onClick={(value) => handleChange(value)}>
                  9
                </button>
              </td>
              <td>
                <button value="*" onClick={(value) => handleChange(value)}>
                  X
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="4" onClick={(value) => handleChange(value)}>
                  4
                </button>
              </td>
              <td>
                <button value="5" onClick={(value) => handleChange(value)}>
                  5
                </button>
              </td>
              <td>
                <button value="6" onClick={(value) => handleChange(value)}>
                  6
                </button>
              </td>
              <td>
                <button value="-" onClick={(value) => handleChange(value)}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="1" onClick={(value) => handleChange(value)}>
                  1
                </button>
              </td>
              <td>
                <button value="2" onClick={(value) => handleChange(value)}>
                  2
                </button>
              </td>
              <td>
                <button value="3" onClick={(value) => handleChange(value)}>
                  3
                </button>
              </td>
              <td>
                <button value="+" onClick={(value) => handleChange(value)}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button value="0" onClick={(value) => handleChange(value)}>
                  0
                </button>
              </td>
              <td>
                <button onClick={() => partyMode()}>Party Mode</button>
              </td>
              <td>
                <button value="." onClick={(value) => handleChange(value)}>
                  .
                </button>
              </td>
              <td>
                <button value="=" onClick={(value) => submitEquation(value)}>
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <table className="centered">
        <thead>
          <tr>
            <td>
              <h2>PREVIOUS 10 CALCULATIONS</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {props.reduxStore.calculations.map((calculation) => (
            <tr key={calculation.id}>
              <td>{calculation.fullEquation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (reduxStore) => ({
  reduxStore,
});

export default connect(mapStateToProps)(Calculator);
