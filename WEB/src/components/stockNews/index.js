import React,{ Component} from 'react';
import intl from 'react-intl-universal';
import { Tabs } from 'antd';

import { connect } from 'react-redux';
import { 
    getHKDetail,
} from './action';
// import Tools from '../corn/tools';
import HeaderVister from '../header/Header';//访客头部按钮

import Newsone from './Newsone'
import Newstwo from './Newstwo'
import Newsthree from './Newsthree'

import Newsonebody from './Newsonebody'
// import Newstwobody from './Newstwobody'
import Newsthreebody from './Newsthreebody'
// import Newsthreebodynone from './Newsthreebodynone'


import Index from '../header/Index'
import HKMarketStock from '../hkmarket/HKmarketstock';
import HKmarket from '../hkmarket/HKmarket';
import './index.css'


const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}


class MyInformation extends Component{
    render() {
        const self = this,
        { props } = self,
        { state } = props,
        { 
            infoListPage,
            dataListDetail,
            stockCodeList ,
            numPageIsseuTotal,
            userId
        } = state;
        return (
            <div>
                {userId===null? <HeaderVister /> : <Index {...props} bShowSearch={true}/>}
                <div className="page-all">
                    <div className="title">
                        <Tabs defaultActiveKey="1" onChange={callback} type="card" className='page-all-tab'>
                            <TabPane 
                                tab={<div><span className="title-stock-one">{intl.get('HKstocks_information')}</span></div>}
                                key="1"
                                
                            >   
                                <div className="title-one"><Newsone infoListPage = {infoListPage} /></div>
                                <div className="title-one">
                                    <Newsonebody 
                                        { ...props } 
                                    />
                                </div>
                            </TabPane>
                            <TabPane
                                tab={<div><span className="title-stock-two">{intl.get('HKstocks_quotes')}</span></div>} 
                                key="2"
                                
                            >
                                <div className="title-two"><Newstwo /></div>
                                { dataListDetail ? <HKMarketStock /> : <HKmarket 
                                    stockCodeList={stockCodeList}
                                /> }
                            </TabPane>
                            <TabPane 
                                tab={<div><span className="title-stock-three">{intl.get('hot_issues')}</span></div>}
                                key="3"
                            >
                                <div className="title-three"><Newsthree numPageIsseuTotal={numPageIsseuTotal} /></div>
                                <div className="title-three"><Newsthreebody  { ...props } /></div>
                                {/* <div className="title-three"><Newsthreebodynone/></div> */}
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKDetail,
})(MyInformation);
  
// export default MyInformation;

