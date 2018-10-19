
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import Tools from '../corn/tools';
import { 
    backList
} from './action';
import { Tabs, Button } from 'antd';

import BasicInformation from './Basicinformation'
// import CompanyAnnouncements from './Companyannouncements'
import GrowthAbility from './Growthability'
import Slcapitalstructure from './Slcapitalstructure'
import Slprofitstatement from './Slprofitstatement'
import Slstockoverview from './Slstockoverview'
import ValuationAnalysis from './Valuationanalysis';


import './HKmarket.css';
import moment from 'moment';

import imgUrl from '../assient/information.png'; 


const { TabPane } = Tabs;

// const operations =  <div className='HKmarket-company-information'>
//                         <div className='HKmarket-company-information-name'>CEC INT'L HOLD</div>
//                         <div className='HKmarket-company-information-code'>00759.HK单位：港元(2018-08-20 11:24:52)</div>
//                     </div>;




class HKMarket extends Component{
    constructor(props){
        super(props);
        this.state = {
            currenttime:'2018-08-20 11:24:52'
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>this.tick(), 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick() {
        this.setState({
            currenttime:moment().format('YYYY-MM-DD HH:mm:ss')
        })
    }

    render(){
        const self = this,
        { state, props } = self,
        { currenttime } = state,
        { state:selfState, stockCodeList,backList } = props,
        { getStockList } = selfState;
        const title = Tools.getFromUrlParam('title') || '';
        console.log(getStockList) 
        return (
            <div>
                <div> 
                    <img alt='修改成功' style={{width:'16px',height:'16px', verticalAlign:'top', marginTop:'8px'}} src={imgUrl} />                   
                    <Button 
                    className='HKmarket-button'
                    onClick={
                        backList
                    }
                    >{intl.get('HKstocks_quotes')}</Button>
                    <span style={{margin:'0 4px'}}>{'>'}</span>
                    <span className='HKmarket-company'>{getStockList?getStockList.name:'CEC INT\'L HOLD'}</span>
                </div>
                <div className='HKmarket' >
                    <Tabs 
                        className='HKmarket-tab' 
                        type='card' 
                        defaultActiveKey="1" 
                        // tabBarExtraContent={operations} 
                        tabPosition='top'
                        tabBarExtraContent={    <div className='HKmarket-company-information'>
                                                    <div className='HKmarket-company-information-name'>{getStockList?getStockList.name:'CEC INT\'L HOLD'}</div>
                                                    <div className='HKmarket-company-information-code'>{getStockList?(getStockList.stockCode+'.HK单位：港元('+ currenttime +')'):'00759.HK单位：港元(2018-08-20 11:24:52)'}</div>
                                                </div>
                                            } 
                    >
                        <TabPane tab={<span className='HKmarket-tab'>{intl.get('stock_overview')}</span>} key="1">
                            <Slstockoverview stockCodeList = {stockCodeList === undefined ? title : stockCodeList } />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'>{intl.get('basic_information')}</span>} key="2">
                            <BasicInformation stockCodeList = {stockCodeList}/>
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'>{intl.get('equity_structure')}</span>} key="3">
                            <Slcapitalstructure stockCodeList = {stockCodeList} />

                        </TabPane>
                        <TabPane tab= {<span className='HKmarket-tab'>{intl.get('valuation_analysis')}</span>} key="4">
                            <ValuationAnalysis stockCodeList = {stockCodeList} />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'>{intl.get('growth_ability')}</span>} key="5">
                            <GrowthAbility stockCodeList = {stockCodeList} />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'>{intl.get('income_statement')}</span>} key="6">
                            <Slprofitstatement stockCodeList = {stockCodeList} />
                        </TabPane>
                        {/* <TabPane tab={<span className='HKmarket-tab'> 公司公告 {intl.get('company_announcement')}</span>} key="7">
                            <CompanyAnnouncements/>
                        </TabPane> */}
                    </Tabs>
                </div>
            </div>
        )
    } 
}

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    backList
})(HKMarket);

// export default HKMarket;
