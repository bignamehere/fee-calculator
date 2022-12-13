//
//
import React, { Component } from 'react';

class Savings extends Component {
  constructor(props){
    super(props);
    this.state = {
      appData: {}
    };
  }

	render() {
    return (
      <div className={"ds-section"}>
        <div className={"ds-section__bd"}>
          <h1>How much could you save?</h1>
          <div className={"ds-grid"}>
            <div className={"ds-grid__1 ds-grid__1/2@m"}>
              <p>
                <div className={"ds-box"}>
                  <h1>First Label</h1>
                  <h1>$150</h1>
                </div>
              </p>
              <p>
                <div className={"ds-box"}>
                  <h1>Second Label</h1>
                  <h1>$800</h1>
                </div>
              </p>
            </div>
            <div className={"ds-grid__1 ds-grid__1/2@m"}>
              <p>
                <div className={"ds-box"}>
                  <h1>Third Label</h1>
                  <h1>$50 a month</h1>
                </div>
              </p>
              <p>
                <div className={"ds-box"}>
                  <h1>Fourth Label</h1>
                  <h1>$2750</h1>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Savings;