
import React,{ Component} from 'react';

import { Tabs } from 'antd';

import BasicInformation from './Basicinformation'
import CompanyAnnouncements from './Companyannouncements'
import GrowthAbility from './Growthability'
import Slcapitalstructure from './Slcapitalstructure'
import Slprofitstatement from './Slprofitstatement'
import ValuationAnalysis from './Valuationanalysis';


import './HKmarket.css';


const { TabPane } = Tabs;

class HKMarket extends Component{

    render(){
        return (
            <div>
                <div className='HKmarket' >
                    <Tabs defaultActiveKey="1" type="card">
                        <TabPane 
                            tab={
                                <span>
                                    <div className='HKmarket-company-information'>
                                        <div className='HKmarket-company-information-name'>CEC INT'L HOLD</div>
                                        <div className='HKmarket-company-information-code'>00759.HK单位：港元(2018-08-20 11:24:52)</div>
                                    </div>
                                    <span style={{marginLeft:'30px'}} className='HKmarket-tab'> 股票总览 </span>
                                </span>
                            }
                            
                            
                            key="1"
                        >
                            Content of tab 1
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 基本资料 </span>} key="2">
                            <BasicInformation/>
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 股本结构 </span>} key="3">
                            <Slcapitalstructure />
                        </TabPane>
                        <TabPane tab= {<span className='HKmarket-tab'> 估值分析 </span>} key="4">
                            <ValuationAnalysis/>
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 成长能力 </span>} key="5">
                            <GrowthAbility/>
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 利润表 </span>} key="6">
                            <Slprofitstatement />
                        </TabPane>
                        <TabPane tab={<span className='HKmarket-tab'> 公司公告 </span>} key="7">
                            <CompanyAnnouncements/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    } 
}

export default HKMarket;
