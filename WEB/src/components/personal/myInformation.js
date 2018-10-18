
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

// import { getLoading } from './action'

import { userInfoUpdate,getLoading } from './action';
import { Row, Col, Button, Input, Form } from 'antd';

import './myInformation.css';

import imgoneURL1 from '../assient/userdefine.jpg';
import imgoneURL2 from '../assient/myInformationBG/my_information_bg.jpg';
import imgoneURL3 from '../assient/edit.png';
import imgoneURL4 from '../assient/user.png';
import imgoneURL5 from '../assient/location.png';
import imgoneURL6 from '../assient/email.png';
import imgoneURL7 from '../assient/individuality.png';
import imgoneURL8 from '../assient/change.png';

const FormItem = Form.Item;
const { TextArea } = Input;

class MyInformation extends Component{
    constructor(props){
        super(props);
        this.state={
            // userEmailSave:'',
            // userNicknameSave:'',
            // userAddressSave:'',
            // userSloganSave:'',
            Bool:true
            // getLoadingBool:false,
        }
        this.changeData = this.changeData.bind(this);
        // this.handeChangeEmail = this.handeChangeEmail.bind(this);
        // this.handeChangeNickname = this.handeChangeNickname.bind(this);
        // this.handeChangeAddress = this.handeChangeAddress.bind(this);
        // this.handeChangeSlogan = this.handeChangeSlogan.bind(this);
    }


    componentDidMount(){
        const self = this,
        { getLoading,state } =  self.props,
        { userId } = state;
        // { data } = user,
        // { userId } = data;
        getLoading(userId);
    }

    changeData=()=>{
        this.setState({
            Bool:!this.state.Bool
        })
    }
    render() {
        const self = this,
        { state ,props } = self,
        { 
            userInfoUpdate,
            state:selfState 
        } = props,
        { userAccount,userEmail,userNickname,userAddress,userSlogan} = selfState,
        { Bool} = state;
        return (
            <div>
                {
                Bool ? (
                    <Row>   
                    <div className='my-information-right'>
                        <img alt='金融搜索' src={imgoneURL2} className='my-information-right-BG'/>
                        <div>
                            <Row>
                            <Col span={5}></Col>
                            <Col span={14}>
                                <div className='my-infromation-right-user-picture-BG'>
                                    <img  alt='aaa' src={imgoneURL1} className='my-information-right-user-picture'/>     
                                </div>
                            </Col>
                            <Col span={5} >
                                <Button 
                                className='my-information-right-button'
                                onClick={
                                    this.changeData
                                }
                                >
                                    <img alt='金融搜索' src={imgoneURL3} style={{width:'9px', height:'9px', margin:'4px 4px 0 0', verticalAlign:'top'}}/>
                                    {intl.get('edit_information')}
                                </Button>
                            </Col>
                            </Row>
                        </div>                            
                        <div style={{marginTop:'20px'}}>
                            <span className='my-information-right-text'>
                                <img alt='金融搜索' src={imgoneURL4} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                                {userNickname}
                            </span>
                            <span style={{borderLeft:'solid 1px #6b6b6b', margin:'0 15px', height:'25px'}}/>
                            <span className='my-information-right-text'>
                                <img alt='金融搜索' src={imgoneURL5} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                                {userAddress}   
                            </span>                                    
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span className='my-information-right-text'>
                                <img alt='金融搜索' src={imgoneURL6} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                                {userEmail}   
                            </span>                                  
                        </div>
                        <div style={{display:'inline-block', margin:'20px 50px', width:'500px'}} >
                            <div style={{textAlign:'left', fontSize:'14px'}}>
                            <img alt='金融搜索' src={imgoneURL7} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                            {intl.get('slogan')}    
                        </div>
                            <hr style={{border: 'solid 1px #E8E8E8'}}/>
                            <div style={{ fontSize:'16px', padding:'25px 60px', height:'100px'}}>
                            {userSlogan}   
                            </div>
                        </div>
                    </div>
                </Row>
                ):(
                    <Row>
                        <Col span={1}></Col>
                        <div style={{marginTop: '40px', verticalAlign:'bottom',display:'inline-block'}}>
                            <img  alt='aaa' src={imgoneURL1} className='modify-information-user-picture'/>
                            <Button className='modify-information-button'>
                                <img alt='aaa' src={imgoneURL8} style={{width:'14px', height:'12px',margin:'2px 4px 0 0', verticalAlign:'top'}}/>
                                <span className='modify-information-button-text'>
                                    {intl.get('modify_head')}
                                </span>
                            </Button>
                        </div>                               
                        <div>
                            <Form className='modify-information-form' layout= 'horizontal'>
                            <Col span={1}></Col>
                            <Col span={10}>
                                <FormItem
                                    label={intl.get('nick_name')}
                                >
                                    <Input ref={input => {
                                        this.userNickname = input;
                                    }} 
                                    defaultValue={userNickname} />
                                </FormItem>
                                <FormItem
                                    label={intl.get('location')}
                                >
                                    <Input 
                                    ref={input=>{
                                        self.userAddress=input
                                    }}
                                    // onChange={this.handeChangeAddress} 
                                    defaultValue={userAddress} />
                                </FormItem>
                                <FormItem
                                    label={intl.get('link_way')}
                                >
                                    <Input 
                                    ref={input=>{
                                        self.userEmail=input
                                    }}
                                    // onChange={this.handeChangeEmail} 
                                    defaultValue={userEmail} />
                                </FormItem>
                                <FormItem>
                                    <Row>
                                        <Col span={11}>
                                            <Button 
                                                type="primary" 
                                                onClick={()=>userInfoUpdate(self,userAccount,userNickname,)}
                                                htmlType="submit" 
                                                className='modify-information-form-button'
                                            >
                                                {intl.get('save')}
                                            </Button>
                                        </Col>
                                        <Col span={2}></Col>
                                        <Col span={11}>
                                            <Button 
                                                type="primary"
                                                htmlType="submit" 
                                                className='modify-information-form-button-cancel'
                                                onClick={
                                                    this.changeData
                                                }
                                            >
                                                {intl.get('cancel')}
                                            </Button>
                                        </Col>
                                    </Row>
                                    
                                    
                                </FormItem>
                                </Col>
                                <Col span={1}></Col>
                                <Col span={10}>
                                <FormItem
                                        label={intl.get('slogan')}
                                    >
                                        <TextArea 
                                        ref={TextArea=>{
                                            self.userSlogan=TextArea
                                        }}
                                        // onChange={this.handeChangeSlogan} 
                                        style={{marginTop:'3px',height:'120px'}} row={10} defaultValue={userSlogan}  />
                                    </FormItem>
                                </Col>
                                <Col span={2}></Col>
                            </Form>
                        </div>
                    </Row>
                
                )
            }                        
            </div>
        );
        }
    }


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
  })
  
  export default connect(mapDispatchToProps,{
    userInfoUpdate,getLoading
  })(MyInformation);

