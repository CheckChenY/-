import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { 
    getInfoStock,
    getImageStock,
    getHKMarketstockListSelf,
    backList,
    setSelfCodeView
} from './action';
import {Button , Row, Col} from 'antd';
// import { Tabs } from 'antd';
import intl from 'react-intl-universal';


import './Slstockoverview.css'
// import imgoneURL from '../assient/stockcc.jpg';
import imgtwoURL from '../assient/stockdd.jpg';
import imgoneURL from '../assient/stockNews/arrow.png';

// const TabPane = Tabs.TabPane;

// function callback(key) {
//   console.log(key);
// }

class Slstockoverview extends Component{
    
    componentWillMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    componentDidMount(){
        const self = this,
        { getInfoStock,
            stockCodeList,
            getImageStock,
            getHKMarketstockListSelf,
            state } = self.props,
        { stock_code } = stockCodeList,
        { userAccount } = state;
            if(stock_code === undefined){
                if(stockCodeList === ''){
                    getInfoStock('00010');
                    getImageStock('00010');
                }else{
                    getInfoStock(stockCodeList);
                    getImageStock(stockCodeList);
                }
            }else{
                getInfoStock(stock_code);
                getImageStock(stock_code);
            }
        getHKMarketstockListSelf(1,userAccount);
        // 增加定时器
        this.interval = setInterval(()=>this.tick(), 30000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick() {
        const self = this,
        { stockCodeList ,getInfoStock,getImageStock} = self.props,
        { stock_code } = stockCodeList;

        if(stock_code === undefined){
            if(stockCodeList === ''){
                getInfoStock('00010');
                getImageStock('00010');
            }else{
                getInfoStock(stockCodeList);
                getImageStock(stockCodeList);
            }
        }else{
            getInfoStock(stock_code);
            getImageStock(stock_code);
        }
    }

    render() {
        const self = this,
        { state,backList,setSelfCodeView } = self.props,
        { 
            getStockList,
            getStockImg ,
            hkmarketstocklistSelf=[],
            current,
            userAccount,
            code,
        } = state;
        let stockCode;
        if(getStockList){
            stockCode = getStockList.stockCode
        }
        return (
            <div style={{borderTop:'solid 1px #ebeef1'}}>
                <div className="stockoverview-top" >
                    <span className="stockoverview-top-left">
                        <div style={{marginTop:'16px', textAlign:'center'}}>
                            <span className="stockoverview-top-left-one">{getStockList?getStockList.top:'0.870'}</span>
                            <img alt='aaa' src={imgoneURL} style={{height:'34px', weight:'18px', verticalAlign:'top', margin:'8px 0 0 8px'}}/>
                        </div>                        
                        <div style={{ marginTop:'10px', textAlign:'center'}}>
                            <Row>
                                <Col span={12}>
                                    <span className="stockoverview-top-left-two">{getStockList?((parseFloat(getStockList.left)>0?'+':'') + getStockList.left):'+0.405'}</span>
                                </Col>
                                <Col span={12}>
                                    <span className="stockoverview-top-left-two">{getStockList?((parseFloat(getStockList.right)>0?'+':'') + getStockList.right):'+87.10%'}</span>
                                </Col>
                            </Row>
                        </div>
                        <div className="stockoverview-top-left-three">
                            <Button
                                onClick={
                                    ()=>setSelfCodeView(userAccount,stockCode,current)
                                }
                            >
                            {
                                code===2 ? '已添加' : '添加'
                            }
                            
                            </Button>
                        </div>
                    </span>
                    <span className="stockoverview-top-right">
                        <table className="stockoverview-table-all">
                            <tbody>
                                <tr >
                                    <td className="stockoverview-table-one">{intl.get('today_open')}</td>
                                    <td className="stockoverview-table-two" style={{color:'#4cc9ad'}}>{getStockList?getStockList.nowOpen:'0.590'}</td>
                                    <td className="stockoverview-table-one">{intl.get('highest_price')}</td> 
                                    <td className="stockoverview-table-two" style={{color:'#e0394d'}}>{getStockList?getStockList.highestPrice:'0.590'}</td>
                                    <td className="stockoverview-table-one">{intl.get('highest_week')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.ftwHigh:'0.910'}</td>
                                    <td className="stockoverview-table-one">{intl.get('volume')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.volume/10000).toFixed(2)+'万'):'5744.00万'}</td>
                                    <td className="stockoverview-table-one">{intl.get('outer_disk')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.outerDisc/10000).toFixed(2)+'万'):'3617.20万'}</td>
                                </tr>
                                <tr >
                                    <td className="stockoverview-table-one">{intl.get('yesterday_collect')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.yesCol:'0.465'}</td>
                                    <td className="stockoverview-table-one">{intl.get('lowest_price')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.lowestPrice:'0.465'}</td>
                                    <td className="stockoverview-table-one">{intl.get('lowest_week')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.ftwLow:'0.455'}</td>
                                    <td className="stockoverview-table-one">{intl.get('turnover')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.turnover/100000000).toFixed(2)+'亿'):'0.455'}</td>
                                    <td className="stockoverview-table-one">{intl.get('inner_disk')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.innerDisc/10000).toFixed(2)+'万'):'2126.60万'}</td>
                                </tr>
                                <tr >
                                    <td className="stockoverview-table-one">{intl.get('total_share_capital')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.generalCapital/100000000).toFixed(2)+'亿'):'6.66亿'}</td>
                                    <td className="stockoverview-table-one">{intl.get('HK_share_capital')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.hkGeneralCapital/100000000).toFixed(2)+'亿'):'6.66亿'}</td>
                                    <td className="stockoverview-table-one">{intl.get('market_netvalue_ratio')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.pbRatio:'-'}</td>
                                    <td className="stockoverview-table-one">{intl.get('daily_income')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.perProfit:'-'}</td>
                                    <td className="stockoverview-table-one">{intl.get('dividend_yield')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.dividendYield:'-'}</td>
                                </tr>
                                <tr >
                                    <td className="stockoverview-table-one">{intl.get('total_market_capitalization')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.marketValue/100000000).toFixed(2)+'亿'):'5.80亿'}</td>
                                    <td className="stockoverview-table-one">{intl.get('HK_market_value')}</td>
                                    <td className="stockoverview-table-two">{getStockList?((getStockList.hkMarketValue/100000000).toFixed(2)+'亿'):'5.80亿'}</td>
                                    <td className="stockoverview-table-one">{intl.get('market_profit_ratio')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.peRatio:'-'}</td>
                                    <td className="stockoverview-table-one">{intl.get('net_assets_pershare')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.perAssetValue:'0.684'}</td>
                                    <td className="stockoverview-table-one">{intl.get('hand_turnover_rate')}</td>
                                    <td className="stockoverview-table-two">{getStockList?getStockList.turnover:'8.62%'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                </div>
                <div className="stockoverview-bottom">
                    <span className="stockoverview-bottom-left">
                        <img alt='分时' src={getStockImg?getStockImg.codeImage:imgtwoURL} className=""/>

                        {/* <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane 
                                tab={<div><span className="stockoverview-bottom-left-one">分时</span></div>}
                                key="1"
                            >   
                                <div className="stockoverview-bottom-left-content"><img alt='分时' src={imgtwoURL} className=""/></div>
                            </TabPane>
                            <TabPane
                                tab={<div><span className="stockoverview-bottom-left-two">五日</span></div>}
                                key="2"
                            >
                                <div className="stockoverview-bottom-left-content"><img alt='五日' src={imgtwoURL} className=""/></div>
                            </TabPane>
                            <TabPane 
                                tab={<div><span className="stockoverview-bottom-left-three">日K</span></div>}
                                key="3"
                            >
                                <div className="stockoverview-bottom-left-content"><img alt='日K' src={imgtwoURL} className=""/></div>
                            </TabPane>
                            <TabPane 
                                tab={<div><span className="stockoverview-bottom-left-four">周K</span></div>}
                                key="4"
                            >   
                                <div className="stockoverview-bottom-left-content"><img alt='周K' src={imgtwoURL} className=""/></div>
                            </TabPane>
                            <TabPane
                                tab={<div><span className="stockoverview-bottom-left-five">月K</span></div>} 
                                key="5"
                            >
                                <div className="stockoverview-bottom-left-content"><img alt='月K' src={imgtwoURL} className=""/></div>
                            </TabPane>
                            
                        </Tabs> */}
                    </span>
                    <span className="stockoverview-bottom-right">
                        <p>
                            <Button 
                                className="stockoverview-bottom-right-one"
                                onClick={
                                    backList
                                }
                            >
                                <span className="stockoverview-bottom-right-one-text">{intl.get('minestock')}</span>
                                <span>></span>
                            </Button>
                        </p>
                        <ul className='stockoverview-bottom-right-ul'>
                            {
                                hkmarketstocklistSelf.map((show,i)=>(
                                    <li key={i} className={i%2===0?('stockoverview-bottom-right-two'):('stockoverview-bottom-right-three')}> {show?show.name:'长河'} </li>
                                ))
                            }
                        </ul>
                        <span>
                            {/* <Pagination
                                className='stockoverview-pagination' 
                                defaultCurrent={hkmarketstocklistPageSizeSelf} 
                                total={hkmarketstocklistTotalSelf}
                                // onChange={
                                //     (current, size)=>getHKMarketstockList(current)
                                // }
                            /> */}
                        </span>                    
                    </span>
                </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getInfoStock,
    getImageStock,
    getHKMarketstockListSelf,
    backList,
    setSelfCodeView,
})(Slstockoverview);

// export default Slstockoverview;