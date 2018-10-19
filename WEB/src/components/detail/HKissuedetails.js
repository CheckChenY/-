
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import Tools from '../corn/tools';
import { 
    getHKDetailIssue ,
    getHKDetailComment,
    thumbsUpIsseu,
} from './action';

import Header from '../header/Index'
import HeaderVister from '../header/Header';//访客头部按钮
import './HKissuedetails.css';

import imgURL1 from '../assient/HKIssueDetails/HK-issue-details.jpg';
import imgURL2 from '../assient/like-pink-no.png';
// import imgURL3 from '../assient/like-pink-add@3x.png';

import MakeComment from './Makecomment';

var bFirstLoad = true ;

class HKIssueDetails extends Component{

    componentWillMount(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    componentDidMount() {
        const self = this,
        { getHKDetailIssue ,getHKDetailComment,state} = self.props,
        { userId } = state;
        const step = Tools.getFromUrlParam('id') || '';
        getHKDetailIssue(step,userId);
        getHKDetailComment(step,2);
    }

    componentWillUnmount()
    {
        bFirstLoad = true;
    }
    render(){
        const { state ,thumbsUpIsseu} = this.props,
        { infoListHotIsseu ,loading,userId} = state;
        let status;
        if(infoListHotIsseu){
            status = infoListHotIsseu.status
        }
        console.log(status);
        return (
            <div>
                {userId===null? <HeaderVister /> : <Header bShowSearch={true}/>}
                <div style={{margin:'auto', width:'1000px'}}>
                    <div className='issue-details-tittle'>
                    {infoListHotIsseu ? infoListHotIsseu.issue_title :''}
                    </div>
                    <div className='issue-details-author'>
                        <div>
                            <span>{intl.get('author')}</span>
                            <span style={{marginLeft:'4px'}}>{infoListHotIsseu ? infoListHotIsseu.issue_author : ''}</span>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span>{infoListHotIsseu ? infoListHotIsseu.issue_time : ' 2018-07-20 10:20'}</span>
                            <span style={{marginLeft:'20px'}}>
                                <span>{intl.get('source')}</span>
                                <span style={{marginLeft:'4px'}}>{infoListHotIsseu ? infoListHotIsseu.issue_source : ''}</span>
                            </span>
                        </div>
                        <hr style={{border: 'solid 1px #dadada', marginTop:'20px'}}/>
                        <div style={{margin:'40px 0 0 0'}}>
                            <img alt='aaa' src={imgURL1} style={{height:'320px', width:'1000px', borderRadius:'8px'}}/>
                            {/* <div className='issue-details-text'>
                            {infoListHotIsseu ? infoListHotIsseu.issue_content : '内容'}
                            </div> */}
                            <pre className='issue-details-text'>
                                {infoListHotIsseu ? infoListHotIsseu.issue_content : ''}
                            </pre>
                        </div>
                        {/* 改成动画 */}
                        <div style={{textAlign:'center',height:'250px',verticalAlign:'middle'}}>
                            {status === 1 ? (
                                <div>
                                    <div style={{height:'65px'}} > 
                                        {bFirstLoad?(
                                            <div style={{opacity:'0'}}>+1</div>
                                          ):( 
                                            <div className='issue-details-like-number-animation'>+1</div>
                                        )}                                     
                                    </div>  
                                    <button
                                    onClick={
                                        ()=>{
                                            thumbsUpIsseu(userId,loading)
                                            bFirstLoad = false
                                        }
                                    }
                                    className='issue-details-like-button'
                                    >
                                        <img alt='aaa' src={imgURL2} className={bFirstLoad?'issue-details-like-button-img-black':'issue-details-like-button-img-animation'}  style={{height:'60px', width:'60px'}} />
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <div style={{height:'65px'}}>
                                        <div style={{opacity:'0'}}>+1</div>
                                    </div>                                
                                    <button
                                    onClick={
                                        ()=>{
                                            thumbsUpIsseu(userId,loading)
                                            bFirstLoad = false
                                        }
                                    }
                                    className='issue-details-like-button'
                                    >
                                        <img alt='aaa' src={imgURL2} className='issue-details-like-button-img'  />
                                    </button>
                                </div>
                            )} 
                        </div>
                    </div>
                   <MakeComment/> 
                </div>                
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKDetailIssue,getHKDetailComment,thumbsUpIsseu
})(HKIssueDetails);
// export default HKIssueDetails;
