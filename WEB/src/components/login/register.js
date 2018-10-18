import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';
import { nextStep,registerSuccess,prvStep } from './action'
import { getImgCode } from '../backPassword/action'
import { Button, Form, Input ,Icon, Col,} from 'antd';

import './register.css';

// import imgUrl_1 from '../assient/group-4.png'; 

// const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class Register extends Component {
constructor(props){
    super(props);
    this.state={
        userName:'hh',
        userPassword:'123',
        passwordAgain:'',
        email:'123456@qq.com',
        code:'1234'
    }
    this.handeChangeUser = this.handeChangeUser.bind(this);
    this.handeChangePassword = this.handeChangePassword.bind(this);
    this.handeChangePasswordAgain = this.handeChangePasswordAgain.bind(this);
    this.handeChangeEmail = this.handeChangeEmail.bind(this);
    this.handeChangeCode = this.handeChangeCode.bind(this);
}

componentDidMount(){
    const self = this.props,
    { getImgCode } = self;
    getImgCode();
  }

handeChangeUser(e){
    this.setState({
        userName:e.target.value
    })
}
handeChangePassword(e){
    this.setState({
        userPassword:e.target.value
    })
}
handeChangePasswordAgain(e){
    this.setState({
        passwordAgain:e.target.value
    })
}
handeChangeEmail(e){
    this.setState({
        email:e.target.value
    })
}
handeChangeCode(e){
    this.setState({
        code:e.target.value
    })
}


  render() {
    const self = this,
    { props ,state} = self,
    { state:selfState,nextStep,getImgCode,registerSuccess,prvStep } = props,
    { userName ,userPassword,email ,code,passwordAgain,} = state,
    { imgSrc , show ,uuid} = selfState;
    return (
      <div>
          {
              !show ? (
                <Form layout="vertical" style={{marginBottom:'24px'}}>
                    <FormItem>
                        <Input 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        onChange={this.handeChangeUser} 
                        maxLength="12"
                        placeholder="请输入用户名" />
                    </FormItem>

                    <FormItem>
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        type="password" 
                        maxLength="12"
                        onChange={this.handeChangePassword}
                        placeholder="请输入密码" />
                    </FormItem>

                    <FormItem>
                        <Input 
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            maxLength="12"
                            onChange={this.handeChangePasswordAgain}
                            type="password" placeholder="请重复输入密码"
                        />
                    </FormItem>
                    <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                    }}
                    >
                                            
                    <Button type="primary"
                    onClick={ ()=>nextStep(userName,userPassword,passwordAgain,true) }
                    className="register-box-button">
                        下一步
                    </Button>

                    </FormItem>
                </Form> 
              ) :(
                <Form layout="vertical" style={{marginBottom:'24px'}}>
                <FormItem>
                    <div>
                        <Input 
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="请输入邮箱" 
                            maxLength='30'
                            type="textarea"
                            onChange={this.handeChangeEmail}
                        />
                    </div>
                </FormItem>

                <FormItem>
                    <Col span={15}>
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        type="text" 
                        onChange={this.handeChangeCode}
                        placeholder="请输入验证码"
                         />
                    </Col>
                    <Col span={1}></Col>
                    <Col span={8} >
                        <img onClick={getImgCode} src={"data:image/jpeg;base64,"+imgSrc} alt='金融搜索' style={{height:'32px', borderRadius: '4px', width:'100%',border:' solid 1px #e1e1e1'}} /> 
                    </Col>
                </FormItem>

                <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                    }}
                >
                    <Button type="default" 
                        className="register-box-button"
                        onClick={ ()=>prvStep() } >
                        上一步
                    </Button>
                    <Button type="primary" 
                        onClick={()=>registerSuccess(userPassword,email ,code,uuid,userName,props)}
                        className="register-box-button">
                        完成
                    </Button>

                </FormItem>
                </Form>
              )
          }
      </div>
    );
  }
}


const mapDispatchToProps = state => ({
    state:state.checkReducer
})

const WrappedNormalLoginForm = Form.create()(Register);

export default connect(mapDispatchToProps,{
    nextStep,
    prvStep,
    getImgCode,
    registerSuccess
})(WrappedNormalLoginForm);

// export default WrappedNormalLoginForm;