import React,{ Component} from 'react';
import { connect } from 'react-redux';
// import ECharts from 'echarts';
import { 
    getSlcapitalList,
    // getSlcapitalView
} from './action';
import { Row, Col } from 'antd';

import './Slcapitalstructure.css'
// import imgoneURL from '../assient/stockaa.jpg';
// import imgtwoURL from '../assient/stockbb.jpg';


class Slcapitalstructure extends Component{
    componentDidMount(){
        const self = this,
        { getSlcapitalList , 
            stockCodeList,
            // getSlcapitalView
        } = self.props,
        { stockCode } = stockCodeList;
        getSlcapitalList(stockCode);
        // getSlcapitalView();
        
    }

    
    render() {
        const self = this,
        { state } = self.props,
        { getSlcapitalList } = state;
        console.log(getSlcapitalList);
        return (
            <div>
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='capitalstructure-title'>股本结构</div>
                </div>
                <div>
                    <div style={{paddingTop:'20px',width:'100%',borderLeft:'solid 1px #ebeef1',borderRight:'solid 1px #ebeef1'}}>
                        {/* <img alt='图一' src={imgoneURL} className="capitalstructure-stock-one"/>
                        <img alt='图二' src={imgtwoURL} className="capitalstructure-stock-two"/> */}
                        <div id="main" className='testCharts'>

                        </div>
                    </div>
                    <div className="capitalstructure-body">
                        <Row>
                            <Col span={4}>
                                <ul className="capitalstructure-body-left">
                                    <li className="capitalstructure-body-left-one">公告日期</li>
                                    <li className="capitalstructure-body-left-two">变动日期</li>
                                    <li className="capitalstructure-body-left-two">已发行普通股（股）</li>
                                    <li className="capitalstructure-body-left-two">香港普通股（股）</li>
                                    <li className="capitalstructure-body-left-two">内地上市股（股）</li>
                                    <li className="capitalstructure-body-left-two">A股（股）</li>
                                    <li className="capitalstructure-body-left-two">B股（股）</li>
                                    <li className="capitalstructure-body-left-two">海外上市股（股）</li>
                                    <li className="capitalstructure-body-left-two">非上市流通股（股）</li>
                                    <li className="capitalstructure-body-left-two">已发行优先股（股）</li>
                                    <li className="capitalstructure-body-left-two">股本变动原因</li>
                                    <li className="capitalstructure-body-left-none"></li>
                                    
                                </ul>
                            </Col>
                            <Col span={20}  style={{overflowX:'scroll'}}>
                                <div className="capitalstructure-body-div">
                                    <ul className="capitalstructure-body-right">
                                        <li className="capitalstructure-body-right-one">2011-06-30</li>
                                        <li className="capitalstructure-body-right-two">2011-06-30</li>
                                        <li className="capitalstructure-body-right-two">666,190,798.00</li>
                                        <li className="capitalstructure-body-right-two">666,190,798.00</li>
                                        <li className="capitalstructure-body-right-two">-</li>
                                        <li className="capitalstructure-body-right-two">-</li>
                                        <li className="capitalstructure-body-right-two">-</li>
                                        <li className="capitalstructure-body-right-two">-</li>
                                        <li className="capitalstructure-body-right-two">-</li>
                                        <li className="capitalstructure-body-right-two">-</li>
                                        <li className="capitalstructure-body-right-two">购回股份</li>
                                    </ul>
                                </div>
                            </Col>
                            
                        </Row>
                    
                    
                </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getSlcapitalList,
    // getSlcapitalView
})(Slcapitalstructure);
// export default Slcapitalstructure;