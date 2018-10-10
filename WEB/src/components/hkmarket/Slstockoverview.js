import React,{ Component} from 'react';
import {Button } from 'antd';
import { Tabs } from 'antd';


import './Slstockoverview.css'
import imgoneURL from '../assient/stockcc.jpg';
import imgtwoURL from '../assient/stockdd.jpg';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Slstockoverview extends Component{

        render() {
            return (
            <div style={{border:'solid 1px #ebeef1',marginBottom:'14px'}}>
                <div className="stockoverview-top" >
                    <span className="stockoverview-top-left">
                        <p>
                            <span className="stockoverview-top-left-one">0.870</span>
                            <span className="stockoverview-top-left-two"><img alt='aaa' src={imgoneURL} className=""/></span>
                        </p>
                        <p>
                            <span className="stockoverview-top-left-three">+0.405</span>
                            <span className="stockoverview-top-left-four">+87.10%</span>
                        </p>
                        <p className="stockoverview-top-left-five">
                            <Button>+ 添加自选</Button>
                        </p>
                    </span>
                    <span className="stockoverview-top-right">
                        <table className="stockoverview-table-all">
                            <tbody>
                                <tr >
                                    <td className="stockoverview-table-one-top">今开</td>
                                    <td className="stockoverview-table-two-top" style={{color:'#4cc9ad'}}>0.590</td>
                                    <td className="stockoverview-table-one-top">最高价</td>
                                    <td className="stockoverview-table-two-top" style={{color:'#e0394d'}}>0.590</td>
                                    <td className="stockoverview-table-one-top">52周最高</td>
                                    <td className="stockoverview-table-two-top">0.910</td>
                                    <td className="stockoverview-table-one-top">成交量</td>
                                    <td className="stockoverview-table-two-top">5744.00万</td>
                                    <td className="stockoverview-table-one-top">外盘</td>
                                    <td className="stockoverview-table-two-top">3617.20万</td>
                                </tr>
                                <tr >
                                    <td className="stockoverview-table-one">昨收</td>
                                    <td className="stockoverview-table-two">0.465</td>
                                    <td className="stockoverview-table-one">最低价</td>
                                    <td className="stockoverview-table-two">0.465</td>
                                    <td className="stockoverview-table-one">52周最低</td>
                                    <td className="stockoverview-table-two">0.455</td>
                                    <td className="stockoverview-table-one">成交额</td>
                                    <td className="stockoverview-table-two">0.455</td>
                                    <td className="stockoverview-table-one">内盘</td>
                                    <td className="stockoverview-table-two">2126.60万</td>
                                </tr>
                                <tr >
                                    <td className="stockoverview-table-one">总股本</td>
                                    <td className="stockoverview-table-two">6.66亿</td>
                                    <td className="stockoverview-table-one">港股本</td>
                                    <td className="stockoverview-table-two">6.66亿</td>
                                    <td className="stockoverview-table-one">市净率</td>
                                    <td className="stockoverview-table-two">-</td>
                                    <td className="stockoverview-table-one">每日收益</td>
                                    <td className="stockoverview-table-two">-</td>
                                    <td className="stockoverview-table-one">股息率</td>
                                    <td className="stockoverview-table-two">-</td>
                                </tr>
                                <tr >
                                    <td className="stockoverview-table-one-bottom">总市值</td>
                                    <td className="stockoverview-table-two-bottom">5.80亿</td>
                                    <td className="stockoverview-table-one-bottom">港市值</td>
                                    <td className="stockoverview-table-two-bottom">5.80亿</td>
                                    <td className="stockoverview-table-one-bottom">市盈率</td>
                                    <td className="stockoverview-table-two-bottom">-</td>
                                    <td className="stockoverview-table-one-bottom">每股净资产</td>
                                    <td className="stockoverview-table-two-bottom">0.684</td>
                                    <td className="stockoverview-table-one-bottom">换手率</td>
                                    <td className="stockoverview-table-two-bottom">8.62%</td>
                                </tr>
                            </tbody>
                        </table>
                    </span>
                </div>
                <div className="stockoverview-bottom">
                    <span className="stockoverview-bottom-left">
                        <Tabs defaultActiveKey="1" onChange={callback}>
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
                            
                        </Tabs>
                    </span>
                    <span className="stockoverview-bottom-right">
                    <p>
                        <Button className="stockoverview-bottom-right-one">
                            <span className="stockoverview-bottom-right-one-text">我的自选股</span>
                            <span>></span>
                        </Button>
                    </p>
                    
                    <ul>
                        <li className="stockoverview-bottom-right-two">远大医药股</li>
                        <li className="stockoverview-bottom-right-three">CEC INT'L HOLD</li>
                        <li className="stockoverview-bottom-right-two">新威斯顿</li>
                        <li className="stockoverview-bottom-right-three">俊文宝石</li>
                        <li className="stockoverview-bottom-right-two">英裘控股</li>
                        <li className="stockoverview-bottom-right-three">佰悦集团</li>
                        <li className="stockoverview-bottom-right-two">日成控股</li>
                        <li className="stockoverview-bottom-right-three">香港国际建投</li>
                        <li className="stockoverview-bottom-right-two">泰山石化</li>
                        <li className="stockoverview-bottom-right-three">精雅印刷集团</li>
                    </ul>
                    
                    </span>
                </div>
            </div>
            );
    }
}

export default Slstockoverview;