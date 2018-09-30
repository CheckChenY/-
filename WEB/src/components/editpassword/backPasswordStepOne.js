import React,{ Component} from 'react';
import { connect } from 'react-redux';

import { hideModal ,nextStepTwo,showModal} from './action'

import { Row, Col, Modal, Button } from 'antd';

import './backPasswordStepOne.css';

class BackPasswordStepOne extends Component{

    constructor(props){
        super(props);
        this.state={
            email:'123456@qq.com',
            userName:'123'
        }
        // this.changeEmail = this.changeEmail.bind(this);
        this.changeCode = this.changeCode.bind(this);
    }

    // changeEmail=(e)=>{
    //     const email = e.target.value;
    //     this.setState({
    //         email:email
    //     })
    // }
    changeCode=(e)=>{
        const code = e.target.value;
        this.setState({
            code:code
        })
    }

    render() {
        const self = this,
        { props,state:selfState} = self,
        { code } = selfState,
        { state,hideModal,nextStepTwo,showModal} = props,
        { imgSrc,visible,uuid } = state;
        return (
        <div>
            
            <Modal
                title="找回密码"
                wrapClassName ="confirm-base"
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
                        <Row>
                            <Col xl={6} md={6}  className="text-center">
                                <span className="confirm-number-one">
                                    1
                                </span>&nbsp;
                                <span>确认账号</span> 
                            </Col>
                            <Col xl={3} md={3}>
                                <span className="confirm-line"></span>
                            </Col>
                            <Col xl={6} md={6}  className="text-center">
                                <span className="confirm-number-two">
                                    2
                                </span>&nbsp;
                                <span>重置密码</span> 
                            </Col>
                            <Col xl={3} md={3}>
                                <span className="confirm-line"></span>
                            </Col>
                            <Col xl={6} md={6}  className="text-center">
                                <span className="confirm-number-three">
                                    3
                                </span>&nbsp;
                                <span>重置成功</span> 
                            </Col>
                        </Row>

                    </Col>
                    <Col xl={3} md={3}></Col>
                </Row>
                <br/>
                <Row className="confirm">
                    <Col xl={6} md={6} className="confirm-left"></Col>
                    <Col xl={12} md={12}>
                        <span className="confirm-email" placeholder='939447567@qq.com'>请输入邮箱账号</span> 
                    </Col>
                    <Col xl={6} md={6} className="confirm-right"></Col>
                </Row>
                <Row className="confirm">
                    <Col xl={6} md={6} className="confirm-left"></Col>
                    <Col xl={12} md={12}>
                        <input className="confirm-email-text"/> 
                    </Col>
                    <Col xl={6} md={6} className="confirm-right"></Col>
                </Row>
                <br/>
                <Row className="confirm">
                <Col xl={6} md={6} className="confirm-left"></Col>
                    <Col xl={12} md={12}>
                        <span className="confirm-identyno">验证码</span> 
                    </Col>
                    <Col xl={6} md={6} className="confirm-right"></Col>
                </Row>
                <Row className="confirm">
                    <Col xl={6} md={6} className="confirm-left"></Col>
                    <Col xl={8} md={8}>
                        <input onChange={self.changeCode} className="confirm-identyno-text"/> 
                    </Col>
                    <Col xl={4} md={4} className="confirm-identyno-picture">
                        <img alt='验证码' onClick={showModal} src={"data:image/jpeg;base64,"+imgSrc} />
                    </Col>
                    <Col xl={6} md={6} className="confirm-right"></Col>
                </Row>
                <br/>
                <Row className="confirm">
                    <Col xl={6} md={6} className="confirm-left"></Col>
                    <Col xl={12} md={12} className="confirm-next">
                        <Button type="primary" onClick={()=>nextStepTwo(uuid,code)}>
                            下一步
                        </Button>
                    </Col>
                    <Col xl={6} md={6} className="confirm-right"></Col>
                </Row>
            </Modal>
        </div>
        );
}
}


// const mapDispatchToProps = (state) => ({
    
// })

// const mapStateToProps = (state, ownProps) => {
//     return {
//         cart: state.cart
//     }
// }

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
  })

export default connect(mapDispatchToProps,{
    nextStepTwo,
    hideModal,
    showModal,
})(BackPasswordStepOne);
// export default Confirmaccount;