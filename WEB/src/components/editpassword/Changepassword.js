/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Row, Col,Modal, Button } from 'antd';
import { editPassword , editPasswordHide,editPasswordSave} from './action'
import './Changepassword.css';
import imgoneURL from '../assient/invalid-name.png';

class Changepassword extends Component{
    constructor(props){
        super(props);
        this.state={
            userPassword:'123',
            newPassword:'456'
        }
        this.oldPassword = this.oldPassword.bind(this);
        this.newPassword = this.newPassword.bind(this);
    }

    oldPassword(e){
        this.setState({
            userPassword: e.target.value
        })
    }
    newPassword(e){
        this.setState({
            newPassword: e.target.value
        })
    }

        render() {
            const self = this,
            { props ,state:selfState} = self,
            { userPassword, newPassword} = selfState,
            { editPassword,state,editPasswordHide,editPasswordSave } = props,
            { visible,user } = state;
            const userArr = JSON.parse(user),
            { userAccount } = userArr.data;
            return (
            <div>
                <Button  onClick={editPassword} className="change-psw">
                    {/* <img alt='修改密码' src={imgoneURL} /> */}
                    修改密码
                </Button>
                <Modal
                    title="修改密码"
                    wrapClassName ="change-base"
                    iconType= {<img alt='修改密码' src={imgoneURL} />}
                    visible={visible}
                    onOk={editPasswordHide}
                    onCancel={editPasswordHide}
                    okText="确认"
                    cancelText="取消"
                    // width={'1000px'}
                    style={{
                        width: '73px',
                        height: '25px',
                        fontFamily: 'PingFangSC',
                        fontSize: '18px',
                        fontWeight: '600',
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#555555'
                    }}
                    destroyOnClose={true}
                    // closable={false}
                    footer={[
                        null
                    ]}
                >
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-oldpassword">
                            <span className="change-oldpassword-title">旧密码</span> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-oldpassword-input">
                            <input 
                            className="change-oldpassword-textone"
                            onChange={this.oldPassword}
                             /> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-newpassword">
                            <span className="change-newpassword-title">新密码</span> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-newpassword-input">
                            <input 
                            className="change-newpassword-texttwo"
                            onChange={this.newPassword}
                            /> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-expassword">
                            <span className="change-expassword-title">重新输入新密码</span> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-expassword-input">
                            <input className="change-expassword-textthree"/> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={8} md={8} className="change-left"></Col>
                        <Col xl={8} md={8} className="change-save">
                            <button 
                                className="change-save-one"
                                type='danger'
                                onClick={()=>editPasswordSave(userPassword,newPassword,userAccount)}
                            >
                                保存
                            </button> 
                        </Col>
                        <Col xl={8} md={8} className="change-right"></Col>
                    </Row>
                </Modal>
            </div>
            );
    }
}

const mapDispatchToProps = state => ({
    state:state.checkReducer
  })
  
  export default connect(mapDispatchToProps,{
    editPassword,editPasswordHide,editPasswordSave
  })(Changepassword);
