import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

// Component styles
const styles = () => ({
  root: {
    height: '320px',
    width: '235px',
    borderRadius: '5px',
    overflow: 'hidden',
    backgroundColor: 'red',
  },
});

const Calculator = (props) => {
  const { classes } = props;

  return <div className={classes.root} />;
};

Calculator.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(Calculator);
