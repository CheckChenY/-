/**
* Created by Migual on 2018/9/20.
*/
import React,{ Component} from 'react';
import { Row, Col, Button, Input, Form } from 'antd';

import './myInformation.css';

import imgoneURL1 from '../assient/userdefine.jpg';
import imgoneURL2 from '../assient/login_register_bk.jpg';
import imgoneURL3 from '../assient/refresh.png';
import imgoneURL4 from '../assient/user.png';
import imgoneURL5 from '../assient/location.png';
import imgoneURL6 from '../assient/email.png';
import imgoneURL7 from '../assient/individuality.png';

const FormItem = Form.Item;
const { TextArea } = Input;

export default class MyInformation extends Component{
constructor(props){
    super(props);
    this.state={
        showModify:false,
    }
    this.handeChange = this.handeChange.bind(this);
}

handeChange(){
    this.setState({
        showModify: !this.state.showModify
    })
}

handleSubmit = (e) => {
    this.setState({
        showModify: !this.state.showModify
    })
  }

render() {
    const self = this,
    { state } = self,    
    { showModify } = state;
    return (
        <div>
            {
                showModify ?(
                <Row>
                    <Col span={1}></Col>
                    <div style={{marginTop: '40px', verticalAlign:'bottom',display:'inline-block'}}>
                        <img  alt='aaa' src={imgoneURL1} className='modify-information-user-picture'/>
                        <Button className='modify-information-button'>
                            <img alt='aaa' src={imgoneURL3} style={{width:'14px', height:'14px'}}/>
                            <span className='modify-information-button-text'>修改头像</span>
                        </Button>
                    </div>                               
                    <div>
                        <Form className='modify-information-form' layout= 'horizontal' onSubmit={this.handleSubmit}>
                        <Col span={1}></Col>
                        <Col span={10}>
                            <FormItem
                                label="昵称"
                            >
                                <Input placeholder="张海城" />
                            </FormItem>
                            <FormItem
                                label="地点"
                            >
                                <Input placeholder="上海" />
                            </FormItem>
                            <FormItem
                                label="联系方式"
                            >
                                <Input placeholder="15423531243@qq.com" />
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" className='modify-information-form-button'>保存</Button>
                            </FormItem>
                            </Col>
                            <Col span={1}></Col>
                            <Col span={10}>
                            <FormItem
                                    label="个性标语"
                                >
                                    <TextArea style={{marginTop:'3px',height:'120px'}} row={10} placeholder="常思人生在世，需当洁身自爱，休作孽；常念岁月如梭，往事不再重来，勿忘我。" />
                                </FormItem>
                            </Col>
                            <Col span={2}></Col>
                        </Form>
                    </div>
                </Row>
            ):(
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
                                <Button className='my-information-right-button' onClick={self.handeChange}>
                                    <img alt='金融搜索' src={imgoneURL3} style={{width:'9px', height:'9px'}}/>
                                    编辑资料
                                </Button>
                            </Col>
                            </Row>
                        </div>                            
                        <div style={{marginTop:'20px'}}>
                            <span className='my-information-right-text'>
                                <img alt='金融搜索' src={imgoneURL4} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                                张海城
                            </span>
                            <span style={{borderLeft:'solid 1px #6b6b6b', margin:'0 15px', height:'25px'}}/>
                            <span className='my-information-right-text'>
                                <img alt='金融搜索' src={imgoneURL5} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                                上海
                            </span>                                    
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span className='my-information-right-text'>
                                <img alt='金融搜索' src={imgoneURL6} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                                15423531243@qq.com  
                            </span>                                  
                        </div>
                        <div style={{display:'inline-block', margin:'20px 54px'}} >
                            <div style={{textAlign:'left', fontSize:'14px'}}>
                            <img alt='金融搜索' src={imgoneURL7} style={{width:'25px', height:'25px',marginRight:'8px'}}/>
                            个性标语    
                        </div>
                            <hr />
                            <div style={{ fontSize:'16px', padding:'0 60px', height:'100px'}}>
                            常思人生在世，需当洁身自爱，休作孽；常念岁月如梭，往事不再重来，勿忘我。    
                            </div>
                        </div>
                    </div>
                </Row>
            )
        }                        
        </div>
    );
    }
}

