import React,{ Component} from 'react';
import { connect } from 'react-redux';

import intl from 'react-intl-universal';

import { Row, Col,Modal, Button } from 'antd';
import { editPassword , editPasswordHide,editPasswordSave} from './action'
import './Changepassword.css';
import imgoneURL from '../assient/invalid-name.png'; 
import imgoneURL1 from '../assient/invalid-name@3x.png';
class Changepassword extends Component{
    constructor(props){
        super(props);
        this.state={
            userPassword:'123',
            newPassword:'456',
            newPasswordAgain:''
        }
        this.oldPassword = this.oldPassword.bind(this);
        this.newPassword = this.newPassword.bind(this);
        this.newPasswordAgain = this.newPasswordAgain.bind(this);
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

    newPasswordAgain(e){
        this.setState({
            newPasswordAgain: e.target.value
        })
    }

        render() {
            const self = this,
            { props ,state:selfState} = self,
            { userPassword, newPassword,newPasswordAgain} = selfState,
            { editPassword,state,editPasswordHide,editPasswordSave } = props,
            { visible,userAccount } = state;
            // const userArr = user,
            // { userAccount } = userArr.data;
            return (
            <div>
                <Button  onClick={editPassword} className="change-psw">
                    {/* <img alt='修改密码' src={imgoneURL} /> */}
                    {intl.get('password_modify')}
                </Button>
                <Modal
                    // title={intl.get('password_modify')}

                    title={ <div>
                        <img  alt='aaa' src={imgoneURL1} style={{height:'40px', width:'40px'}}/>
                        <span className='change-psw-title'>{intl.get('password_modify')}</span>
                    </div>}

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
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-oldpassword">
                            <span className="change-oldpassword-title">{intl.get('password_old')}</span> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-oldpassword-input">
                            <input 
                            className="change-oldpassword-textone"
                            onChange={this.oldPassword}
                             /> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-newpassword">
                            <span className="change-newpassword-title">{intl.get('password_new')}</span> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-newpassword-input">
                            <input 
                            className="change-newpassword-texttwo"
                            onChange={this.newPassword}
                            /> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-expassword">
                            <span className="change-expassword-title">{intl.get('enteragain_password_new')}</span> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-expassword-input">
                            <input onChange={this.newPasswordAgain} className="change-expassword-textthree"/> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={5} md={5} className="change-left"></Col>
                        <Col xl={14} md={14} className="change-save">
                            <button 
                                className="change-save-one"
                                onClick={()=>editPasswordSave(userPassword,newPassword,userAccount,newPasswordAgain)}
                            >
                                {intl.get('save')}
                            </button> 
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
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
