/* eslint-disable react/no-array-index-key */
import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

import Button from './Button';
import Display from './Display';

// Component styles
const styles = () => ({
  root: {
    height: '320px',
    width: '235px',
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,25%)',
    gridTemplateRows: '1fr 48px 48px 48px 48px 48px',
  },
});

const initialState = {
  stage: 'left',
  left: '',
  operator: '',
  right: '',
};

const calc = (leftStr, operator, rightStr) => {
  const left = parseInt(leftStr, 10);
  const right = parseInt(rightStr, 10);
  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '×':
      return left * right;
    case '÷':
      return left / right;
    default:
      return 0;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'number':
      return {
        ...state,
        [state.stage]: state[state.stage] + action.payload,
      };
    case 'operator':
      return {
        ...state,
        left: state.stage === 'right' ? calc(state.left, state.operator, state.right) : state.left,
        right: '',
        stage: 'right',
        operator: action.payload,
      };
    case 'calculate':
      return {
        stage: 'left',
        left: calc(state.left, state.operator, state.right),
        operator: '',
        right: '',
      };
    case 'clear':
      return initialState;
    default:
      return state;
  }
};

const Calculator = (props) => {
  const { classes } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classes.root}>
      <Display value={state.left + state.operator + state.right} />
      <Button label="AC" click={() => dispatch({ type: 'clear' })} triple />
      <Button label="/" click={e => dispatch({ type: 'operator', payload: e })} operation />
      <Button label="7" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="8" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="9" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="*" click={e => dispatch({ type: 'operator', payload: e })} operation />
      <Button label="4" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="5" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="6" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="-" click={e => dispatch({ type: 'operator', payload: e })} operation />
      <Button label="1" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="2" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="3" click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="+" click={e => dispatch({ type: 'operator', payload: e })} operation />
      <Button label="0" click={e => dispatch({ type: 'number', payload: e })} double />
      <Button label="." click={e => dispatch({ type: 'number', payload: e })} />
      <Button label="=" click={() => dispatch({ type: 'calculate' })} operation />
    </div>
  );
};

Calculator.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Calculator);
