
import React,{ Component} from 'react';
import { connect } from 'react-redux';
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

import imgUrl from '../assient/information.png'; 


const { TabPane } = Tabs;

const operations =  <div className='HKmarket-company-information'>
                        <div className='HKmarket-company-information-name'>CEC INT'L HOLD</div>
                        <div className='HKmarket-company-information-code'>00759.HK单位：港元(2018-08-20 11:24:52)</div>
                    </div>;



class HKMarket extends Component{

    render(){
        const self = this,
        { stockCodeList,backList } = self.props;
        return (
            <div>
                <div> 
                    <img alt='修改成功' style={{width:'16px',height:'16px', verticalAlign:'top', marginTop:'8px'}} src={imgUrl} />                   
                    <Button 
                    className='HKmarket-button'
                    onClick={
                        backList
                    }
                    >港股行情</Button>
                    <span style={{margin:'0 4px'}}>{'>'}</span>
                    <span className='HKmarket-company'>{'CEC INT\'L HOLD'}</span>
                </div>
                <div className='HKmarket' >
                    <Tabs size='small' defaultActiveKey="1" tabBarExtraContent={operations} tabPosition='top'>
                        <TabPane tab={<span className='HKmarket-tab'> 股票总览 </span>} key="1">
                            <Slstockoverview />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 基本资料 </span>} key="2">
                            <BasicInformation stockCodeList = {stockCodeList}/>
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 股本结构 </span>} key="3">
                            <Slcapitalstructure stockCodeList = {stockCodeList} />
                        </TabPane>
                        <TabPane tab= {<span className='HKmarket-tab'> 估值分析 </span>} key="4">
                            <ValuationAnalysis stockCodeList = {stockCodeList} />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 成长能力 </span>} key="5">
                            <GrowthAbility stockCodeList = {stockCodeList} />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 利润表 </span>} key="6">
                            <Slprofitstatement stockCodeList = {stockCodeList} />
                        </TabPane>
                        {/* <TabPane tab={<span className='HKmarket-tab'> 公司公告 </span>} key="7">
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
