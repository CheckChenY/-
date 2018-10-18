import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { 
    loadLocales
} from '../../action';
import {
	Link
} from 'react-router-dom';
import { Button} from 'antd';
// import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import './Header.css';
import imgoneURL from '../assient/group-4.png';
// import imgtwoURL from '../assient/select.png';

const Option = Select.Option;

// function handleChange(value) {
//     console.log(`selected ${value}`);
// }

class Header extends Component{
    render(){
        const self = this,   
        { 
            bLoginRegister, 
            bNoBoxShadow,
            loadLocales=()=>{}
         } = self.props;
         
        return (
            <div>
                <div style={{position:'fixed', zIndex:'300', background:'#fff',width:'100%'}}>
                    <Row className= {bNoBoxShadow?'head-no-box-shadow':'head'}>
                        <Col span={12} className="head-left">
                            <Link to='/'>
                            <img alt='logo' src={imgoneURL} className="logo"/>
                            </Link> 
                            <span className="head-left-one">金融搜索</span>
                            <span className="head-left-two">BAR</span>
                        </Col>
                        {/* <Col xl={14} md={8} className="head-center"></Col> */}
                        {bLoginRegister?'':(
                        <Col span={12} className="head-right">
                            <Select 
                                className="head-right-select"
                                defaultValue="CH" 
                                onChange={ loadLocales }
                                showArrow={true} 
                                style={{ 
                                    borderRight:'solid 1px #979797'
                                }}
                            >
                                <Option value="zh-CN">CH</Option>
                                <Option value="zh-TW">TW</Option>
                            </Select>
                            <Link to='/login?id=1'>
                                <Button 
                                    style={{
                                        borderRadius:'4px',
                                        backgroundImage: 'linear-gradient(236deg, #ff4444, #ff9191)',
                                        marginLeft:'25px',
                                        marginRight:'12px',
                                        width:'100px',
                                        height:'46px',
                                        border:'none'
                                    }}
                                >
                                    <span className="head-right-login-btn">{intl.get('log_in')}</span>
                                </Button> 
                            </Link>
                            <Link to='/login?id=2'>
                                <Button 
                                    style={{
                                        borderRadius:'6px',
                                        backgroundColor:'ffffff',
                                        border:'solid 1px #ff5454',
                                        width:'100px',
                                        height:'46px'
                                    }}
                                >
                                    <span className="head-right-resiger-btn">{intl.get('registered')}</span>
                                </Button> 
                            </Link>
                        </Col>
                        )}
                    </Row>
                </div>
                <div style={{height:'66px', display:'inline-block'}}></div>
            </div>

        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    loadLocales
})(Header);
// export default Header;
