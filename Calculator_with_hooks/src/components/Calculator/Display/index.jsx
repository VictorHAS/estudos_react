import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';

// Component styles
const styles = () => ({
  root: {
    gridColumn: 'span 4',
    backgroundColor: '#0004',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '20px',
    fontSize: '2.1em',
    overflow: 'hidden',
  },
});
const Display = (props) => {
  const { classes, value } = props;
  return <div className={classes.root}>{value}</div>;
};

export default withStyles(styles)(Display);

Display.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  value: PropTypes.string.isRequired,
};
