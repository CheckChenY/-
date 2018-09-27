import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';
import { nextStep,registerSuccess } from './action'
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
        email:'123456@qq.com',
        code:'1234'
    }
    this.handeChangeUser = this.handeChangeUser.bind(this);
    this.handeChangePassword = this.handeChangePassword.bind(this);
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

//  handleSubmitBefore = (e) => {
//     e.preventDefault();
//     const self = this,
//     { props } = self;
//     props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//         self.setState({
//             userAccount:values.userName,
//             userPassword:values.password,
//             show:false
//         })
//       }
//     });
// }



// handleSubmitLast = (e) => {
//     e.preventDefault();
//     const self = this,
//     { props ,state} = self,
//     { userName,userPassword } = state;
//     props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);

//         // let history = this.context.router.history;
//         // console.log(history);

//         Axios.post('/User/userRegister', {
//           userAccount: userAccount,
//           userPassword: userPassword,
//           userEmail:values.email
//         })
//         .then(function (response) {

//           // return (<Redirect to="/home" />);
//           // History.push('/home')


//           console.log(response);
//           if(response.data.code === 1){
//               alert('注册成功')
//           }
//           // console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });


//       }
//     });
//   }

  render() {
    const self = this,
    { props ,state} = self,
    { state:selfState,nextStep,getImgCode,registerSuccess } = props,
    { userName ,userPassword,email ,code} = state,
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
                        placeholder="用户名：" />
                    </FormItem>

                    <FormItem>
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        type="password" 
                        onChange={this.handeChangePassword}
                        placeholder="密码：" />
                    </FormItem>

                    <FormItem>
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="重复输入密码：" />
                    </FormItem>
                    <FormItem
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                    }}
                    >
                                            
                    <Button type="primary"
                    onClick={ ()=>nextStep(userName) }
                    className="register-box-button">
                        下一步
                    </Button>

                    </FormItem>
                </Form> 
              ) :(
                <Form layout="vertical" style={{marginBottom:'24px'}}>
                <FormItem>
                    <Input 
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    type="text" 
                    onChange={this.handeChangeEmail}
                    placeholder="邮箱：" />
                </FormItem>

                <FormItem>
                    <Col span={15}>
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        type="text" 
                        onChange={this.handeChangeCode}
                        placeholder="验证码："
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
                    <Button type="primary" 
                    style={{marginTop:'64px'}} 
                    onClick={()=>registerSuccess(userPassword,email ,code,uuid,userName)}
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
    getImgCode,
    registerSuccess
})(WrappedNormalLoginForm);

// export default WrappedNormalLoginForm;