
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { getLoading } from '../personal/action'

import { Col, Input, Button,  Row } from 'antd';

import './Mycomments.css';

import imgURL3 from '../assient/userdefine.jpg';
import imgURL4 from '../assient/response.png';
import imgURL5 from '../assient/like.png';
// import imgURL7 from '../assient/attach@3x.png';

const { TextArea } = Input;


class MyComments extends Component{

    constructor(props){
        super(props);
        this.state = {
            bool : true
        }
        this.handeChangeBool = this.handeChangeBool.bind(this);
    }

    handeChangeBool(){
        this.setState({
            bool: !this.state.bool
        })
    }


    componentDidMount() {
        const self = this,
        { getLoading ,state} = self.props,
        { user } = state,
        { data } = user,
        { userId } = data;
        // const step = Tools.getFromUrlParam('id') || '';
        getLoading(userId);

        // let _this = this;
        // window.addEventListener('scroll', () =>
        // self.onScrollHandle(self)
        // )
    }

    render(){
        const self = this,
            { props ,state } = self,
            { bool } = state,
            { state:selfState } = props,
            { comment=[] } = selfState;
            console.log(comment);
        return (
            <div>
                {
                    comment.map((show,i)=>(
                        <div key={i}>
                            <Row style={{margin:'24px 0 20px 0'}}>
                                <Col span={3} style={{display:'inline-block',textAlign:'center'}}>
                                    <img  alt='aaa' src={imgURL3} className='details-my-comment-user-icon'/>
                                </Col>
                                <Col span={21}>
                                    <div className='details-my-comment-time'>2018/8/21</div>
                                    <div className='details-my-response-comment-text'>
                                       {show.info_title}
                                    </div>
                                    <div style={{marginTop:'58px'}}>
                                        <div style={{marginTop:'30px'}}>
                                            <span style={{cursor:'pointer'}} >
                                                <img alt='金融搜索' src={imgURL4} style={{width:'23px', height:'23px'}}/>
                                                <Button 
                                                    className='details-all-comment-add-response-button'
                                                    onClick={
                                                        this.handeChangeBool
                                                    }
                                                >回复</Button>
                                            </span>                                            
                                            <span style={{cursor:'pointer'}}>
                                                <img alt='金融搜索' src={imgURL5} style={{width:'23px', height:'23px'}}/>
                                                <div className='details-my-comment-number'>195</div>
                                            </span>
                                            {bool?'':(
                                                <div>
                                                    <div className='details-my-comment-add-response'>
                                                        <TextArea row={8} style={{height:'45px', border:'none'}}/>                                            
                                                        <Button className='details-my-comment-add-response-button'>回复</Button>
                                                    </div>
                                                    <div style={{marginTop:'45px', cursor:'pointer'}}>
                                                        <Button 
                                                        className='details-all-comment-add-response-button'
                                                        onClick={
                                                            this.handeChangeBool
                                                        }
                                                        >收起</Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>                                        
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
    getLoading
})(MyComments);
// export default MyComments;
