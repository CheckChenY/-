
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import Tools from '../corn/tools';
import { getHKDetail , thumbsUp} from './action';

import Header from '../header/Index'
import MakeComment from './Makecomment'
import './HKinformationdetails.css';

import imgURL1 from '../assient/HKInformationDetails/HK-information-details.png';
import imgURL2 from '../assient/like-pink-no.png';
import imgURL3 from '../assient/like-pink-add@3x.png';





class HKInformationDetails extends Component{

    componentDidMount() {
        const self = this,
        { getHKDetail } = self.props;
        const step = Tools.getFromUrlParam('id') || '';
        getHKDetail(step);

        // let _this = this;
        // window.addEventListener('scroll', () =>
        // self.onScrollHandle(self)
        // )
    }

    render(){
        // const key = Tools.getFromUrlParam('id') || '';
        const { state,thumbsUp } = this.props,
        { infoListHotDetail,loading,user } = state,
        { data } = user,
        { userId } = data;
        return (
            <div>
                <Header bShowSearch={true}/>
                {/* <hr style={{border: 'solid 1px #dadada', minWidth:'1000px'}}/> */}
                <div style={{margin:'auto', width:'1000px'}}>
                    <div className='information-details-tittle'>{infoListHotDetail ? infoListHotDetail.info_title :'【资讯】巴菲特准备回购自家股票 伯克希尔站上30万美元'}</div>
                    <div className='information-details-author'>
                        <div>
                            <span>作者：</span>
                            <span style={{marginLeft:'4px'}}> {infoListHotDetail ? infoListHotDetail.info_author : '吴家明'} </span>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <span> {infoListHotDetail ? infoListHotDetail.info_time : '2018-08-08'} </span>
                            <span style={{marginLeft:'20px'}}>
                                <span>来源：</span>
                                <span style={{marginLeft:'4px'}}>{infoListHotDetail ? infoListHotDetail.info_source : '证券时报'} </span>
                            </span>
                        </div>
                        <hr style={{border: 'solid 1px #dadada', marginTop:'20px'}}/>
                        <div style={{margin:'40px 0'}}>
                            <img alt='aaa' src={imgURL1} style={{height:'422px', width:'1000px' ,borderRadius:'8px'}}/>
                            <pre 
                            style={{
                                width:'80'
                            }}
                            className='information-details-text'
                            >
                                {infoListHotDetail ? infoListHotDetail.info_content : '新闻内容'}
                            </pre>
                        </div>
                        <div style={{textAlign:'center',margin:'53px 0 80px 0'}}>
                            <button
                                onClick={
                                    ()=>thumbsUp(userId,loading)
                                }
                                className='information-details-like-button'
                            >
                                {loading ? (
                                    <img alt='aaa' src={imgURL3} 
                                        style={{height:'75px', width:'70px',backgroundColor:'none'}}
                                    />
                                ) : (
                                    <img alt='aaa' src={imgURL2} 
                                        style={{height:'60px', width:'60px'}}
                                    />
                                )}
                            </button>
                            <div className='information-details-like'>{loading?'取消点赞':'点赞'}</div>
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
