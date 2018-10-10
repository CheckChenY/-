
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Homepagesearch } from '../home/action';
import intl from 'react-intl-universal';
import { 
    loadLocales
} from '../../action';
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


// function handleChange(value) {
//     console.log(`selected ${value}`);
// }

class Header extends Component{
    render(){
        const menu = (
            <Menu>
                <Menu.Item key="1" className='head-right-choose'><Personalinformation /></Menu.Item>
                <Menu.Item key="2" className='head-right-choose'><Changepassword /></Menu.Item>
            </Menu>
        );

        const self = this,  
        { props } = self, 
        { 
            bShowSearch ,
            Homepagesearch,
            loadLocales=()=>{}
        } = props;

        return (
            <div >
                <Row className="head">
                    <Col span={6} className="head-left">
                        <img alt='aaa' src={imgoneURL} className="logo"/> 
                        <span className="head-left-one">{intl.get('search')}</span>
                        <span className="head-left-two">BAR</span>
                    </Col>
                    <Col span={10} className="head-center">
                    { bShowSearch ? (
                        <div className="head-center-search">
                            <Search                            
                                defaultValue="港元汇率"                                
                                onSearch={
                                    value=>Homepagesearch(props,value)
                                }
                                enterButton="搜索"
                                size="large"
                            />
                        </div>  
                    ):''}                      
                    </Col>
                    <Col span={8} className="index-head-right">
                        <div className='head-rigth-select' >
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
                                {/* <Option value="EN">EN</Option> */}
                            </Select>
                        </div>                        
                        <Dropdown overlay={menu}>    
                            <img  alt='aaa' src={imgoneURL1} className="user-picture"/> 
                        </Dropdown>
                        <div className='head-right-text' >
                            {/* ID: {user ? user.data.userAccount : '刘德华' } */}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
    
export default connect(mapDispatchToProps,{
    Homepagesearch,
    loadLocales
})(Header);
// export default Header;
