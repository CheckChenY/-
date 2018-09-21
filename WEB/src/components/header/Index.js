/**
* Created by Migual on 2018/9/18.
*/
import React,{ Component} from 'react';
import { Menu, Dropdown, Input } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';

import Changepassword from '../editpassword/Changepassword';
import Personalinformation from '../personal/Personalinformation';

import './Index.css';
import imgoneURL from '../assient/group-4.png';
import imgoneURL1 from '../assient/userdefine.jpg';

const Option = Select.Option;
const Search = Input.Search;


function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class Header extends Component{

    constructor (props) {
        super(props)
        this.handleMenuClick = this.handleMenuClick.bind(this)
        console.log(this);
    }

    menu = (
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1"><Personalinformation/></Menu.Item>
          <Menu.Item key="2"><Changepassword /></Menu.Item>
        </Menu>
    );
      
    handleMenuClick(e) {
        console.log(this)
    }

    render(){
        const { user } = this.props;
        console.log(user);
        return (
            <div >
                <Row className="head">
                    <Col xl={5} md={8} className="head-left">
                        <img alt='aaa' src={imgoneURL} className="logo"/> 
                        <span className="head-left-one">金融搜索</span>
                        <span className="head-left-two">BAR</span>
                    </Col>
                    <Col xl={14} md={8} className="head-center">
                        <div className="head-center-search">
                            <Search                            
                                placeholder="港元汇率"                                
                                onSearch={value => console.log(value)}
                                enterButton="搜索"
                                size="default"
                            />
                        </div>                        
                    </Col>
                    <Col xl={5} md={8} className="head-right">
                        <div className='head-rigth-select' >
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
                        </div>                        
                        <Dropdown overlay={this.menu}>    
                            <img  alt='aaa' src={imgoneURL1} className="user-picture"/> 
                        </Dropdown>
                        <div className='head-right-text' >
                            id:{user ? user.data.userAccount : '刘德华' }|
                        </div>
                    </Col>
                </Row>
            </div>
        )
    } 
}
