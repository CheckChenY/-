import React, { Component } from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import {  Input, Row, Col, Button, Form  } from 'antd';
import { 
  // hideModal ,
  nextStepTwo,
  getImgCode
} from './action'

import BackPasswordStepTwo from './backPasswordStepTwo';
import BackPasswordStepTre from './backPasswordStepTre';

import imgtwoURL from '../assient/identifying.png'
import imgUrl_1 from '../assient/backpassword.png'; 


import './backPasswordStepOne.css'

const FormItem = Form.Item;

class BackPasswordStepOne extends Component {
  constructor(props){
      super(props);
      this.state={
          userName:'hh',
          code:'123'
      }
      this.changeCode = this.changeCode.bind(this);
      this.handeChangeAccound = this.handeChangeAccound.bind(this);
  }
  
  componentDidMount(){
    const self = this.props,
    { getImgCode } = self;
    getImgCode();
  }

  handeChangeAccound(e){
    this.setState({
      userName:e.target.value
    })
  }
  changeCode(e){
    this.setState({
      code:e.target.value
    })
  }
  

  render() {
    const self = this,
    { state,props } = self,
    { userName,code } = state,
    { state:selfState,nextStepTwo } = props,
    { imgSrc , uuid , nextStep ,email} = selfState;
    return (
      <div>
        { nextStep === 'one' ? (

          <Row >
            <Col span={6}></Col>
            <Col span={12}>
              <div className='backPasswordStepOne-box' style={{height:'465px'}}>
                <div className='backPasswordStepOne-box-header'>
                  <img alt='aaa' src={imgUrl_1} style={{width:'40px', height:'40px'}}/>                  
                  <span style={{marginLeft:'10px'}}>{intl.get('password_retrieve')}</span>
                </div>
                <div style={{marginTop:'20px'}}>
                  <Row style={{textAlign:'center'}}>
                      <span className='backPasswordStepOne-number-pink'>1</span>
                      <span className='backPasswordStepOne-number-text'>{intl.get('confirm_account')}</span>
                      <span className='backPasswordStepOne-line'></span> 
                      <span className='backPasswordStepOne-number-normal'>2</span>
                      <span className='backPasswordStepOne-number-text'>{intl.get('reset_password')}</span>
                      <span className='backPasswordStepOne-line'></span>
                      <span className='backPasswordStepOne-number-normal'>3</span>
                      <span className='backPasswordStepOne-number-text'>{intl.get('reset_success')}</span> 
                  </Row>
                </div>
                <div  className='backPasswordStepOne-form'>
                  <Row>
                    <Col span={7}></Col>
                    <Col span={10}>
                      <Form layout='vertical' >
                        <FormItem
                          label={intl.get('enteragain_account')}
                        >
                          <Input 
                          onChange={
                            this.handeChangeAccound
                          }
                          placeholder={intl.get('account')} />
                        </FormItem>
                        <FormItem
                          label={intl.get('verification_code')}
                        >
                          <Col span={15}>
                            <Input type="text"
                            onChange={this.changeCode}
                            placeholder={intl.get('verification_code')} />
                          </Col>
                          <Col span={1}></Col>
                          <Col span={8} >
                              <img src={imgSrc ? `data:image/jpeg;base64,${imgSrc}` : imgtwoURL} alt='金融搜索' style={{height:'32px', borderRadius: '4px', width:'100%',border:' solid 1px #e1e1e1'}}/> 
                          </Col>
                        </FormItem>
                        <FormItem >
                          <Button type="primary"
                           htmlType="submit" 
                           className='backPasswordStepOne-form-button'
                           onClick={ ()=>nextStepTwo(uuid,code,userName) }
                           >{intl.get('next')}</Button>
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
        ) : nextStep === 'two' ? <BackPasswordStepTwo
        userName={userName}
        email={email}                
        /> : nextStep === 'tre' ? <BackPasswordStepTre/> : ' '  }
      </div>
    );
  }
}


const mapDispatchToProps = (state) => ({
  state:state.checkReducer
})

export default connect(mapDispatchToProps,{
  nextStepTwo,
  // hideModal,
  getImgCode,
})(BackPasswordStepOne);
// export default BackPasswordStepOne;