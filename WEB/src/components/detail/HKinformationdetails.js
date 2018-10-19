
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import Tools from '../corn/tools';
import { getHKDetail , thumbsUp} from './action';

import Header from '../header/Index';
import HeaderVister from '../header/Header';//访客头部按钮
import MakeComment from './Makecomment'
import './HKinformationdetails.css';

import imgURL1 from '../assient/HKInformationDetails/HK-information-details.jpg';
import imgURL2 from '../assient/like-pink-no.png';
// import imgURL3 from '../assient/like-pink-add@3x.png';

var bFirstLoad = true ;

class HKInformationDetails extends Component{

    componentWillMount(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    componentDidMount() {
        const self = this,
        { getHKDetail,state } = self.props,
        { userId } = state;
        const step = Tools.getFromUrlParam('id') || '';
        // this.node.scrollIntoView();
        getHKDetail(step,userId);
    }
    componentWillUnmount()
    {
        bFirstLoad = true;
    }

    render(){
        // const key = Tools.getFromUrlParam('id') || '';
        const { state,thumbsUp } = this.props,
        { infoListHotDetail,loading,userId } = state;
        let status;
        if(infoListHotDetail){
            status = infoListHotDetail.status
        }
        console.log(status);
        return (
            <div>
                {userId===null? <HeaderVister /> : <Header bShowSearch={true}/>}
                <div style={{margin:'auto', width:'1000px'}}>
                    <div className='information-details-tittle'>{infoListHotDetail ? infoListHotDetail.info_title :''}</div>
                    <div className='information-details-author'>
                        <div>
                            <span>{intl.get('author')}</span>
                            <span style={{marginLeft:'4px'}}> {infoListHotDetail ? infoListHotDetail.info_author : ''} </span>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span> {infoListHotDetail ? infoListHotDetail.info_time : '2018-08-08'} </span>
                            <span style={{marginLeft:'20px'}}>
                                <span>{intl.get('source')}</span>
                                <span style={{marginLeft:'4px'}}>{infoListHotDetail ? infoListHotDetail.info_source : ''} </span>
                            </span>
                        </div>
                        <hr style={{border: 'solid 1px #dadada', marginTop:'20px'}}/>
                        <div style={{margin:'40px 0 0 0'}}>
                            <img alt='aaa' src={imgURL1} style={{height:'320px', width:'1000px' ,borderRadius:'8px'}}/>
                            <pre 
                            style={{
                                width:'80'
                            }}
                            className='information-details-text'
                            >
                                {infoListHotDetail ? infoListHotDetail.info_content : ''}
                            </pre>
                        </div>
                        <div style={{textAlign:'center',height:'250px',verticalAlign:'middle'}}>
                            
                            {/* 改成动画 */}
                            {status === 1 ? (
                                <div>
                                    <div style={{height:'65px'}} >
                                        {bFirstLoad?(
                                            <div style={{opacity:'0'}}>+1</div>
                                          ):( 
                                            <div className='information-details-like-number-animation'>+1</div>
                                        )}                                   
                                    </div>  
                                    <button
                                    onClick={
                                        ()=>{
                                            thumbsUp(userId,loading)
                                            bFirstLoad = false
                                        }
                                    }
                                    className='information-details-like-button'
                                    >
                                        <img alt='aaa' src={imgURL2} className={bFirstLoad?'information-details-like-button-img-black':'information-details-like-button-img-animation'} style={{height:'60px', width:'60px'}} />
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
                                            thumbsUp(userId,loading)
                                            bFirstLoad = false
                                        }
                                    }
                                    className='information-details-like-button'
                                    >
                                        <img alt='aaa' src={imgURL2} className='information-details-like-button-img'  />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <MakeComment />
                </div>                
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKDetail,thumbsUp
})(HKInformationDetails);
// export default HKInformationDetails;
