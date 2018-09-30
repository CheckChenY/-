
import React,{ Component} from 'react';

import { Col, Input, Button, Row } from 'antd';
// import Header from '../header/Header'

import './Mymessage.css';

// import imgURL1 from '../assient/issuephotoaa.png';
// import imgURL2 from '../assient/like-pink@3x.png';
import imgURL3 from '../assient/userdefine.jpg';
import imgURL4 from '../assient/response.png';
import imgURL5 from '../assient/like.png';
// import imgURL6 from '../assient/layup-response@3x.png';
import imgURL7 from '../assient/attach@3x.png';


const { TextArea } = Input;
// const TabPane = Tabs.TabPane;

class MyMessage extends Component{

    render(){
        const { user } = this.props;
        console.log(user);
        return (
            <div>
                <Row style={{margin:'24px 0 20px 0'}}>
                    <Col span={3} style={{display:'inline-block',textAlign:'center'}}>
                        <img  alt='aaa' src={imgURL3} className='details-my-message-user-icon'/>
                    </Col>
                    <Col span={21}>
                        <div className='details-my-message-time'>2018/8/21</div>
                        <div className='details-my-message-comment-text'>
                            {'轰天'} 回复了{'你的'}评论： {'一直以来，巴菲特都在考虑进一步放宽股票回购政策'}。
                        </div>
                        <div style={{marginTop:'58px'}}>
                                <img  alt='aaa' src={imgURL3} className='details-my-message-user-icon-sm' style={{verticalAlign:'top'}}/>
                                <span style={{marginLeft:'20px',display:'inline-block',width:'92%'}}>
                                    <span className='details-my-message-text'>
                                    {'一直以来，巴菲特都在考虑进一步放宽股票回购政策。'}<br/>
                                    {'一直以来，巴菲特都在考虑进一步放宽股票回购政策。早在2011年9月，巴菲特认为伯克希尔哈撒韦的市值较低'}
                                    </span>
                                    <div style={{marginTop:'30px'}}>
                                        <span style={{cursor:'pointer'}} >
                                            <img alt='金融搜索' src={imgURL4} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-my-message-response'>回复</div>
                                        </span>                                            
                                        <span style={{cursor:'pointer'}}>
                                            <img alt='金融搜索' src={imgURL5} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-my-message-number'>195</div>
                                        </span>
                                        {1?'':(
                                            <div className='details-my-message-add-response'>
                                                <TextArea row={8} style={{height:'45px', border:'none'}}/>                                            
                                                <Button className='details-my-message-add-response-button'>回复</Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className='details-my-message-title'>
                                        <img alt='金融搜索' src={imgURL7} style={{width:'13px', height:'13px', marginLeft:'15px', verticalAlign:'middle'}}/>
                                        <span className='details-my-message-title-text'>
                                            {'巴菲特准备回购自家股票 伯克希尔站上30万美元'}
                                        </span>
                                    </div>
                                </span>
                        </div>                                        
                    </Col>
                </Row>
                <hr style={{border: 'solid 1px #dadada'}}/>
                <Row style={{margin:'24px 0 20px 0'}}>
                    <Col span={3} style={{display:'inline-block',textAlign:'center'}}>
                        <img  alt='aaa' src={imgURL3} className='details-my-message-user-icon'/>
                    </Col>
                    <Col span={21}>
                        <div className='details-my-message-time'>2018/8/21</div>
                        <div className='details-my-message-comment-text'>
                            {'轰天'} 回复了{'你的'}评论： {'一直以来，巴菲特都在考虑进一步放宽股票回购政策'}。
                        </div>
                        <div style={{marginTop:'58px'}}>
                                <img  alt='aaa' src={imgURL3} className='details-my-message-user-icon-sm' style={{verticalAlign:'top'}}/>
                                <span style={{marginLeft:'20px',display:'inline-block',width:'92%'}}>
                                    <span className='details-my-message-text'>
                                    {'一直以来，巴菲特都在考虑进一步放宽股票回购政策。'}<br/>
                                    {'一直以来，巴菲特都在考虑进一步放宽股票回购政策。早在2011年9月，巴菲特认为伯克希尔哈撒韦的市值较低'}
                                    </span>
                                    <div style={{marginTop:'30px'}}>
                                        <span style={{cursor:'pointer'}} >
                                            <img alt='金融搜索' src={imgURL4} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-my-message-response'>回复</div>
                                        </span>                                            
                                        <span style={{cursor:'pointer'}}>
                                            <img alt='金融搜索' src={imgURL5} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-my-message-number'>195</div>
                                        </span>
                                        {0?'':(
                                            <div className='details-my-message-add-response'>
                                                <TextArea row={8} style={{height:'45px', border:'none'}}/>                                            
                                                <Button className='details-my-message-add-response-button'>回复</Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className='details-my-message-title'>
                                        <img alt='金融搜索' src={imgURL7} style={{width:'13px', height:'13px', marginLeft:'15px', verticalAlign:'middle'}}/>
                                        <span className='details-my-message-title-text'>
                                            {'巴菲特准备回购自家股票 伯克希尔站上30万美元'}
                                        </span>
                                    </div>
                                </span>
                        </div>                                        
                    </Col>
                </Row>
                <hr style={{border: 'solid 1px #dadada'}}/>
                <Row style={{margin:'24px 0 20px 0'}}>
                    <Col span={3} style={{display:'inline-block',textAlign:'center'}}>
                        <img  alt='aaa' src={imgURL3} className='details-my-message-user-icon'/>
                    </Col>
                    <Col span={21}>
                        <div className='details-my-message-time'>2018/8/21</div>
                        <div className='details-my-message-comment-text'>
                            {'轰天'} 回复了{'你的'}评论： {'一直以来，巴菲特都在考虑进一步放宽股票回购政策'}。
                        </div>
                        <div style={{marginTop:'58px'}}>
                                <img  alt='aaa' src={imgURL3} className='details-my-message-user-icon-sm' style={{verticalAlign:'top'}}/>
                                <span style={{marginLeft:'20px',display:'inline-block',width:'92%'}}>
                                    <span className='details-my-message-text'>
                                    {'一直以来，巴菲特都在考虑进一步放宽股票回购政策。'}<br/>
                                    {'一直以来，巴菲特都在考虑进一步放宽股票回购政策。早在2011年9月，巴菲特认为伯克希尔哈撒韦的市值较低'}
                                    </span>
                                    <div style={{marginTop:'30px'}}>
                                        <span style={{cursor:'pointer'}} >
                                            <img alt='金融搜索' src={imgURL4} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-my-message-response'>回复</div>
                                        </span>                                            
                                        <span style={{cursor:'pointer'}}>
                                            <img alt='金融搜索' src={imgURL5} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-my-message-number'>195</div>
                                        </span>
                                        {1?'':(
                                            <div className='details-my-message-add-response'>
                                                <TextArea row={8} style={{height:'45px', border:'none'}}/>                                            
                                                <Button className='details-my-message-add-response-button'>回复</Button>
                                            </div>
                                        )}
                                    </div>
                                    <div className='details-my-message-title'>
                                        <img alt='金融搜索' src={imgURL7} style={{width:'13px', height:'13px', marginLeft:'15px', verticalAlign:'middle'}}/>
                                        <span className='details-my-message-title-text'>
                                            {'巴菲特准备回购自家股票 伯克希尔站上30万美元'}
                                        </span>
                                    </div>
                                </span>
                        </div>                                        
                    </Col>
                </Row>
                <hr style={{border: 'solid 1px #dadada'}}/>
            </div>
        )
    } 
}

export default MyMessage;
