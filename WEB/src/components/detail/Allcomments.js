
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import Tools from '../corn/tools';
import { 
    getHKDetailComment,
    replyToComment,
 } from './action';
import { Col, Input, Button, Row } from 'antd';

import './Allcomments.css';

import imgURL3 from '../assient/userdefine.jpg';
import imgURL4 from '../assient/response.png';
// import imgURL5 from '../assient/like.png';
import imgURL6 from '../assient/layup-response@3x.png';

const { TextArea } = Input;


class AllComments extends Component{

    constructor(props){
        super(props);
        this.state = {
            bool : true,
            handeChangeValue: ''
        }
        this.handeChangeBool = this.handeChangeBool.bind(this);
        this.handeChangeValue = this.handeChangeValue.bind(this);
    }

    handeChangeBool(){
        this.setState({
            bool: !this.state.bool
        })
    }
    handeChangeValue = (e) => {
        this.setState({
            handeChangeValue:e.target.value
        })
    }

    componentDidMount() {
        const self = this,
        { getHKDetailComment } = self.props;
        const step = Tools.getFromUrlParam('id') || '';
        getHKDetailComment(step,1);

        // let _this = this;
        // window.addEventListener('scroll', () =>
        // self.onScrollHandle(self)
        // )
    }

    render(){
        const self = this,
        { state , props} = self,
        { bool ,handeChangeValue} = state,
        { state:selfState,replyToComment } = props,
        { infoListHotComment=[] ,user} = selfState,
        { data } = user,
        { userId } = data;
        // { list=[] } = infoListHotComment;
        // console.log(infoListHotComment);
        return (
            <div>                 
                {
                    infoListHotComment.map((show,i)=>(
                        <div key={i}>
                            <Row style={{margin:'40px 0 0 0'}}>
                                <Col span={3} style={{display:'inline-block',textAlign:'center'}}>
                                    <img  alt='aaa' src={imgURL3} className='details-all-comment-user-icon'/>
                                    <div className='details-all-comment-user-ID'>ID: {show.user_nickname}</div>
                                </Col>
                                <Col span={21}>
                                    <div className='details-all-comment-time'>{show.com_time}</div>
                                    <div className='details-all-comment-text'>
                                        {show.content}
                                    </div>
                                    <div style={{marginTop:'40px'}}>
                                        <span >
                                            <img alt='金融搜索' src={imgURL4} style={{width:'23px', height:'23px'}}/>
                                            <Button 
                                                className='details-all-comment-response'
                                                onClick={
                                                    this.handeChangeBool
                                                }
                                                >回复</Button>
                                        </span>                                            
                                        {/* <span style={{cursor:'pointer'}}>
                                            <img alt='金融搜索' src={imgURL5} style={{width:'23px', height:'23px'}}/>
                                            <div className='details-all-comment-number'>195</div>
                                        </span> */}
                                    </div>
                                    {bool?
                                    (
                                        <div style={{marginTop:'40px'}}>
                                        </div>
                                    ):(
                                        <div style={{width:'98%'}}>
                                            <div className='details-all-comment-add-response'>
                                                <TextArea row={8} 
                                                style={{height:'45px', border:'none'}}
                                                onChange={
                                                    this.handeChangeValue
                                                }
                                                />                                            
                                                <Button 
                                                className='details-all-comment-add-response-button'
                                                onClick={
                                                    ()=>replyToComment(show.id,show.user_id,userId,handeChangeValue)
                                                }
                                                >回复</Button>
                                            </div>
                                            <div style={{marginTop:'45px'}}>                                                
                                                <img alt='金融搜索' src={imgURL6} style={{width:'12px', height:'18px'}}/>
                                                <Button 
                                                className='details-layup-response'
                                                onClick={
                                                    this.handeChangeBool
                                                }
                                                >收起</Button>
                                            </div>
                                        </div>
                                    )}
                                </Col>
                            </Row> 
                            <hr style={{border: 'solid 1px #dadada'}}/>
                        </div>
                    ))
                }    
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKDetailComment,replyToComment
})(AllComments);
// export default AllComments;
