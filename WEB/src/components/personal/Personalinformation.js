/**
* Created by Migual on 2018/9/19.
*/
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Tabs} from 'antd';

import { getLoading } from './action'

import MyComments from './myComments';
import MyInformation from './myInformation';

import './Personalinformation.css';

import imgoneURL1 from '../assient/userdefine.jpg';

const TabPane = Tabs.TabPane;

class Changepassword extends Component{

        constructor(props){
            super(props)
            this.state={
                visible: false,
                tabBol:false,
            }
        }

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
            const self = this,
            { props,state } = self,
            { getLoading , state:selfState } = props,
            { user,comment=[] } = selfState,
            { data } = user,
            { userId,userNickname } = data,
            { tabBol } = state;

            return (
            <div>
                <Button  onClick={this.showModal} className="my-information">
                    我的信息
                </Button>
                <Modal 
                    title="我的信息"
                    style={{ top: 20}}
                    visible={this.state.visible}
                    onCancel={this.hideModal}
                    footer={null}
                    width={720}
                >
                <div className='my-information-body'>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition='left'
                        onChange={
                            ()=>getLoading(userId)
                        }
                        >
                        <TabPane 
                            tabBol={tabBol}
                            tab={
                                <span>
                                    <div style={{backgroundColor: '#ebedef', paddingBottom:'28px' }}>
                                        <img  alt='aaa' src={imgoneURL1} className="my-information-left-user-picture"/>
                                        <div className='my-information-left-text'>ID: {data.userAccount}</div>
                                    </div>
                                    <div className='my-information-left-tab' >个人信息</div>
                                </span>
                            }
                                key="1"
                            >
                            <MyInformation  />
                        </TabPane>                           
                        <TabPane 
                            tab={
                                <div className='my-information-left-tab' style={{marginTop:'8px'}}>评论</div>
                            } 
                            key="2"
                        >
                            <MyComments 
                            comment={comment}
                            userNickname={userNickname}
                            />
                        </TabPane>
                    </Tabs>
                    </div>
                </Modal>                
            </div>
        );
    }
}

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
  })
  
  export default connect(mapDispatchToProps,{
    getLoading
  })(Changepassword);

