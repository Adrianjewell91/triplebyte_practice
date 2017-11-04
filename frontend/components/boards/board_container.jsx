import React from 'react';
import {connect} from 'react-redux';

import Board from './board';

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.entities.tasks)
  };
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
