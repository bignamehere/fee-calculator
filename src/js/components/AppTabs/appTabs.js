//
//
import React, { Component } from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import InkTabBar from 'rc-tabs/lib/InkTabBar';
import './appTabs.scss';
// Views
import Consultation from '../../views/Consultation/consultation';
import Payment from '../../views/Payment/payment';
//import Savings from '../../views/Savings/savings';

class AppTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investment: 0,
      paymentDisabled: true
    };
    this.handleInvestmentChange = this.handleInvestmentChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  componentDidMount(){
    console.log('CWM - appsTabs');
    let data = {
      treatmentCostLabel: 'Treatment Cost',
      requiredLabel: 'Required',
      insuranceCoverageLabel: 'Insurance Coverage',
      additionalSavingsLabel: 'Additional Savings',
      updateSettingsLabel: 'Update Settings',
      adjustPaymentsLabel: 'Adjust Payments',
      yourTotalInvestmentLabel: 'Your Total Investment'
    };
    if(this.refs.consultationTab) this.refs.consultationTab.setText(data);

  }

  handleContinue(v){
    this.refs.appTabs.setActiveKey( v.toString() );
  }

  handleInvestmentChange(e){
    this.setState({
      investment: e.investment
    });
    this.resetAmount(e.investment);
  }

  resetAmount(amount){
    this.setState({
      paymentDisabled: false,
      investment: amount
    });
    if(this.refs.paymentTab) this.refs.paymentTab.onInvestmentChange(amount);
  }

	render() {

    //const { paymentPane } = this.state;
    return (
      <Tabs
        ref="appTabs"
        defaultActiveKey="1"
        renderTabBar={() => <InkTabBar ref="inktab" onTabClick={this.onTabClick}/>}
        renderTabContent={() => <TabContent/>}
        //onChange={this.handleTabChange}
      >
        <TabPane tab={'Treatment Fee'} key="1">
          <Consultation ref='consultationTab' onContinue={this.handleContinue} onChange={this.handleInvestmentChange} />
        </TabPane>
        <TabPane tab={'Payment Options'} key="2" disabled={this.state.paymentDisabled}>
          <Payment ref="paymentTab" investment={ this.state.investment } />
        </TabPane>
        
      </Tabs>
		);
	}
}

export default AppTabs;