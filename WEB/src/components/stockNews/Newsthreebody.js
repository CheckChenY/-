import React,{ Component} from 'react';
import { connect } from 'react-redux';
import Tools from '../corn/tools';
import { 
    getIssueDetail ,
    getHotHKNews,
    getHotHKFirstNews,
} from './action';
import intl from 'react-intl-universal';
import { Spin, Icon, Row, Col, } from 'antd';
import Newsthreebodynone from './Newsthreebodynone.js';

import './Newsthreebody.css'

// import imgoneURL from '../assient/stockNews/1.png';
// import imgtwoURL from '../assient/stockNews/2.png';
// import imgthreeURL from '../assient/stockNews/3.png';
// import imgfourURL from '../assient/stockNews/4.png';
// import imgfiveURL from '../assient/stockNews/5.png';
// import imgsixURL from '../assient/stockNews/6.png';
// import imgsevenURL from '../assient/stockNews/7.png';
// import imgeightURL from '../assient/stockNews/8.png';
// import imgnineURL from '../assient/stockNews/9.png';

import img1 from '../assient/stockNews/1.png';
import img2 from '../assient/stockNews/2.png';
import img3 from '../assient/stockNews/3.png';
import img4 from '../assient/stockNews/4.png';
import img5 from '../assient/stockNews/5.png';
import img6 from '../assient/stockNews/6.png';
import img7 from '../assient/stockNews/7.png';
import img8 from '../assient/stockNews/8.png';
import img9 from '../assient/stockNews/9.png';
import img10 from '../assient/stockNews/910.png';
import img11 from '../assient/stockNews/911.png';
import img12 from '../assient/stockNews/912.png';
// import img13 from '../assient/shareDetails/13.png';
// import img14 from '../assient/shareDetails/14.png';

import imgtenURL from '../assient/stockNews/good.png';



const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Newsthreebody extends Component{

    componentDidMount() {
        const self = this,
        { getHotHKFirstNews } = self.props;
        const step = Tools.getFromUrlParam('key') || '';
        getHotHKFirstNews(step,'',1);
    }

    render() {
        const imgsArr = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
        const self = this,
        { getIssueDetail,state,getHotHKNews } = self.props,
        { loading,infoListHotData=[],issuesNone ,currentPageIsseu,day,isseuLoading} = state;
        const step = Tools.getFromUrlParam('key') || '';
        return (
        <div ref={body=>self.scrollDom = body}>
            <Row>
                {
                    infoListHotData.map((show,i)=>(
                        // <div key={i} className="news-three-body-top">
                        //     <span 
                        //     onClick={
                        //         ()=>getIssueDetail(this.props,show.issue_id)
                        //     }
                        //     >
                        //         <span className="news-three-body-picture">
                        //             <img alt='详情' src={imgsArr[i]} className="news-picture"/>
                        //         </span>
                        //         <span className="news-three-body-good">
                        //             <img alt='点赞' src={imgtenURL} className="news-good"/>
                        //             <span className="news-good-number">{show.zanNum?show.zanNum:'0'}</span>
                        //         </span>
                        //     </span>
                        //     <div className="news-three-body-top-word">
                        //         <a className="news-three-body-words">{show.issue_title}</a>
                        //     </div>
                        // </div>
                        
                        <Col key={i} md={8}>
                            <div
                                className="news-three-body-top"
                                onClick={
                                    ()=>getIssueDetail(this.props,show.issue_id)
                                }>
                                <div>
                                    <span className="news-three-body-picture">
                                        <img alt='详情' src={imgsArr[i]} className="news-picture"/>
                                    </span>
                                    <span className="news-three-body-good">
                                        <img alt='点赞' src={imgtenURL} className="news-good"/>
                                        <span className="news-good-number">{show.zanNum?show.zanNum:'0'}</span>
                                    </span>
                                </div>
                                <div className="news-three-body-top-word">
                                    <a className="news-three-body-words">{show.issue_title}</a>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            {
                issuesNone?(
                    <div className="news-three-body-loading">
                        <button 
                            className="news-three-body-loading-up"
                            onClick={
                                ()=>getHotHKNews(step,day,currentPageIsseu)
                            }
                        >
                        {loading ? (
                            <div className="news-three-body-loading">
                                    <Spin 
                                        tip={intl.get('loading')}
                                        indicator={antIcon} 
                                    />
                                </div>
                        ) : isseuLoading ? <span className="news-three-body-loading-down">{intl.get('loading_ing')}</span> : ''}
                        </button>
                    </div>
                ) : infoListHotData.length === 0 ? <Newsthreebodynone  word={'港股议题'} /> :''
            }

        </div>
                        
        );
    }
}
const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getIssueDetail,
    getHotHKNews,
    getHotHKFirstNews,
})(Newsthreebody);
