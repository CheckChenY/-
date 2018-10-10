
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Tabs} from 'antd';

import { getLoading } from './action'

import intl from 'react-intl-universal';

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
                    {intl.get('information_myself')}
                </Button>
                <Modal 
                    title={intl.get('information_myself')}
                    style={{ top: 70 }}
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
                                    <div className='my-information-left-tab' >{intl.get('information_mine')}</div>
                                </span>
                            }
                                key="1"
                            >
                            <MyInformation  />
                        </TabPane>                           
                        <TabPane 
                            tab={
                                <div className='my-information-left-tab' style={{marginTop:'8px'}}>{intl.get('comment')}</div>
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

