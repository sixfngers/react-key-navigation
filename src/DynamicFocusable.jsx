import React, { Component } from 'react';
import VerticalList from './VerticalList';
import PropTypes from 'prop-types';

class DynamicFocusable extends React.Component {
  render() {
    return (
      <VerticalList>
        {this.props.condition ? this.props.render : null}
      </VerticalList>
    );
  }
}

DynamicFocusable.defaultProps = {
  condition: true,
  render: null
};

export default DynamicFocusable;
