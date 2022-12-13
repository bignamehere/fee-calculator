//
//
import React, { Component } from 'react';

class MonthsTotal extends Component {
  render() {
    return (
      <div className="ds-box ds-box-condensed" id="monthsTotal">
        <div className="ds-box__content--lg ds-box__centered">{this.props.value}</div>
        <div className="ds-box__content--m ds-box__centered">{this.props.label}</div> 
      </div>
    );
  }
}

export default MonthsTotal;