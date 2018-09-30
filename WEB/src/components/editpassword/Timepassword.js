
import React,{ Component} from 'react';
// import { Button} from 'antd';
import { Modal, Button } from 'antd';
// import { Row, Col } from 'antd';
import { Timeline, Icon } from 'antd';
import './Timepassword.css';
import imgoneURL from '../assient/invalid-name.png';

export default class Timepassword extends Component{
    state = { visible: false }
        showModal = () => {
            this.setState({
                visible: true,
            });
        }
        hideModal = () => {
            this.setState({
                visible: false,
                // visible: true,
            });
        }



        render() {
            return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    {/* <img alt='aaa' src={imgoneURL} /> */}
                    时间轴确认账号
                </Button>
                <Modal
                    title="找回密码"

                    // wrapClassName ="base" 
                    iconType= {<img alt='aaa' src={imgoneURL} />}
                    // iconType= "url(../assient/invalid-name.png)"
                    // iconType= "clock-circle-o"

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
                    // closable={false}
                    // footer={[
                    //     null
                    // ]}
                >
                    <Timeline mode="vertical">
                        <Timeline.Item
                            dot={
                                
                                <span className="time-number-one">1</span>
                                
                            } 
                            color="pink"
                        >
                            确认账号
                        </Timeline.Item>
                        <Timeline.Item
                            dot={
                                <Icon type="apple" 
                                theme="outlined" 
                                style={{ 
                                    fontSize: '16px',
                                    text:'1'
                                    }} 
                                />
                                

                            } 
                            color="blue"
                        >重置密码</Timeline.Item>
                        <Timeline.Item 
                            dot={
                                <Icon type="clock-circle-o" 
                                style={{ 
                                    fontSize: '16px'
                                    }} 
                                />

                            } 
                            color="red"
                        >
                            重置成功
                        </Timeline.Item>
                    </Timeline>
                </Modal>
            </div>
            );
    }
}
