import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display: '0',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    clearDisplay(state) {
      state.display = '0';
    },
    appendNumber(state, action) {
      state.display = state.display === '0' ? action.payload : state.display + action.payload;
    },
appendOperator(state, action) {
  const lastCharacter = state.display.slice(-1);
  const secondLastCharacter = state.display.slice(-2, -1);
  const isLastOperator = ['+', '-', '*', '/'].includes(lastCharacter);
  const isSecondLastOperator = ['+', '-', '*', '/'].includes(secondLastCharacter);

  if (isLastOperator) {
    if (isSecondLastOperator) {
      state.display = state.display.slice(0, -2) + action.payload;
    } else if (action.payload !== '-') {
      state.display = state.display.slice(0, -1) + action.payload;
    } else {
      state.display += action.payload;
    }
  } else {
    state.display += action.payload;
  }
},

calculateResult(state) {
  try {
    const result = Function(`'use strict'; return (${state.display})`)();
    state.display = result.toString();
  } catch (error) {
    state.display = "Error";
  }
}

  ,
    appendDecimal(state) {
      const lastNumber = state.display.split(/[\+\-\*\/]/).pop();
      if (!lastNumber.includes('.')) {
        state.display += '.';
      }
    },
    calculateResult(state) {
      try {
        const result = eval(state.display.replace(/--/g, '+'));
        state.display = parseFloat(result.toFixed(4)).toString();
      } catch {
        state.display = 'Erro';
      }
    },
  },
});

export const { clearDisplay, appendNumber, appendOperator, appendDecimal, calculateResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;
