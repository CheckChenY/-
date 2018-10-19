
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { getHKDetail } from '../stockNews/action';
import { getMessage  } from './action';
import { Row, Col, Tabs } from 'antd';

import './myComments.css';
import imgoneURL1 from '../assient/userdefine.jpg';
// import imgoneURL8 from '../assient/response.png';
// import imgoneURL9 from '../assient/like.png';

import imgURLone from '../assient/link.png';


const TabPane = Tabs.TabPane;

class MyComments extends Component{

    componentDidMount(){
        const self = this,
        { getMessage,state } = self.props,
        { userId } = state;
        getMessage(userId)
    }
    render() {
        const self = this,
        { comment=[] ,getHKDetail,state} = self.props,
        { myMessageList=[] ,userId, userNickname  } = state;
        console.log(myMessageList);
        return (
            <div>
                <div className='my-comments-and-message'>
                <Tabs 
                    defaultActiveKey="1"
                    tabPosition='top'
                    className='comment-and-message-summarize'
                >
                    <TabPane tab={<div>{intl.get('comment_mine')}</div>} key="1">
                        <div style={{overflowY:'auto', height:'410px'}}>
                        {
                            comment.map((show,i)=>(
                                <div key={i}>
                                    <Row >
                                        <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                                            <img  alt='aaa' src={imgoneURL1} className="my-comments-user-picture"/>
                                            <div className='my-comments-ID'>ID:{userNickname?userNickname:(userId ? userId : '刘德华')}</div>
                                        </Col>
                                        <Col span={20}>
                                            <div className='my-comments-time'>{show.com_time}</div>
                                            <div className='my-comments-text'>
                                                <div>
                                                    {show.content}
                                                </div>
                                                <div 
                                                    className="my-comments-text-all"
                                                    onClick={
                                                        ()=>getHKDetail(this.props,show.topic_id)
                                                    }
                                                >
                                                    <img alt='链接' src={imgURLone}/>
                                                    <span className="my-comments-text-title">{show.info_title}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr style={{border: 'solid 1px #E8E8E8'}}/>
                                </div>
                            ))
                        }
                        </div>
                    </TabPane>
                    <TabPane tab={<div>{intl.get('message_mine')}</div>} key="2">
                        <div style={{overflowY:'auto', height:'410px'}}>
                        {
                            myMessageList.map((show,i)=>(
                                <div key={i}>
                                    <Row style={{margin:'24px 0 24px' }}>
                                        <Col span={4} style={{display:'inline-block',textAlign:'center'}}>
                                            <img  alt='aaa' src={imgoneURL1} className="my-message-user-picture"/>
                                            <div className='my-message-ID'>ID:{/*show?show.news_id:''*/}{userNickname?userNickname:(userId ? userId : '刘德华')}</div>
                                        </Col>
                                        <Col span={20}>
                                            <div className='my-message-date'>{show?show.time:'2016/8/21'}</div>
                                            <div className='my-message-reponse-title'>
                                                {show?show.user_nickname:''} {intl.get('responded_your_comment')}
                                                <span style={{fontWeight:'500'}}>{show?show.comment:''}</span>
                                            </div>
                                            <div 
                                                className="my-message-text-all"
                                                onClick={
                                                    ()=>getHKDetail(this.props,show.topic_id)
                                                }
                                            >
                                                <img alt='链接' src={imgURLone}/>
                                                <span className="my-message-text-title">{show.title}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr style={{border: 'solid 1px #E8E8E8'}}/>
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
const mapDispatchToProps = state => ({
    state:state.checkReducer
})

export default connect(mapDispatchToProps,{
    getHKDetail,getMessage
})(MyComments);
// export default MyComments;
