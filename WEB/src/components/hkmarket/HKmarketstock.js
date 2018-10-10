
import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import { Tabs } from 'antd';

import './HKmarketstock.css';
import HKMarketStockList from './HKmarketstocklist';


const { TabPane } = Tabs;

class HKMarketStock extends Component{

    render(){
        return (
            <div>
                <div className='HKmarket-stock' >
                    <Tabs defaultActiveKey="1" >
                        <TabPane 
                            tab={<span>{intl.get('all')}</span>}
                            key="1"
                        >
                            <HKMarketStockList/>
                        </TabPane>
                        {/* <TabPane tab={<span>{intl.get('HKstocks_motherboard')}</span>} key="2">
                            <HKMarketStockList/>
                        </TabPane>
                        <TabPane tab={<span>{intl.get('HKstocks_gem')}</span>} key="3">
                            <HKMarketStockList/>
                        </TabPane>
                        <TabPane tab= {<span>{intl.get('HKstocks_hot')}</span>} key="4">
                            <HKMarketStockList/>
                        </TabPane>
                        <TabPane tab={<span>{intl.get('blue_chip')}</span>} key="5">
                            <HKMarketStockList/>
                        </TabPane>
                        <TabPane tab={<span>{intl.get('red_chip')}</span>} key="6">
                            <HKMarketStockList/>
                        </TabPane>
                        <TabPane tab={<span>{intl.get('stateowned_shares')}</span>} key="7">
                            <HKMarketStockList/>
                        </TabPane> */}
                        <TabPane tab={<span>{intl.get('choice_mine')}</span>} key="8">
                            <HKMarketStockList/>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    } 
}

export default HKMarketStock;
