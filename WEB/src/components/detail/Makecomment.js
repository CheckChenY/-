
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { subCommentContent } from './action';

import { Col, Input, Button, Row } from 'antd';
// import Header from '../header/Header'
import AllComments from './Allcomments';
// import MyComments from './Mycomments';
// import MyMessage from './Mymessage';

import './Makecomment.css';

import imgURL1 from '../assient/userdefine.jpg';


const { TextArea } = Input;
// const TabPane = Tabs.TabPane;

class MakeComment extends Component{
    constructor(props){
        super(props);
        this.state = {
            txt : ''
        }
        this.handeChangeTxt = this.handeChangeTxt.bind(this);
    }

    handeChangeTxt = (e) => {
        this.setState({
            txt: e.target.value
        })
    }
    
    render(){
        const self = this,
            { props,state:selfState } = self,
            { txt } = selfState,
            { subCommentContent ,state} = props,
            { userId } = state;
        return (
            <div>
                <hr style={{border: 'solid 1px #E8E8E8'}}/>
                    <div style={{marginTop:'70px'}}>
                        <Row>
                            <Col span={3}>
                                <div style={{width:'100%', textAlign:'center'}}>
                                    <img  alt='aaa' src={imgURL1} className='details-user-icon'/>
                                    <div className='details-user-ID'>ID: {userId}</div>
                                </div>
                            </Col>
                            <Col span={21}>
                                <div style={{width:'100%',height:'218px'}} className='details-add-comment'>
                                    <TextArea row={8}  
                                    onChange={this.handeChangeTxt}
                                    style={{height:'135px', border:'none'}}
                                    />
                                    <hr style={{border: 'solid 1px #E8E8E8'}}/>
                                    <Button
                                    type="primary" 
                                    onClick={
                                        ()=>subCommentContent(userId,txt)
                                    }
                                    className='details-add-comment-button'
                                     >{intl.get('make_comment')}</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style={{margin:'70px 0 125px', width:'100%'}}>
                        {/* <Tabs defaultActiveKey='1' className='comment-summarize'>
                            <TabPane tab={intl.get('all_comments')} key='1'>
                                <AllComments/>
                            </TabPane>
                            {/* <TabPane tab='我的评论' key='2'>
                                <MyComments/>
                            </TabPane>
                            <TabPane tab='我的信息' key='3'>
                                <MyMessage/>
                            </TabPane> */}
                        {/* </Tabs> */}
                        <div >
                            <div style={{borderRight:'4px solid #f56f6f', display:'inline'}}/>
                            <div className='all-comment-title'>{intl.get('all_comments')}</div> 
                            <hr style={{border: 'solid 1px #E8E8E8' ,marginTop:'20px'}}/>
                        </div>
                        <AllComments/>
                    </div>
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    subCommentContent
})(MakeComment);
// export default MakeComment;
