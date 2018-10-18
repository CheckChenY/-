import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Axios from 'axios';
// import Tools from './corn/tools';
import { handleSubmit } from './action'
import {
  Link
} from 'react-router-dom';

// import { Redirect } from 'react-router';

import { Button, Form, Input, Checkbox, Layout, Row, Col, Tabs,Icon } from 'antd';

import Register from '../components/login/register';
// import intl from 'react-intl-universal';

// import { showModal } from './editpassword/action'

// import BackPasswordStepOne from './editpassword/backPasswordStepOne'
// import BackPasswordStepTwo from './editpassword/backPasswordStepTwo'
// import BackPasswordStepTre from './editpassword/backPasswordStepTre'

import imgUrl_1 from './assient/group-4.png'; 
import imgUrl_2 from './assient/loginRegisterBG/login_register_bk.jpg'; 

import './loginTxt.css'

const { /*Header, Footer, Sider,*/ Content } = Layout;


const TabPane = Tabs.TabPane;
const FormItem = Form.Item;



class NormalLoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userAccount:'123'
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const self = this,
  //   { props } = self;
  //   props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //       localStorage.setItem('userName', values.userName);

  //       Axios.post('/api/User/userLogin', {
  //         userAccount: values.userName,
  //         userPassword: values.password
  //       })
  //       .then(function (response) {
  //         if(response.data.code === 1){
  //           localStorage.setItem('userAccount', response.data.data.userAccount);
  //           localStorage.setItem('userAddress', response.data.data.userAddress);
  //           localStorage.setItem('userEmail', response.data.data.userEmail);
  //           localStorage.setItem('userId', response.data.data.userId);
  //           localStorage.setItem('userNickname', response.data.data.userNickname);
  //           localStorage.setItem('userSlogan', response.data.data.userSlogan);
  //           self.props.history.push('/index');
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     }
  //   });
  // }

  render() {
    const self = this,
    { props } = self,
    { form ,handleSubmit} = props,
    { getFieldDecorator } = form;

    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: false, message: '' }],
          })(
            <Input className="login-form-name" ref={input=>this.userName=input} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: false, message: '' }],
          })(
            <Input className="login-form-name" ref={input=>this.userPassword=input} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem >
          <Col span={10} style={{display:'inline-block', textAlign:'left'}}>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className="rememberpass">记住密码</Checkbox>
            )}
          </Col>
          <Col span={14} style={{display:'inline-block', textAlign:'right'}} >
            
            <Link to='backPassword'>
                <Button 
                  style={{
                      border:'none',
                      // textDecoration:'underline',
                      fontSize:'12px',
                      color:'#3172be',
                      boxShadow:'none',
                  }} 
              >
                  <span className="forgetpass">忘记密码?</span>
              </Button>
            </Link>
          </Col>
        </FormItem>
        <FormItem style={{marginBottom:'28px'}}>
          <Button type="primary" 
          htmlType="submit" 
          onClick={
            ()=>handleSubmit(props)
          }
          className="login-box-button">
              登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class LoginTxt extends Component {

  render() {
    const self = this,
    { props } = self,
    { state } = props,
    { loginTabKey='1' } = state;
    // const step = Tools.getFromUrlParam('id') || '';
    return (
      <div>        
        <Content 
        className='login-register'
        style={{
          background:`url(${imgUrl_2}) no-repeat`,
          backgroundSize:'100% 100%'
        }}
        >
          <Row>
            <Col md={2} sm={0} xs={0}></Col>
            <Col md={8} sm={12} xs={12}>                            
              <div className='login-register-left-head' style={{marginTop:'120px', }}>
                金融搜索BAR    一款强大的搜索工具
              </div>
              <Row>
                <Col span={3}></Col>
                <Col span={18} className='login-register-left-head-2'>
                  <div style={{marginTop:'63px'}}>最全港股资讯</div>
                  <div style={{textAlign:'center', marginTop:'19px'}}>最新港股行情</div>
                  <div style={{textAlign:'right', marginTop:'19px'}}>精确定位搜索</div>
                </Col>
                <Col span={3}></Col>
              </Row>                            		
            </Col>
            <Col md={4} sm={2} xs={2}></Col>
            <Col md={7} sm={9} xs={9}>
              <div className='login-register-box'>                         
                <Row>
                  <Col span={2}></Col>
                  <Col span={20}>  
                    <div className='login-register-box-content'>
                      <div className='login-register-box-imgBg' >
                        <img src={imgUrl_1} alt='金融搜索' style={{width:'75px',height:'66px'}}/>                                        
                      </div>
                      <Tabs defaultActiveKey={loginTabKey} tabBarGutter={20} className="login-register-box-tab" >
                        <TabPane tab="登录" key="1">
                          <WrappedNormalLoginForm { ...props }/>                               
                        </TabPane>
                        <TabPane tab="注册" key="2">
                          <Register {...props} />  
                        </TabPane>                                    
                      </Tabs>
                    </div>
                  </Col>
                  <Col span={2}></Col> 
                </Row>
              </div>
            </Col>
            <Col md={3} sm={1} xs={1}></Col>
        </Row>  
      </Content>                    
    </div>
    );
  }
}


const mapDispatchToProps = state => ({
  state:state.checkReducer
})

export default connect(mapDispatchToProps,{
    handleSubmit
})(LoginTxt);