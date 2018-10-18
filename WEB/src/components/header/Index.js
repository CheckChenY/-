
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { getHKNews } from '../stockNews/action';
import intl from 'react-intl-universal';
// import Tools from '../corn/tools';
import { 
    loadLocales
} from '../../action';
import {
	Link
} from 'react-router-dom';
import { Menu, Dropdown, Input } from 'antd';
import { Row, Col } from 'antd';
import { Select } from 'antd';

import Changepassword from '../editpassword/Changepassword';
import Personalinformation from '../personal/Personalinformation';

import './Index.css';
import imgoneURL from '../assient/group-4.png';
import imgoneURL1 from '../assient/userdefine.jpg';
import Logout from '../login/logout';

const Option = Select.Option;
const Search = Input.Search;


class Header extends Component{
    render(){
        const self = this,  
        { props } = self, 
        { 
            bShowSearch ,
            getHKNews,
            loadLocales=()=>{},
            state,
        } = props,
        {userId,Language} = state;
        // const step = Tools.getFromUrlParam('key') || '';
        // getHKNews(step,'',1,true);
        // console.log(Language);
        const menu = (
            <Menu>
                <Menu.Item key="1" className='head-right-choose'>
                    <Personalinformation {...props} />
                </Menu.Item>
                <Menu.Item key="2" className='head-right-choose'>
                    <Changepassword />
                </Menu.Item>
                <Menu.Item key="3" className='head-right-choose'><Logout /></Menu.Item>
            </Menu>
        );
        return (
            <div>
            <div style={{position:'fixed', zIndex:'300', background:'#fff',width:'100%'}}>
                <Row className="head">
                    <Col span={6} className="head-left">
                        <Link to='/index'>
                            <img alt='aaa' src={imgoneURL} className="logo"/>
                        </Link> 
                        <span className="head-left-one">{intl.get('search_finance')}</span>
                        <span className="head-left-two">BAR</span>
                    </Col>
                    <Col span={10} className="head-center">
                    { bShowSearch ? (
                        <div>
                            <Search                            
                                defaultValue="" 
                                ref={
                                    input=>{
                                        this.searchword = input
                                    }
                                }                               
                                onSearch={
                                    value=>getHKNews(self,'',1,1)
                                }
                                enterButton="搜索"
                                size="large"
                                className='head-center-search'
                            />
                        </div>  
                    ):''}                      
                    </Col>
                    <Col span={8} className="index-head-right">
                        <div className='head-rigth-select' >
                            <Select 
                                className="head-right-select"
                                defaultValue={Language} 
                                onChange={ loadLocales }
                                showArrow={true} 
                                style={{ 
                                    borderRight:'solid 1px #979797'
                                }}
                            >
                                <Option value="zh-CN">CH</Option>
                                <Option value="zh-TW">TW</Option>
                            </Select>
                        </div>                        
                        <Dropdown overlay={menu}>    
                            <img  alt='aaa' src={imgoneURL1} className="user-picture"/> 
                        </Dropdown>
                        <div className='head-right-text' >
                            ID: {userId ? userId : '刘德华' }
                        </div>
                    </Col>
                </Row>
            </div>
            <div style={{height:'74px', display:'inline-block'}}></div>
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
    
export default connect(mapDispatchToProps,{
    getHKNews,
    loadLocales
})(Header);
// export default Header;
