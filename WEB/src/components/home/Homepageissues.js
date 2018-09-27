/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
// import { Row, Col } from 'antd';
import './Homepageissues.css'
import imgoneURL from '../assient/home/issuephotoaa.png';
import imgtwoURL from '../assient/home/issuephotobb.png';
import imgthreeURL from '../assient/home/issuephotocc.png';
import imgfourURL from '../assient/home/issuephotodd.png';


export default class Homepageissues extends Component{

        render() {
            return (
                <div className="home-issue">
                    <div className="home-page-issues">
                        <div>
                            <span className="issues-title-word-left">
                                丨
                            </span>
                            <span className="issues-title-word">
                                议题推荐
                            </span>
                        </div>
                        <div>
                            <span className="issues-title-word-en">
                                Issue to recommend
                            </span>
                        </div>
                        <img alt='轮播'src={imgoneURL}className="stocks-body-pic-one"/>
                        <img alt='轮播'src={imgtwoURL}className="stocks-body-pic-two"/>
                        <img alt='轮播'src={imgthreeURL}className="stocks-body-pic-three"/>
                        <img alt='轮播'src={imgfourURL}className="stocks-body-pic-four"/>
                    </div>
                </div>
        );
    }
}
                


