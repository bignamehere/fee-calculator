//
//
import React, { Component } from 'react';

class CostTotal extends Component {
  render() {
    return (
      <div className="ds-box ds-box-condensed" id="costTotal">
        <div className="ds-box__content--lg ds-box__centered">${this.props.value}</div>
        <div className="ds-box__content--m ds-box__centered">{this.props.label}</div> 
      </div>
    );
  }
}

export default CostTotal;