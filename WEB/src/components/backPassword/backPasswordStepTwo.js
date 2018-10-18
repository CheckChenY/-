import React, { Component } from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

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
        newPassword:'123456',
        againPassword:''
    }
    this.handeChangeCode = this.handeChangeCode.bind(this);
    this.handeChangePassword = this.handeChangePassword.bind(this);

    this.handeChangeAgainPassword = this.handeChangeAgainPassword.bind(this);
  }

  handeChangeAgainPassword = (e) =>{
    // console.log(this.textInput.input.value);
    this.setState({
      againPassword:e.target.value
    })
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
    { emailCode , newPassword ,againPassword} = state;
    return (
      <Row >
        <Col span={6}></Col>
        <Col span={12}>
          <div className='backPasswordStepTwo-box' style={{height:'465px'}}>
            <div className='backPasswordStepTwo-box-header'>
              <img alt='aaa' src={imgUrl_1} style={{width:'40px', height:'40px'}}/>                  
              <span style={{marginLeft:'10px'}}>{intl.get('password_retrieve')}</span>
            </div>
            <div style={{marginTop:'20px'}}>
              <Row style={{textAlign:'center'}}>
                <span className='backPasswordStepTwo-number-normal'>1</span>
                <span className='backPasswordStepTwo-number-text'>{intl.get('confirm_account')}</span>
                <span className='backPasswordStepTwo-line'></span> 
                <span className='backPasswordStepTwo-number-pink'>2</span>
                <span className='backPasswordStepTwo-number-text'>{intl.get('reset_password')}</span>
                <span className='backPasswordStepTwo-line'></span>
                <span className='backPasswordStepTwo-number-normal'>3</span>
                <span className='backPasswordStepTwo-number-text'>{intl.get('reset_success')}</span> 
              </Row>
            </div>
            <div  className='backPasswordStepTwo-form'>
              <Row>
                <Col span={7}></Col>
                <Col span={10}>
                  <Form layout='vertical' >
                    <FormItem
                      label={intl.get('account')}
                    >
                      <Input value={userName} disabled />
                    </FormItem>

                    <FormItem
                      label={intl.get('mailbox')}
                    >
                      <Input value={email} disabled />
                    </FormItem>

                    <FormItem
                      label={intl.get('password_new')}
                    >
                      <Input onChange={this.handeChangePassword} placeholder={intl.get('password_new')} />
                    </FormItem>
                    <FormItem
                      label={intl.get('enteragain_password')}
                    >
                      <Input 
                        // ref={input => {
                        //   this.textInput = input;
                        // }} 
                        onChange={this.handeChangeAgainPassword} 
                        placeholder={intl.get('enteragain_password')} />
                    </FormItem>
                    
                    <FormItem
                      label={intl.get('verification_code')}
                      className="backPasswordStepTwo-form-getbutton"
                    >
                      <Col span={10}>
                        <Input type="text"
                        onChange={this.handeChangeCode}
                        placeholder={intl.get('verification_code')} />
                      </Col>
                      <Col span={1}></Col>
                      <Col span={13} >
                          <Button 
                          type='danger'
                          onClick={()=>getEmailCode(userName)}
                          style={{ width:'100%'}}
                          className="backPasswordStepTwo-form-get"
                          >
                            {intl.get('get_mailbox_word')}
                          </Button> 
                      </Col>
                    </FormItem>
                    <FormItem >
                      <Button type="primary" htmlType="submit"
                      onClick={ 
                        ()=>nextStepTre(userName,email,newPassword,emailCode,againPassword)
                       }
                      className='backPasswordStepTwo-form-button'>{intl.get('confirm_modify')}</Button>
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