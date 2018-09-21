import React, { Component } from 'react';
import { connect } from 'react-redux';
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
              <div className='backPasswordStepOne-box'>
                <div className='backPasswordStepOne-box-header'>
                  <img alt='aaa' src={imgUrl_1} style={{width:'40px', height:'40px'}}/>                  
                  <span style={{marginLeft:'10px'}}>找回密码</span>
                </div>
                <div style={{marginTop:'20px'}}>
                  <Row style={{textAlign:'center'}}>
                      <span className='backPasswordStepOne-number-pink'>1</span>
                      <span className='backPasswordStepOne-number-text'>确认账号</span>
                      <span className='backPasswordStepOne-line'></span> 
                      <span className='backPasswordStepOne-number-normal'>2</span>
                      <span className='backPasswordStepOne-number-text'>重置密码</span>
                      <span className='backPasswordStepOne-line'></span>
                      <span className='backPasswordStepOne-number-normal'>3</span>
                      <span className='backPasswordStepOne-number-text'>重置成功</span> 
                  </Row>
                </div>
                <div  className='backPasswordStepOne-form'>
                  <Row>
                    <Col span={7}></Col>
                    <Col span={10}>
                      <Form layout='vertical' >
                        <FormItem
                          label="请输入账号"
                        >
                          <Input 
                          onChange={
                            this.handeChangeAccound
                          }
                          placeholder="input placeholder" />
                        </FormItem>
                        <FormItem
                          label="验证码"
                        >
                          <Col span={15}>
                            <Input type="text"
                            onChange={this.changeCode}
                            placeholder="验证码：" />
                          </Col>
                          <Col span={1}></Col>
                          <Col span={8} style={{border:'solid 1px pink'}}>
                              <img src={imgSrc ? `data:image/jpeg;base64,${imgSrc}` : imgtwoURL} alt='金融搜索' style={{height:'32px'}}/> 
                          </Col>
                        </FormItem>
                        <FormItem >
                          <Button type="primary"
                           htmlType="submit" 
                           className='backPasswordStepOne-form-button'
                           onClick={ ()=>nextStepTwo(uuid,code,userName) }
                           >下一步</Button>
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