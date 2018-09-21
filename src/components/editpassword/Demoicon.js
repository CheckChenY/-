/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
// import { Button} from 'antd';
import { Modal, Button } from 'antd';
// import { Row, Col } from 'antd';
// import { Timeline, Icon } from 'antd';
// import { Timeline } from 'antd';
// import { Icon } from 'antd';
import Changepassword from './Changepassword'
import './Demoicon.css';
import imgoneURL from '../assient/invalid-name.png';

// const modal = Modal.info();

// modal.update({
//   title: '修改的标题',
//   content: '修改的内容',
// });

// modal.destroy();



// function info() {
//     Modal.info({
//       title: 'This is a notification message',
//       content: (
//         <div>
//           <p>some messages...some messages...</p>
//           <p>some messages...some messages...</p>
//         </div>
//       ),
//       onOk() {},
//     });
//   }




export default class Demoicon extends Component{
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
                练习
            </Button>
            {/* <Button onClick={info}>123</Button> */}
            <Modal
                className="abc"
                title="找回密码"
                // wrapClassName ="base" 
                iconType= {<img alt='aaa' src={imgoneURL} />}

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
                // footer={[
                //     null
                // ]}
            >
                <div className="aaa">
                    <span className="state one">我是第一个</span>
                    <span className="state two">我是第二个</span>
                    <span className="state three">我是第三个</span>
                    <input />
                    <Changepassword />

                </div>



            </Modal>
        </div>
        );
    }
}
