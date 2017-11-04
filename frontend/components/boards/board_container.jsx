import React from 'react';
import {connect} from 'react-redux';

import Board from './board';

const mapStateToProps = state => {
  return {
    tasks: state.entities.tasks.byTitle
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
