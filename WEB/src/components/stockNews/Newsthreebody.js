import React,{ Component} from 'react';
import { connect } from 'react-redux';
import Tools from '../corn/tools';
import { getIssueDetail ,getHotHKNews} from './action';

// import { Spin, Icon } from 'antd';


import './Newsthreebody.css'

import imgoneURL from '../assient/stockNews/1.png';
// import imgtwoURL from '../assient/stockNews/2.png';
// import imgthreeURL from '../assient/stockNews/3.png';
// import imgfourURL from '../assient/stockNews/4.png';
// import imgfiveURL from '../assient/stockNews/5.png';
// import imgsixURL from '../assient/stockNews/6.png';
// import imgsevenURL from '../assient/stockNews/7.png';
// import imgeightURL from '../assient/stockNews/8.png';
// import imgnineURL from '../assient/stockNews/9.png';

import imgtenURL from '../assient/stockNews/good.png';



// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Newsthreebody extends Component{

    onScrollHandle(event) {
        if(event.scrollDom === null){
            return false
        }
        const self = this,
        { getHotHKNews ,state } = self.props,
        { currentPageIsseu ,numPageIsseu } = state;
        // { pages } = infoListPage;

        // console.log(document.documentElement.scrollTop)
        // console.log(document.documentElement.clientHeight)
    
    
        const clientHeight = event.scrollDom.clientHeight + 222;
        // const scrollHeight = event.scrollDom.scrollHeight
        // const scrollTop = event.scrollDom.scrollTop
    
        const scrollHeight = document.documentElement.scrollTop;
        const scrollTop = document.documentElement.clientHeight;
    
        const isBottom = (scrollHeight + scrollTop === clientHeight);

        if(isBottom){
            const step = Tools.getFromUrlParam('key') || '';

            if( numPageIsseu < currentPageIsseu ){
                return false
            }else {
                getHotHKNews(step,'',currentPageIsseu);
            }
            
            console.log('is bottom:' + isBottom)
        }
    }

    componentWillMount() {
        const self = this,
        { getHotHKNews } = self.props;
        const step = Tools.getFromUrlParam('key') || '';
        getHotHKNews(step,'',1);


        // let _this = this;
        window.addEventListener('scroll', () =>
        self.onScrollHandle(self)
        )
    }
    
    componentWillUnmount() {
        let _this = this;
        if (this.scrollDom) {
            window.removeEventListener('scroll', () =>
                _this.onScrollHandle(_this)
            );
        }
    }

    render() {
        const self = this,
        { getIssueDetail,state } = self.props,
        { infoListHotData=[] } = state;
        console.log(infoListHotData);
        return (
        <div ref={body=>self.scrollDom = body}>

            {
                infoListHotData.map((show,i)=>(
                    <div key={i} className="news-three-body-top">
                        <span 
                        onClick={
                            ()=>getIssueDetail(this.props,show.issue_id)
                        }
                        >
                            <span className="news-three-body-picture">
                                <img alt='详情' src={imgoneURL} className="news-picture"/>
                            </span>
                            <span className="news-three-body-good">
                                <img alt='点赞' src={imgtenURL} className="news-good"/>
                                <span className="news-good-number">195</span>
                            </span>
                        </span>
                        <div className="news-three-body-top-word">
                            <a className="news-three-body-words">{show.issue_title}</a>
                        </div>
                    </div>
                ))
            }
            

            {/* <div className="news-three-body-loading">
                <Spin 
                    tip="加载中"
                    indicator={antIcon} 
                />
            </div> */}

        </div>
                        
        );
    }
}
const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getIssueDetail,getHotHKNews
})(Newsthreebody);
