
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import Tools from '../corn/tools';
import { 
    getHKDetailIssue ,
    getHKDetailComment,
    thumbsUpIsseu,
} from './action';

import Header from '../header/Index'

import './HKissuedetails.css';

import imgURL1 from '../assient/HKIssueDetails/HK-issue-details.png';
import imgURL2 from '../assient/like-pink-no.png';
import imgURL3 from '../assient/like-pink-add@3x.png';

import MakeComment from './Makecomment';


class HKIssueDetails extends Component{

    componentDidMount() {
        const self = this,
        { getHKDetailIssue ,getHKDetailComment} = self.props;
        const step = Tools.getFromUrlParam('id') || '';
        getHKDetailIssue(step);
        getHKDetailComment(step,2);


        // let _this = this;
        // window.addEventListener('scroll', () =>
        // self.onScrollHandle(self)
        // )
    }

    render(){
        const { state ,thumbsUpIsseu} = this.props,
        { infoListHotIsseu ,loading,user} = state,
        { data } = user,
        { userId } = data;
        console.log(imgURL2);
        return (
            <div>
                <Header bShowSearch={true}/>
                {/* <hr style={{border: 'solid 1px #dadada', minWidth:'1000px'}}/> */}
                <div style={{margin:'auto', width:'1000px'}}>
                    <div className='issue-details-tittle'>
                    {infoListHotIsseu ? infoListHotIsseu.issueTitle :
                    '【议题】巴菲特准备回购自家股票 伯克希尔站上30万美元'
                    }
                    </div>
                    <div className='issue-details-author'>
                        <div>
                            <span>作者：</span>
                            <span style={{marginLeft:'4px'}}>{infoListHotIsseu ? infoListHotIsseu.issueAuthor : ' '}</span>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span>{infoListHotIsseu ? infoListHotIsseu.issueTime : ' 2018-07-20 10:20'}</span>
                            <span style={{marginLeft:'20px'}}>
                                <span>来源：</span>
                                <span style={{marginLeft:'4px'}}>{infoListHotIsseu ? infoListHotIsseu.issueSource : '证券时报'}</span>
                            </span>
                        </div>
                        <hr style={{border: 'solid 1px #dadada', marginTop:'20px'}}/>
                        <div style={{margin:'40px 0'}}>
                            <img alt='aaa' src={imgURL1} style={{height:'422px', width:'1000px', borderRadius:'8px'}}/>
                            <div className='issue-details-text'>
                            {infoListHotIsseu ? infoListHotIsseu.issueContent : '内容'}
                            </div>
                        </div>
                        <div style={{textAlign:'center',margin:'53px 0 80px 0'}}>
                            <button
                                onClick={
                                    ()=>thumbsUpIsseu(userId,loading)
                                }
                                className='issue-details-like-button'
                            >
                                {loading ? (
                                    <img alt='aaa' src={imgURL3} 
                                        style={{height:'75px', width:'70px',cursor:'pointer'}}
                                        />
                                ) : (
                                    <img alt='aaa' src={imgURL2} 
                                        style={{height:'60px', width:'60px',cursor:'pointer'}}
                                    />
                                )} 
                            </button>
                            <div className='information-details-like'>{loading?'取消点赞':'点赞'}</div>
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
