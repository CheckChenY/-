/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import './Password.css';
// import imgoneURL from '../assient/invalid-name.png';
import imgtwoURL from '../assient/identifying.png'

export default class Password extends Component{
    state = { visible: false }
        showModal = () => {
            this.setState({
                visible: true,
            });
        }
        hideModal = () => {
            this.setState({
                visible: false,
            });
        }
        render() {
            return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    {/* <img alt='aaa' src={imgoneURL} /> */}
                    确认账号
                </Button>
                <Modal
                    title="找回密码"
                    // iconType= {<img alt='aaa' src={imgoneURL} />}
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
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
                >
                    {/* <Row className="">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="">
                            <span className="">确认账号</span> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row> */}
                    <Row className="">
                        <Col xl={3} md={3} className=""></Col>
                        <Col xl={18} md={18} className="">
                            {/* 确认账号   重置密码    重置成功  */}
                            <Row className="">
                                <Col xl={6} md={6}  className="text-center">
                                    <span className="">确认账号</span> 
                                </Col>
                                <Col xl={3} md={3}  className="">
                                    <span className=""></span>
                                </Col>
                                <Col xl={6} md={6}  className="text-center">
                                    <span className="">重置密码</span> 
                                </Col>
                                <Col xl={3} md={3}  className="">
                                    <span className=""></span>
                                </Col>
                                <Col xl={6} md={6}  className="text-center">
                                    <span className="">重置成功</span> 
                                </Col>
                            </Row>

                        </Col>
                        <Col xl={3} md={3} className=""></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-newpassword">
                            <span className="change-newpassword-title">请输入邮箱账号</span> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-newpassword-input">
                            <input className="change-newpassword-texttwo"/> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={7} md={7} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-expassword">
                            <span className="change-expassword-title">验证码</span> 
                        </Col>
                        <Col xl={7} md={7} className="change-right"></Col>
                    </Row>
                    <Row className="change">
                        <Col xl={2} md={2} className="change-left"></Col>
                        <Col xl={10} md={10} className="change-expassword-input">
                            <input className="change-expassword-textthree"/> 
                        </Col>
                        <Col xl={7} md={7} className="change-right2">
                            <img alt='aaa' src={imgtwoURL} />
                        </Col>
                        <Col xl={5} md={5} className="change-right"></Col>
                    </Row>
                    <br/>
                    <Row className="change">
                        <Col xl={8} md={8} className="change-left"></Col>
                        <Col xl={8} md={8} className="change-next">
                            <button 
                                className="change-next-one"
                            >
                                <span className="change-next-text">下一步</span>
                            </button> 
                        </Col>
                        <Col xl={8} md={8} className="change-right"></Col>
                    </Row>
                </Modal>
            </div>
            );
    }
}

