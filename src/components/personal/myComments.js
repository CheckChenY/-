/**
* Created by Migual on 2018/9/20.
*/
import React,{ Component} from 'react';
import { Row, Col, Tabs } from 'antd';

import './myComments.css';
import imgoneURL1 from '../assient/userdefine.jpg';
import imgoneURL8 from '../assient/response.png';
import imgoneURL9 from '../assient/like.png';


const TabPane = Tabs.TabPane;

export default class MyComments extends Component{
    
        render() {
            return (
            <div>
              <div className='my-comments'>
                <Tabs 
                    defaultActiveKey="1"
                    tabPosition='top'
                >
                  <TabPane tab={<div>我的评论</div>} key="1">
                    <div style={{overflowY:'auto', height:'410px'}}>
                      <Row >
                          <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                              <img  alt='aaa' src={imgoneURL1} className="my-comments-user-picture"/>
                              <div className='my-comments-ID'>ID:{'张海城'}</div>
                          </Col>
                          <Col span={20}>
                              <div className='my-comments-time'>一小时前</div>
                              <div className='my-comments-text'>
                                  一直以来，巴菲特都在考虑进一步放宽股票回购政策。<br/>一直以来，巴菲特都在考虑进一步放宽股票回购政策。早在2011年9月，巴菲特认为伯克希尔哈撒韦的市值较低
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
                      <Row >
                          <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                              <img  alt='aaa' src={imgoneURL1} className="my-comments-user-picture"/>
                              <div className='my-comments-ID'>ID:{'张海城'}</div>
                          </Col>
                          <Col span={20}>
                              <div className='my-comments-time'>一小时前</div>
                              <div className='my-comments-text'>
                                  一直以来，巴菲特都在考虑进一步放宽股票回购政策。<br/>一直以来，巴菲特都在考虑进一步放宽股票回购政策。早在2011年9月，巴菲特认为伯克希尔哈撒韦的市值较低
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
                      <Row >
                          <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                              <img  alt='aaa' src={imgoneURL1} className="my-comments-user-picture"/>
                              <div className='my-comments-ID'>ID:{'张海城'}</div>
                          </Col>
                          <Col span={20}>
                              <div className='my-comments-time'>一小时前</div>
                              <div className='my-comments-text'>
                                  一直以来，巴菲特都在考虑进一步放宽股票回购政策。<br/>一直以来，巴菲特都在考虑进一步放宽股票回购政策。早在2011年9月，巴菲特认为伯克希尔哈撒韦的市值较低
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
                  </TabPane>
                  <TabPane tab={<div>我的消息</div>} key="2">
                    {/* 设计稿中为空白 */}
                  </TabPane>
                </Tabs>
              </div>
            </div>
            );
    }
}

