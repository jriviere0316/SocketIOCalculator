import React, { useState } from "react";
import { connect } from "react-redux";
import "./Calculator.css";

function Calculator(props) {
  return (
    <div>
      <div className="calcBody">
        <div className="screen"></div>

        <table className="calcTable">
          <tbody className="calcButtons">
            <tr>
              <td>
                <button>AC</button>
              </td>
              <td>
                <button>+/-</button>
              </td>
              <td>
                <button>%</button>
              </td>
              <td>
                <button>/</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>7</button>
              </td>
              <td>
                <button>8</button>
              </td>
              <td>
                <button>9</button>
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>4</button>
              </td>
              <td>
                <button>5</button>
              </td>
              <td>
                <button>6</button>
              </td>
              <td>
                <button>-</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>1</button>
              </td>
              <td>
                <button>2</button>
              </td>
              <td>
                <button>3</button>
              </td>
              <td>
                <button>+</button>
              </td>
            </tr>
            <tr>
              <td>
                <button>0</button>
              </td>
              <td>
                <button>Party</button>
              </td>
              <td>
                <button>.</button>
              </td>
              <td>
                <button>=</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default connect()(Calculator);
