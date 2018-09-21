/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
// import { Button} from 'antd';
import { Modal, Button } from 'antd';
import { Row, Col } from 'antd';
import './Changepassword.css';
import imgoneURL from '../assient/invalid-name.png';

export default class Changepassword extends Component{
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
                <Button  onClick={this.showModal} className="change-psw">
                    {/* <img alt='修改密码' src={imgoneURL} /> */}
                    修改密码
                </Button>
                <Modal
                    title="修改密码"
                    wrapClassName ="change-base"
                    iconType= {<img alt='修改密码' src={imgoneURL} />}
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
                            <input className="change-oldpassword-textone" /> 
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
                            <input className="change-newpassword-texttwo"/> 
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
                            >
                                <span className="change-save-text">保存</span>
                            </button> 
                        </Col>
                        <Col xl={8} md={8} className="change-right"></Col>
                    </Row>
                </Modal>
            </div>
            );
    }
}
// function confirm() {
// Modal.confirm({
// title: 'Confirm',
// content: 'Bla bla ...',
// okText: '确认',
// cancelText: '取消',
// });
// }
// ReactDOM.render(
// <div>
// <Changepassword />
// <br />
// <Button onClick={confirm}>Confirm</Button>
// </div>,
// mountNode
// );
