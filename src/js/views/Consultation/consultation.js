//
//
import React, { Component } from 'react';
import './consultation.scss';

class Consultation extends Component {
  constructor(props){
    super(props);
    this.state = {
      investment: 0
    };
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
    this.handleContinueClick = this.handleContinueClick.bind(this);
    this.setText = this.setText.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  // NOT IN USE
  // add " onBlur={this.handleBlur} " to input
  handleBlur(e){
    let total = this.getInvestment();
    this.setState({
      investment: total
    });
  }

  handleUpdateClick(e){
    let total = this.getInvestment();
    this.setState({
      investment: total
    });
    if (this.props.onChange) this.props.onChange( {investment: total } );
  }

  handleContinueClick(e){
    let total = this.getInvestment();
    this.setState({
      investment: total
    });
    if (this.props.onContinue) this.props.onContinue( 2 );
    
  }

  setText(data){
    this.setState({
      treatmentCostLabel: data.treatmentCostLabel,
      requiredLabel: data.requiredLabel,
      insuranceCoverageLabel: data.insuranceCoverageLabel,
      additionalSavingsLabel: data.additionalSavingsLabel,
      updateSettingsLabel: data.updateSettingsLabel,
      adjustPaymentsLabel: data.adjustPaymentsLabel,
      yourTotalInvestmentLabel: data.yourTotalInvestmentLabel
    });
  }

  getInvestment(){

    let initialCost = document.getElementById('initialCost').value <= 0 ? 0 : parseInt(document.getElementById('initialCost').value, 10); 
    let insurance = document.getElementById('insurance').value  <= 0 ? 0 : parseInt(document.getElementById('insurance').value, 10);
    let discounts = document.getElementById('discounts').value <= 0 ? 0 : parseInt(document.getElementById('discounts').value, 10);

    console.log("consultation.js - getInvestment() " + initialCost + " " + insurance + " " + discounts );
    let total = isNaN(initialCost - (insurance + discounts)) ? "" : initialCost - (insurance + discounts);
    return total;
  }


	render(){
    return (
      <div className="consultation-container">
        <div className="ds-section">
          <div className="ds-section__bd">
            {/*<h1 className="rc-tab-panel__header">Initial Consultation Settings</h1>*/}
            <div className="ds-grid">
              <div className="ds-grid__1/1 ds-grid__1/2@m">
                <div className="ds-grid">
                  <div className="ds-grid__1/1">
                    <div className="ds-field">
                      <label className="ds-field__label" htmlFor="initialCost">{this.state.treatmentCostLabel} <span className="ds-field__label-desc">{this.state.requiredLabel}</span></label>
                      <input className="ds-input ds-field__item" id="initialCost" name="initialCost" type="number" placeholder="$" value={this.state.initialCost}/>
                    </div>
                  
                    <div className="ds-field">
                      <label className="ds-field__label" htmlFor="insurance">{this.state.insuranceCoverageLabel} </label>
                      <input className="ds-input ds-field__item" id="insurance" name="insurance" type="number" placeholder="$" value={this.state.insurance}/>
                    </div>
                  
                    <div className="ds-field">
                      <label className="ds-field__label" htmlFor="discounts">{this.state.additionalSavingsLabel} </label>
                      <input className="ds-input ds-field__item" id="discounts" name="discounts" type="number" placeholder="$" value={this.state.discounts}/>
                    </div>
                  </div>
                  <div className="ds-grid__1/2 ds-grid__1/2@m">
                    <div className="btn btn-show">
                      <button onClick={this.handleUpdateClick} className="ds-btn ds-btn--secondary" type="button">{this.state.updateSettingsLabel}</button>
                    </div>
                  </div>
                  <div className="ds-grid__1/2 ds-grid__1/2@m">
                    <div className="btn btn-rt btn-hide">
                      <button onClick={this.handleContinueClick} className="ds-btn ds-btn--secondary" type="button">{this.state.adjustPaymentsLabel}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ds-grid__1/1 ds-grid__1/2@m">
                <div className="rc-tab-display-lg">
                  <div className="ds-box">
                    <h3 className="ds-box__title">{this.state.yourTotalInvestmentLabel}</h3>
                    {/*<p>Your initial investment for Orthodontic Braces is valued at:</p>*/}
                    <span className="ds-box__content--xlg">${this.state.investment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Consultation;