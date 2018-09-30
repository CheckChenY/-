
import React,{ Component} from 'react';
import { connect } from 'react-redux';

import { subCommentContent } from './action';

import { Col, Input, Button, Tabs, Row } from 'antd';
// import Header from '../header/Header'
import AllComments from './Allcomments';
// import MyComments from './Mycomments';
// import MyMessage from './Mymessage';

import './Makecomment.css';

import imgURL1 from '../assient/userdefine.jpg';


const { TextArea } = Input;
const TabPane = Tabs.TabPane;

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
            { user } = state,
            { data } = user,
            { userId } = data;
        return (
            <div>
                <hr style={{border: 'solid 1px #dadada'}}/>
                    <div style={{marginTop:'70px'}}>
                        <Row>
                            <Col span={3}>
                                <div style={{width:'100%', textAlign:'center'}}>
                                    <img  alt='aaa' src={imgURL1} className='details-user-icon'/>
                                    <div className='details-user-ID'>ID: {'张海城'}</div>
                                </div>
                            </Col>
                            <Col span={21}>
                                <div style={{width:'100%',height:'218px'}} className='details-add-comment'>
                                    <TextArea row={8}  
                                    onChange={this.handeChangeTxt}
                                    style={{height:'135px', border:'none'}}
                                    />
                                    <hr style={{border: 'solid 1px #dadada'}}/>
                                    <Button 
                                    onClick={
                                        ()=>subCommentContent(userId,txt)
                                    }
                                    className='details-add-comment-button'
                                     >发表评论</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div style={{margin:'70px 0 125px', width:'100%'}}>
                        <Tabs defaultActiveKey='1' className='comment-summarize'>
                            <TabPane tab='全部评论' key='1'>
                                <AllComments/>
                            </TabPane>
                            {/* <TabPane tab='我的评论' key='2'>
                                <MyComments/>
                            </TabPane>
                            <TabPane tab='我的信息' key='3'>
                                <MyMessage/>
                            </TabPane> */}
                        </Tabs>
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
