import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Modal,Row, Col } from 'antd';
import './backPasswordStepTre.css';
// import imgoneURL from '../assient/invalid-name2.png';
import imgtwoURL from '../assient/reset-success.png';
// import BackPasswordStepTwo from './backPasswordStepTwo';

import { hideModal } from './action'

class BackPasswordStepTre extends Component{
        render() {
            const self = this,
            { hideModal,state } = self.props,
            { visible } = state;
            return ( 
                <div>
                <Modal
                    title="找回密码"
                    wrapClassName ="resets-base"
                    // iconType= {<img alt='找回密码' src={imgoneURL} />}
                    visible={visible}
                    onOk={hideModal}
                    onCancel={hideModal}
                    okText="确认"
                    cancelText="取消"
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
                            <Row>
                                <Col xl={6} md={6} className="text-center">
                                    <span className="resets-number-one">
                                        1
                                    </span>&nbsp;
                                    <span>确认账号</span> 
                                </Col>
                                <Col xl={3} md={3}>
                                    <span className="reset-line"></span>
                                </Col>
                                <Col xl={6} md={6} className="text-center">
                                    <span className="resets-number-two">
                                        2
                                    </span>&nbsp;
                                    <span>重置密码</span> 
                                </Col>
                                <Col xl={3} md={3}>
                                    <span className="reset-line"></span>
                                </Col>
                                <Col xl={6} md={6}  className="text-center">
                                    <span className="resets-number-three">
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
                        <Col xl={10} md={10} className="reset-left"></Col>
                        <Col xl={4} md={4}>
                            <img alt='修改成功' className="reset-success-picture" src={imgtwoURL} /> 
                        </Col>
                        <Col xl={10} md={10} className="reset-right"></Col>
                    </Row>
                    <Row className="reset">
                        <Col xl={9} md={9} className="reset-left"></Col>
                        <Col xl={7} md={7}>
                            <span className="reset-success">恭喜密码修改成功！</span> 
                        </Col>
                        <Col xl={8} md={8} className="reset-right"></Col>
                    </Row>
                    <br/>
                    <Row className="reset">
                        <Col xl={7} md={7} className="reset-left"></Col>
                        <Col xl={10} md={10} className="reset-next">
                            <button 
                                className="reset-return"
                                onClick={hideModal}
                            >
                                <span className="reset-return-text">返回（5s后跳回首页）</span>
                            </button> 
                        </Col>
                        <Col xl={7} md={7} className="reset-right"></Col>
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
    hideModal,
})(BackPasswordStepTre);
// export default BackPasswordStepTre;

