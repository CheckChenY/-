import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Modal, Button ,Row, Col} from 'antd';

import { hideModal ,nextStepTre,getEmailCode} from './action'

// import Resetsuccess from './backPasswordStepTre'

import './backPasswordStepTwo.css';
// import backPasswordStepOne from './backPasswordStepOne';
// import imgoneURL from '../assient/invalid-name2.png';

class BackPasswordStepTwo extends Component{

    constructor(props){
        super(props)
        // this.state = {

        // }
        this.changehande = this.changehande.bind(this)
    }

    changehande=()=>{
        console.log(this.textInput);
    }
    
    render() {
        const self = this,
        { nextStepTre ,state ,hideModal,getEmailCode } = self.props,
        { visible,email } = state;
        return (
            <div>
                <Modal
                    title="找回密码"
                    wrapClassName ="resetp-base"
                    // iconType= {<img alt='找回密码' src={imgoneURL} />}
                    visible={visible}
                    onOk={hideModal}
                    onCancel={hideModal}
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
                    closable={false}
                    footer={[
                        null
                    ]}
                >
                    <Row>
                        <Col xl={3} md={3}></Col>
                        <Col xl={18} md={18}>
                            {/* 确认账号   重置密码    重置成功  */}
                            <Row className="">
                                <Col xl={6} md={6} className="text-center">
                                    <span className="resetp-number-one">
                                        1
                                    </span>&nbsp;
                                    <span>确认账号</span> 
                                </Col>
                                <Col xl={3} md={3}>
                                    <span className="reset-line"></span>
                                </Col>
                                <Col xl={6} md={6} className="text-center">
                                    <span className="resetp-number-two">
                                        2
                                    </span>&nbsp;
                                    <span>重置密码</span> 
                                </Col>
                                <Col xl={3} md={3}>
                                    <span className="reset-line"></span>
                                </Col>
                                <Col xl={6} md={6}  className="text-center">
                                    <span className="resetp-number-three">
                                        3
                                    </span>&nbsp;
                                    <span>重置成功</span> 
                                </Col>
                            </Row>

                        </Col>
                        <Col xl={3} md={3}></Col>
                    </Row>
                    <br/>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12}>
                            <span className="reset-newpassword">新密码</span> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12}>
                            <input className="reset-newpassword-text"/> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <br/>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12}>
                            <span className="reset-write-newpassword">重新输入新密码</span> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12}>
                            <input ref={input => {
                                    this.textInput = input;
                                }} 
                            className="reset-write-newpassword-text"/> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <br/>
                    <Row className="reset">
                    <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12}>
                            <span className="reset-email">邮箱</span> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12}>
                            {/* <input className="reset-email-text"/>  */}
                            <span className="reset-email-text"> 
                                {email}
                            </span>
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <br/>
                    <Row className="reset">
                    <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12} className="">
                            <span className="reset-identyno">验证码</span> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={6} md={6}>
                            <input className="reset-identyno-text"/> 
                        </Col>
                        <Col xl={6} md={6} className="reset-identyno-way">
                            <Button type="primary"
                            onClick={()=>getEmailCode(email)}
                            >
                                获取验证码
                            </Button>
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <br/>
                    <Row className="reset">
                        <Col xl={6} md={6} className="reset-left"></Col>
                        <Col xl={12} md={12} className="reset-next">
                            <button 
                                className="reset-confirm"
                                onClick={
                                    // nextStepTre
                                    this.changehande
                                }
                            >
                                <span className="reset-confirm-text">确认修改123</span>
                            </button> 
                        </Col>
                        <Col xl={6} md={6} className="reset-right"></Col>
                    </Row>
                    <br/>
                </Modal>
            </div>
        );
    }
}


const mapDispatchToProps = state => ({
    state:state.checkReducer
})

export default connect(mapDispatchToProps,{
    nextStepTre,
    hideModal,
    getEmailCode,
})(BackPasswordStepTwo);
// export default BackPasswordStepTwo;

