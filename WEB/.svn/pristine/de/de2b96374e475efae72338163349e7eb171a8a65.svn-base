/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { Button} from 'antd';
// import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';
import './Header.css';
import imgoneURL from '../assient/group-4.png';
// import imgtwoURL from '../assient/select.png';

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class Header extends Component{
    render(){
        return (
            <div >
                <Row className="head">
                    <Col xl={5} md={8} className="head-left">
                        <img alt='logo' src={imgoneURL} className="logo"/> 
                        <span className="head-left-one">金融搜索</span>
                        <span className="head-left-two">BAR</span>
                    </Col>
                    <Col xl={14} md={8} className="head-center"></Col>
                    <Col xl={5} md={8} className="head-right">
                        <Select 
                            className="head-right-select"
                            defaultValue="CH" 
                            onChange={handleChange}
                            showArrow={true} 
                            style={{ 
                                borderRight:'solid 1px #979797'
                            }}
                        >
                            <Option value="CH">CH</Option>
                            <Option value="TW">TW</Option>
                            <Option value="EN">EN</Option>
                        </Select>
                        <Button 
                            style={{
                                borderRadius:'4px',
                                backgroundImage: 'linear-gradient(236deg, #ff4444, #ff9191)',
                                marginLeft:'25px',
                                marginRight:'20px'
                            }}
                        >
                            <span className="head-right-login-btn">登录</span>
                        </Button> 
                        <Button 
                            style={{
                                borderRadius:'6px',
                                backgroundColor:'ffffff',
                                border:'solid 1px #ff5454'
                            }}
                        >
                            <span className="head-right-resiger-btn">注册</span>
                        </Button> 
                    </Col>
                </Row>
            </div>

        )
    } 
}

export default Header;
