import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Input, Row, Col, Button, Form  } from 'antd';

import { 
  getEmailCode,
  nextStepTre
} from './action'

import imgUrl_1 from '../assient/backpassword.png'; 


import './backPasswordStepTwo.css'

const FormItem = Form.Item;

class BackPasswordStepTwo extends Component {
  constructor(props){
    super(props);
    this.state={
        emailCode:'123',
        newPassword:'123456'
    }
    this.handeChangeCode = this.handeChangeCode.bind(this);
    this.handeChangePassword = this.handeChangePassword.bind(this);
  }

  handeChangeCode(e){
    this.setState({
      emailCode:e.target.value
    })
  }

  handeChangePassword(e){
    this.setState({
      newPassword:e.target.value
    })
  }

  render() {
    const self=this,
    { props ,state} = self,
    { userName, email, getEmailCode ,nextStepTre} = props,
    { emailCode , newPassword } = state;
    return (
      <Row >
        <Col span={6}></Col>
        <Col span={12}>
          <div className='backPasswordStepTwo-box'>
            <div className='backPasswordStepTwo-box-header'>
              <img alt='aaa' src={imgUrl_1} style={{width:'40px', height:'40px'}}/>                  
              <span style={{marginLeft:'10px'}}>找回密码</span>
            </div>
            <div style={{marginTop:'20px'}}>
              <Row style={{textAlign:'center'}}>
                <span className='backPasswordStepTwo-number-normal'>1</span>
                <span className='backPasswordStepTwo-number-text'>确认账号</span>
                <span className='backPasswordStepTwo-line'></span> 
                <span className='backPasswordStepTwo-number-pink'>2</span>
                <span className='backPasswordStepTwo-number-text'>重置密码</span>
                <span className='backPasswordStepTwo-line'></span>
                <span className='backPasswordStepTwo-number-normal'>3</span>
                <span className='backPasswordStepTwo-number-text'>重置成功</span> 
              </Row>
            </div>
            <div  className='backPasswordStepTwo-form'>
              <Row>
                <Col span={7}></Col>
                <Col span={10}>
                  <Form layout='vertical' >
                    <FormItem
                      label="账号"
                    >
                      <Input value={userName} disabled />
                    </FormItem>

                    <FormItem
                      label="邮箱"
                    >
                      <Input value={email} disabled />
                    </FormItem>

                    <FormItem
                      label="新密码"
                    >
                      <Input onChange={this.handeChangePassword} placeholder="input placeholder" />
                    </FormItem>
                    <FormItem
                      label="重新输入密码"
                    >
                      <Input placeholder="input placeholder" />
                    </FormItem>
                    
                    <FormItem
                      label="验证码"
                    >
                      <Col span={15}>
                        <Input type="text"
                        onChange={this.handeChangeCode}
                        placeholder="验证码：" />
                      </Col>
                      <Col span={1}></Col>
                      <Col span={8} style={{border:'solid 1px pink'}}>
                          <Button 
                          type='danger'
                          onClick={()=>getEmailCode(userName)}
                          >
                            获取邮箱验证码
                          </Button> 
                      </Col>
                    </FormItem>
                    <FormItem >
                      <Button type="primary" htmlType="submit"
                      onClick={ ()=>nextStepTre(userName,email,newPassword,emailCode) }
                      className='backPasswordStepTwo-form-button'>确认修改</Button>
                    </FormItem>
                  </Form>
                </Col>
                <Col span={7}></Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    );
  }
}


const mapDispatchToProps = (state) => ({
  state:state.checkReducer
})

export default connect(mapDispatchToProps,{
  nextStepTre,
  getEmailCode
})(BackPasswordStepTwo);
// export default BackPasswordStepTwo;