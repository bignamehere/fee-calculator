//
//
import React, { Component } from 'react';

class MonthsTotal extends Component {
  render() {
    return (
      <div className="card-box card-box-condensed">
        <div className="card-box__content--lg card-box__centered">{this.props.value}</div>
        <div className="card-box__content--m card-box__centered">{this.props.label}</div> 
      </div>
    );
  }
}

export default MonthsTotal;