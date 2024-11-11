// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearDisplay,
  appendNumber,
  appendOperator,
  appendDecimal,
  calculateResult,
} from './redux/store/calculatorSlice';
import './App.css';

function App() {
  const display = useSelector((state) => state.calculator.display);
  const dispatch = useDispatch();

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <button id="clear" onClick={() => dispatch(clearDisplay())}>AC</button>
      <button id="divide" onClick={() => dispatch(appendOperator('/'))}>/</button>
      <button id="multiply" onClick={() => dispatch(appendOperator('*'))}>*</button>
      <button id="subtract" onClick={() => dispatch(appendOperator('-'))}>-</button>
      <button id="seven" onClick={() => dispatch(appendNumber('7'))}>7</button>
      <button id="eight" onClick={() => dispatch(appendNumber('8'))}>8</button>
      <button id="nine" onClick={() => dispatch(appendNumber('9'))}>9</button>
      <button id="add" onClick={() => dispatch(appendOperator('+'))}>+</button>
      <button id="four" onClick={() => dispatch(appendNumber('4'))}>4</button>
      <button id="five" onClick={() => dispatch(appendNumber('5'))}>5</button>
      <button id="six" onClick={() => dispatch(appendNumber('6'))}>6</button>
      <button id="decimal" onClick={() => dispatch(appendDecimal())}>.</button>
      <button id="one" onClick={() => dispatch(appendNumber('1'))}>1</button>
      <button id="two" onClick={() => dispatch(appendNumber('2'))}>2</button>
      <button id="three" onClick={() => dispatch(appendNumber('3'))}>3</button>
      <button id="equals" onClick={() => dispatch(calculateResult())}>=</button>
      <button id="zero" onClick={() => dispatch(appendNumber('0'))}>0</button>
    </div>
  );
}

export default App;
