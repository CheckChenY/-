import React,{ Component} from 'react';
import intl from 'react-intl-universal';
import { Tabs } from 'antd';

import { connect } from 'react-redux';
import { 
    getHKNews,
    getHKDetail,
    // stopGetNews 
} from './action';
import Tools from '../corn/tools';


import Newsone from './Newsone'
import Newstwo from './Newstwo'
import Newsthree from './Newsthree'

import Newsonebody from './Newsonebody'
// import Newstwobody from './Newstwobody'
import Newsthreebody from './Newsthreebody'


import Index from '../header/Index'
import HKMarketStock from '../hkmarket/HKmarketstock';
import HKmarket from '../hkmarket/HKmarket';
import './index.css'


const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}


class MyInformation extends Component{
    onScrollHandle(event) {
        if(event.scrollDom === null){
            return false
        }
        const self = this,
        { 
            getHKNews ,
            state,
        } = self.props,
        { 
            currentPage ,
            numPage,
        } = state;

        // console.log(document.documentElement.scrollTop)
        // console.log(document.documentElement.clientHeight)
        // console.log(event.scrollDom.clientHeight)
    
    
        const clientHeight = event.scrollDom.clientHeight + 107;
        // const scrollHeight = event.scrollDom.scrollHeight
        // const scrollTop = event.scrollDom.scrollTop
    
        const scrollHeight = document.documentElement.scrollTop;
        const scrollTop = document.documentElement.clientHeight;
    
        const isBottom = (scrollHeight + scrollTop === clientHeight);
        const step = Tools.getFromUrlParam('key') || '';

        if( numPage < currentPage ){
            // stopGetNews()
            return false;
        }else{
            if(isBottom){
                // if(stop){
                    console.log('is bottom:' + isBottom)
                    getHKNews(step,'',currentPage,false);
                // }
            }
        } 
    }


    componentDidMount() {
        const self = this,
        { getHKNews } = self.props;
        const step = Tools.getFromUrlParam('key') || '';
        getHKNews(step,'',1,true);


        // let _this = this;
        window.addEventListener('scroll', () =>
        self.onScrollHandle(self)
        )
    }
    
    // componentWillUnmount() {
    //     const _this = this;
    //     alert(123);
    //     if (this.scrollDom) {
    //         window.removeEventListener('scroll', () =>
    //             _this.onScrollHandle(_this)
    //         );
    //     }
    // }


    render() {
        const self = this,
        { props } = self,
        { state } = props,
        { infoListPage,dataListDetail,stockCodeList } = state;

        // { state } = props,
        // { newsListArry=[] } = state;


        return (
            <div>
                <Index bShowSearch={true}/>
                {/* <hr style={{border: 'solid 1px #dadada', minWidth:'1000px'}}/> */}
                <div className="page-all">
                    <div ref={body=>self.scrollDom = body} className="title">
                        <Tabs defaultActiveKey="1" onChange={callback}>
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
                                {/* <div className="title-two"><Newstwobody /></div> */}
                                { dataListDetail ? <HKMarketStock /> : <HKmarket 
                                stockCodeList={stockCodeList}
                                /> }
                                
                                {/* <HKmarket /> */}
                            </TabPane>
                            <TabPane 
                                tab={<div><span className="title-stock-three">{intl.get('hot_issues')}</span></div>}
                                key="3"
                            >
                                <div className="title-three"><Newsthree /></div>
                                <div className="title-three"><Newsthreebody  { ...props } /></div>
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
    getHKNews,
    getHKDetail,
    // stopGetNews
})(MyInformation);
  
// export default MyInformation;

