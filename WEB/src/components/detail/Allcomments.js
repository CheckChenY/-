
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

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
import imgoneURL from '../assient/sofa.png';

const { TextArea } = Input;


class AllComments extends Component{

    constructor(props){
        super(props);
        this.state = {
            boolId : '',
            handeChangeValue: ''
        }
        this.handeChangeBool = this.handeChangeBool.bind(this);
        this.handeChangeValue = this.handeChangeValue.bind(this);
    }

    handeChangeBool(e){
        console.log(e)
        this.setState({
            boolId: e
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
    }

    render(){
        const self = this,
        { state , props,} = self,
        { boolId ,handeChangeValue} = state,
        { state:selfState,replyToComment } = props,
        { infoListHotComment=[] ,userId} = selfState;
        // { list=[] } = infoListHotComment;
        return (
            <div>                 
                {
                    infoListHotComment.map((show,i)=>(
                        <div key={i}>
                            <Row style={{margin:'40px 0 0 0'}}>
                                <Col span={3} style={{display:'inline-block',textAlign:'center'}}>
                                    <img  alt='aaa' src={imgURL3} className='details-all-comment-user-icon'/>
                                    <div className='details-all-comment-user-ID'>ID: {show.user_nickname?show.user_nickname:'刘德华'}</div>
                                </Col>
                                <Col span={21}>
                                    <div className='details-all-comment-time'>{show.com_time}</div>
                                    <div className='details-all-comment-text'>
                                        {show.content}
                                    </div>
                                        {
                                            show.showReply.map((item,j)=>(
                                                <div key={j} >                                                  
                                                    <Row style={{padding:'15px 30px' ,borderRadius: '4px', backgroundColor: '#fbfbfb'}}>
                                                        <Col span={3}>
                                                            <img  alt='aaa' src={imgURL3} className='details-all-comment-user-icon-sm'/>
                                                            <div className='details-all-comment-reply-id'>{item.fromUser}</div>
                                                        </Col>
                                                        <Col span={16}>
                                                            <div className='details-all-comment-reply-text'>{item.content}</div>
                                                        </Col>
                                                        <Col span={5}>
                                                            <div className='details-all-comment-reply-time'>{item.rep_time}</div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            ))
                                        }
                                        {/* <Pagination
                                            className='details-all-comment-reply-pagination'
                                            size="small"
                                            defaultCurrent={1} 
                                            total={50}
                                            pageSize={5}
                                            // onChange={
                                            //     (current, size)=>getHKMarketstockList(current)
                                            // }
                                        />  */}                                    
                                    <div style={{marginTop:'10px'}}>
                                        <span >
                                            <img alt='金融搜索' src={imgURL4} style={{width:'23px', height:'23px'}}/>
                                            <Button 
                                                className='details-all-comment-response'
                                                onClick={
                                                    ()=>this.handeChangeBool(show.id)
                                                }
                                                >{intl.get('reply')}</Button>
                                        </span>
                                    </div>
                                    {boolId === show.id?
                                    (  
                                        <div style={{width:'98%'}}>
                                            <div className='details-all-comment-add-response'>
                                                <TextArea row={8} 
                                                style={{height:'45px', border:'none'}}
                                                value={handeChangeValue}
                                                onChange={
                                                    this.handeChangeValue
                                                }
                                                />                                            
                                                <Button 
                                                type="primary" 
                                                className='details-all-comment-add-response-button'
                                                onClick={
                                                    ()=>{
                                                        replyToComment(show.id,show.user_id,userId,handeChangeValue)
                                                        this.setState({handeChangeValue:''})
                                                    }
                                                }
                                                >{intl.get('reply')}</Button>
                                            </div>
                                            <div style={{marginTop:'45px'}}>                                                
                                                <img alt='金融搜索' src={imgURL6} style={{width:'12px', height:'18px'}}/>
                                                <Button 
                                                className='details-layup-response'
                                                onClick={
                                                    this.handeChangeBool
                                                }
                                                >{intl.get('collapse')}</Button>
                                            </div>
                                        </div>
                                    ):(
                                        <div style={{marginTop:'40px'}}></div>
                                    )}
                                </Col>
                            </Row> 
                            <hr style={{border: 'solid 1px #E8E8E8'}}/>
                        </div>
                    ))
                }  
                
                {
                    infoListHotComment.length === 0 ? (
                        <div >
                            {/* <hr style={{border: 'solid 1px #E8E8E8'}}/> */}
                            <div style={{marginTop:'80px',textAlign:'center'}}>
                                <img alt='无内容' src={imgoneURL}  className="picture"/>
                            </div>
                            <div className="details-all-comment-text" style={{textAlign:'center'}}>
                                <span>{intl.get('have_sofa')}</span>
                            </div>
                        </div>
                    ) : ''
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
