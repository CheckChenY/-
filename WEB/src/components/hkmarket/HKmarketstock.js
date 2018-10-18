
import React,{ Component} from 'react';
import intl from 'react-intl-universal';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import { 
    getHKMarketstockList,
    getHKMarketstockListSelf,
} from './action';


import './HKmarketstock.css';
import HKMarketStockList from './HKmarketstocklist';
import HKmarketstocklistSelf from './HKmarketstocklistSelf';


const { TabPane } = Tabs;

class HKMarketStock extends Component{
    render(){
        const self = this,
        { state } = self.props,
        { tabKey='1' } = state;
        return (
            <div>
                <div style={{height:'10px'}}></div>
                <div className='HKmarket-stock' >
                    <Tabs 
                    defaultActiveKey={tabKey} 
                    type="card" 
                    className='HKmarket-stock-tab'> 
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
                        <TabPane 
                            tab={<span>{intl.get('choice_mine')}</span>} 
                            key="2"
                            >
                            <HKmarketstocklistSelf/>
                        </TabPane>
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
    getHKMarketstockList,
    getHKMarketstockListSelf,
})(HKMarketStock);
// export default HKMarketStock;
