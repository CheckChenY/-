import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

// import ECharts from 'echarts';
import { 
    getSlcapitalList,
    // getSlcapitalView
} from './action';
import { Row, Col } from 'antd';

import './Slcapitalstructure.css'
// import imgoneURL from '../assient/stockaa.jpg';
// import imgtwoURL from '../assient/stockbb.jpg';

// import imgoneURL from '../assient/hkmarket/group-2.png';


class Slcapitalstructure extends Component{
    componentDidMount(){
        const self = this,
        { getSlcapitalList , 
            stockCodeList,
            // getSlcapitalView
        } = self.props,
        { stock_code } = stockCodeList;
        getSlcapitalList(stock_code);
        // getSlcapitalView();
        
    }

    
    render() {
        const self = this,
        { state } = self.props,
        { getSlcapitalList=[] } = state;
        console.log(getSlcapitalList);
        return (
            <div>
                <div style={{padding:'20px 0 22px 0', borderTop:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='capitalstructure-title'>{intl.get('equity_structure')}</div>
                </div>
                <div>
                    <div style={{paddingTop:'20px',width:'100%',  borderTop:'solid 1px #ebeef1', textAlign:'center'}}>
                        {/* <img alt='图一' src={imgoneURL} className="capitalstructure-stock-one"/>
                        <img alt='图二' src={imgtwoURL} className="capitalstructure-stock-two"/> */}
                        <div id="main" className='testCharts'>

                        </div>
                        {/* <div className="capitalstructure-none">
                            <div  style={{marginTop:'15px',textAlign:'center'}}>
                                <img alt='无内容' src={imgoneURL}  className="picture"/>
                            </div>
                            <div className="capitalstructurenone-text">
                                <span>{intl.get('temporarily_no_data')}</span>
                            </div>
                        </div>   */}
                    </div>
                    <div className="capitalstructure-body">
                        <Row>
                            <Col span={4}>
                                <ul className="capitalstructure-body-left">
                                    <li className="capitalstructure-body-left-one">{intl.get('announcement_date')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('change_date')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('issued_common_stock')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('HK_common_stock')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('mainland_listed_shares')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('A_stock')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('B_stock')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('overseas_listed_shares')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('unlisted_shares')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('preferred_stock')}</li>
                                    <li className="capitalstructure-body-left-two">{intl.get('reasons_changes_share_capital')}</li>
                                    <li className="capitalstructure-body-left-none"></li>
                                    
                                </ul>
                            </Col>
                            <Col span={20}>
                                <div style={{overflowX:'auto'}}>
                                <div style={{display:'inline-flex'}} className="capitalstructure-body-div">
                                    {
                                        getSlcapitalList.map((show,i)=>(
                                            <ul key={i} className="capitalstructure-body-right">
                                                <li className="capitalstructure-body-right-one"> {show?show.noticeDate:'2011-06-30'} </li>
                                                <li className="capitalstructure-body-right-two">{show?show.changeDate:'2011-06-30'}</li>
                                                <li className="capitalstructure-body-right-two">{show?show.issuedStock:'666,190,798.00'}</li>
                                                <li className="capitalstructure-body-right-two">{show?show.hkStock:'666,190,798.00'}</li>
                                                <li className="capitalstructure-body-right-two">{show?show.inlandListedStock:'-'}-</li>
                                                <li className="capitalstructure-body-right-two">{show?show.aStock:'-'}-</li>
                                                <li className="capitalstructure-body-right-two">{show?show.bStock:'-'}-</li>
                                                <li className="capitalstructure-body-right-two">{show?show.overseasListedStock:'-'}-</li>
                                                <li className="capitalstructure-body-right-two">{show?show.noListedStock:'-'}-</li>
                                                <li className="capitalstructure-body-right-two">{show?show.preferredStock:'-'}-</li>
                                                <li className="capitalstructure-body-right-two">{show?show.changeReason:'购回股份'}</li>
                                            </ul>
                                        ))
                                    }
                                </div>
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