import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import Tools from '../corn/tools';
import { 
    getHKNews,
    getHKFirstNews,
    // stopGetNews 
} from './action';
import Newsthreebodynone from './Newsthreebodynone.js';
import { 
    Spin, 
    Icon} from 'antd';

import './Newsonebody.css'

import img1 from '../assient/stockNews/111.png';
import img2 from '../assient/stockNews/112.png';
import img3 from '../assient/stockNews/113.png';
import img4 from '../assient/stockNews/114.png';
import img5 from '../assient/stockNews/115.png';
import img6 from '../assient/stockNews/116.png';
import img7 from '../assient/stockNews/117.png';
import img8 from '../assient/stockNews/118.png';
import img11 from '../assient/stockNews/11.png';
import img12 from '../assient/stockNews/12.png';
import img13 from '../assient/stockNews/13.png';
import img14 from '../assient/stockNews/14.png';

// import imgfiveURL from '../assient/stockNews/share.png';
// import imgsixURL from '../assient/stockNews/clickgood.png';
// import { list } from 'postcss';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Newsonebody extends Component{

    componentDidMount() {
        const self = this,
        { getHKFirstNews } = self.props;
        const step = Tools.getFromUrlParam('key') || '';
        getHKFirstNews(step,'',1);
    }
    
    render() {
        const imgsArr = [img1,img2,img3,img4,img5,img6,img7,img8,img11,img12,img13,img14]
        const self = this,
        { getHKDetail,state ,getHKNews} = self.props,
        { loading,newsListArry=[],currentPage,none } = state;
        const step = Tools.getFromUrlParam('key') || '';
        return (
            <div>
                <div className="news-one-all">
                    {
                        newsListArry.map((show,i)=>(
                            <div 
                                key={i}
                                className="news-one"
                                onClick={
                                    ()=>getHKDetail(this.props,show.id)
                                }
                            >
                                <img alt='详情' src={imgsArr[i]} className="news-one-picture"/>
                                <a 
                                    className="news-one-title"
                                    dangerouslySetInnerHTML={{ __html:show.info_title }}
                                >
                                </a>
                                <span className="news-one-time">{show.info_time}</span>
                                <span className="news-one-author">{show.info_author}</span>
                                {/* <span className="news-one-share">
                                    <Button style={{border:'0'}}>
                                        <img alt='分享' src={imgfiveURL} className="news-one-share-picture"/>
                                        <span className="news-one-share-word">{intl.get('share')}</span>
                                    </Button>
                                </span>
                                <span className="news-one-good">
                                    <Button style={{border:'0'}}>
                                        <img alt='点赞' src={imgsixURL} className="news-one-good-picture"/>
                                        <span className="news-one-good-number">{show.dian_zan}</span>
                                    </Button>
                                </span> */}
                            </div>
                        ))
                    }
                    {/* 加载选项 */}
                    {
                        none?(
                            <div className="news-three-body-loading">
                                <button 
                                    className="news-three-body-loading-up"
                                    onClick={
                                        ()=>getHKNews(step,'',currentPage)
                                    }
                                >
                                {loading ? (
                                    <div className="news-three-body-loading-behind">
                                         <Spin 
                                             tip={intl.get('loading')}
                                             indicator={antIcon} 
                                         />
                                     </div>
                                ) : 
                                    <span className="news-three-body-loading-down">{intl.get('loading_ing')}</span>}
                                </button>
                            </div>
                        ) : newsListArry.length === 0 ? 

                        <Newsthreebodynone word={'港股资讯'} /> 
                        : 
                        ''
                    }
                    
                </div>
            </div>        
        );
    }
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKNews,
    getHKFirstNews
})(Newsonebody);
// export default Newsonebody;

