import React,{ Component} from 'react';
import intl from 'react-intl-universal';
import { connect } from 'react-redux';
import { getIssueDetail } from '../stockNews/action';

import './Homepageissues.css'
import imgoneURL from '../assient/home/issuephotoaa.png';
import imgtwoURL from '../assient/home/issuephotobb.png';
import imgthreeURL from '../assient/home/issuephotocc.png';
import imgfourURL from '../assient/home/issuephotodd.png';


class Homepageissues extends Component{
    render() {
        const self = this,
        {  IndexTwo ,getIssueDetail} = self.props;
        return (
            <div className="home-issue">
                <div className="home-page-issues">
                    <div>
                        <span className="issues-title-word-left">
                            丨
                        </span>
                        <span className="issues-title-word">
                            {intl.get('recommend_issues')}
                        </span>
                    </div>
                    <div>
                        <span className="issues-title-word-en">
                            Issue to recommend
                        </span>
                    </div>
                    <img 
                    alt='轮播'
                    onClick={
                        ()=>getIssueDetail(this.props,IndexTwo[0].styleId)
                    }
                    src={imgoneURL}className="stocks-body-pic-one"/>
                    <img 
                    alt='轮播'
                    onClick={
                        ()=>getIssueDetail(this.props,IndexTwo[1].styleId)
                    }
                    src={imgtwoURL}className="stocks-body-pic-two"/>
                    <img 
                    alt='轮播'
                    onClick={
                        ()=>getIssueDetail(this.props,IndexTwo[2].styleId)
                    }
                    src={imgthreeURL}className="stocks-body-pic-three"/>
                    <img 
                    alt='轮播'
                    onClick={
                        ()=>getIssueDetail(this.props,IndexTwo[3].styleId)
                    }
                    src={imgfourURL}className="stocks-body-pic-four"/>
                </div>
            </div>
        );
    }
}
                
const mapDispatchToProps = state => ({
    state:state.checkReducer
})

export default connect(mapDispatchToProps,{
    getIssueDetail
})(Homepageissues);
// export default Homepageissues;
