import React,{ Component} from 'react';


// import { connect } from 'react-redux';
// import { getHKNews,getHKDetail } from './action';
// import Tools from '../corn/tools';


import { Button,Spin, Icon} from 'antd';

// import { Select } from 'antd';


import './Newsonebody.css'

import imgoneURL from '../assient/stockNews/11.png';
// import imgtwoURL from '../assient/shareDetails/12.png';
// import imgthreeURL from '../assient/shareDetails/13.png';
// import imgfourURL from '../assient/shareDetails/14.png';
import imgfiveURL from '../assient/stockNews/share.png';
import imgsixURL from '../assient/stockNews/clickgood.png';
// import { list } from 'postcss';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Newsonebody extends Component{

    // onScrollHandle(event) {
    //     if(event.scrollDom === null){
    //         return false
    //     }
    //     const self = this,
    //     { getHKNews ,state } = self.props,
    //     { currentPage ,numPage } = state;
    //     // { pages } = infoListPage;

    //     // console.log(document.documentElement.scrollTop)
    //     // console.log(document.documentElement.clientHeight)
    
    
    //     const clientHeight = event.scrollDom.clientHeight + 222;
    //     // const scrollHeight = event.scrollDom.scrollHeight
    //     // const scrollTop = event.scrollDom.scrollTop
    
    //     const scrollHeight = document.documentElement.scrollTop;
    //     const scrollTop = document.documentElement.clientHeight;
    
    //     const isBottom = (scrollHeight + scrollTop === clientHeight);

    //     if(isBottom){
    //         const step = Tools.getFromUrlParam('key') || '';
    //         // //   console.log(step);
    //         if( numPage < currentPage ){
    //             return false
    //         }else {
    //             getHKNews(step,'',currentPage);
    //         }
            
    //         console.log('is bottom:' + isBottom)
    //     }
    // }

    // componentDidMount() {
    //     const self = this,
    //     { getHKNews } = self.props;
    //     const step = Tools.getFromUrlParam('key') || '';
    //     getHKNews(step,'',1);


    //     // let _this = this;
    //     window.addEventListener('scroll', () =>
    //     self.onScrollHandle(self)
    //     )
    // }
    
    // componentWillUnmount() {
    //     let _this = this;
    //     if (this.scrollDom) {
    //         window.removeEventListener('scroll', () =>
    //             _this.onScrollHandle(_this)
    //         );
    //     }
    // }
    render() {
        const self = this,
        { getHKDetail,state } = self.props,
        { loading,newsListArry=[] } = state;
        return (
            <div>
                <div ref={body=>self.scrollDom = body} className="news-one-all">
                    {
                        newsListArry.map((show,i)=>(
                            <div 
                                key={i}
                                className="news-one"
                                onClick={
                                    ()=>getHKDetail(this.props,show.id)
                                }
                            >
                                <img alt='详情' src={imgoneURL} className="news-one-picture"/>
                                <a className="news-one-title">{show.info_title}</a>
                                <span className="news-one-time">{show.info_time}</span>
                                <span className="news-one-author">{show.info_author}</span>
                                <span className="news-one-share">
                                    <Button style={{border:'0'}}>
                                        <img alt='分享' src={imgfiveURL} className="news-one-share-picture"/>
                                        <span className="news-one-share-word">分享</span>
                                    </Button>
                                </span>
                                <span className="news-one-good">
                                    <Button style={{border:'0'}}>
                                        <img alt='点赞' src={imgsixURL} className="news-one-good-picture"/>
                                        <span className="news-one-good-number">{show.dian_zan}</span>
                                    </Button>
                                </span>
                            </div>
                        ))
                    }
                   {loading ? (
                       <div className="news-three-body-loading">
                            <Spin 
                                tip="加载中"
                                indicator={antIcon} 
                            />
                        </div>
                   ) : ''}
                </div>
            </div>        
        );
    }
}


// const mapDispatchToProps = (state) => ({
//     state:state.checkReducer
// })
  
// export default connect(mapDispatchToProps,{
//     getHKNews,getHKDetail
// })(Newsonebody);
export default Newsonebody;

