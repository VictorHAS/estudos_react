import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

// Component styles
const styles = () => ({
  root: {},
  button: {
    fontSize: '1.4em',
    backgroundColor: '#f0f0f0',
    border: 'none',
    borderRight: 'solid 1px #888',
    borderBottom: 'solid 1px #888',
    outline: 'none',
    '&:active': {
      backgroundColor: '#ccc',
    },
  },
  double: {
    gridColumn: 'span 2',
  },
  triple: {
    gridColumn: 'span 3',
  },
  operation: {
    backgroundColor: '#fa8231',
    color: '#fff',
    '&:active': {
      backgroundColor: '#fa8231cc',
    },
  },
});

const Button = (props) => {
  const {
    classes, label, operation, double, triple, click,
  } = props;

  let classname = classes.button;
  classname += operation ? ` ${classes.operation}` : '';
  classname += double ? ` ${classes.double}` : '';
  classname += triple ? ` ${classes.triple}` : '';

  return (
    <button className={classname} onClick={() => click && click(label)} type="button">
      {label}
    </button>
  );
};

export default withStyles(styles)(Button);

Button.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  operation: PropTypes.bool,
  double: PropTypes.bool,
  triple: PropTypes.bool,
  click: PropTypes.func.isRequired,
};
