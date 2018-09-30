
import React,{ Component} from 'react';
import { Row, Col, Tabs } from 'antd';

import './myComments.css';
import imgoneURL1 from '../assient/userdefine.jpg';
import imgoneURL8 from '../assient/response.png';
import imgoneURL9 from '../assient/like.png';


const TabPane = Tabs.TabPane;

class MyComments extends Component{
    
        render() {
            const self = this,
            { comment=[] ,userNickname} = self.props;
            return (
            <div>
              <div className='my-comments-and-message'>
                <Tabs 
                    defaultActiveKey="1"
                    tabPosition='top'
                >
                  <TabPane tab={<div>我的评论</div>} key="1">
                    <div style={{overflowY:'auto', height:'410px'}}>

                    {
                        comment.map((show,i)=>(
                            <div key={i}>
                                <Row >
                                    <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                                        <img  alt='aaa' src={imgoneURL1} className="my-comments-user-picture"/>
                                        <div className='my-comments-ID'>ID:{userNickname}</div>
                                    </Col>
                                    <Col span={20}>
                                        <div className='my-comments-time'>一小时前</div>
                                        <div className='my-comments-text'>
                                            <div>
                                                {show.info_title}
                                            </div>
                                            <div>
                                                {show.content}
                                            </div>
                                        </div>
                                        <div>
                                            <span>
                                                <img alt='金融搜索' src={imgoneURL8} style={{width:'23px', height:'23px'}}/>
                                                <div className='my-comments-response'>回复</div>
                                            </span>
                                            
                                            <span>
                                                <img alt='金融搜索' src={imgoneURL9} style={{width:'23px', height:'23px'}}/>
                                                <div className='my-comments-number'>195</div>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                            </div>
                        ))
                    }
                    </div>
                  </TabPane>
                  <TabPane tab={<div>我的消息</div>} key="2">
                    <div style={{overflowY:'auto', height:'410px'}}>
                    {
                        comment.map((show,i)=>(
                            <div key={i}>
                                <Row style={{margin:'24px 0 40px' }}>
                                    <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                                        <img  alt='aaa' src={imgoneURL1} className="my-message-user-picture"/>
                                    </Col>
                                    <Col span={20}>
                                        <div className='my-message-date'>2016/8/21</div>
                                        <div className='my-message-reponse-title'>
                                            {'轰天'} 回复了你的评论：{'一直以来，巴菲特都在考虑进一步放宽股票回购政策。'}
                                        </div>
                                        <div style={{marginTop:'50px'}}>
                                            <Row>
                                                <Col span={3}>
                                                    <img  alt='aaa' src={imgoneURL1} className="my-message-user-picture-sm"/>
                                                </Col>
                                                <Col span={21}>
                                                    <div className='my-message-text'>
                                                        <div>
                                                            {show.info_title}
                                                        </div>
                                                        <div>
                                                            {show.content}
                                                        </div>
                                                    </div>
                                                    <div style={{marginTop:'30px'}}>
                                                        <span style={{cursor:'pointer'}}>
                                                            <img alt='金融搜索' src={imgoneURL8} style={{width:'23px', height:'23px'}}/>
                                                            <div className='my-message-response'>回复</div>
                                                        </span>                                                    
                                                        <span style={{cursor:'pointer'}}>
                                                            <img alt='金融搜索' src={imgoneURL9} style={{width:'23px', height:'23px'}}/>
                                                            <div className='my-message-number'>195</div>
                                                        </span>
                                                    </div>                                   
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>
                            </div>
                        ))
                    }    
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
            );
    }
}

export default MyComments;
