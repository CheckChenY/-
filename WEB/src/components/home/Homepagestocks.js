/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
// import { Row, Col } from 'antd';
import './Homepagestocks.css'
import imgoneURL from '../assient/home/stockphoto.png';


export default class Homepagestocks extends Component{

        render() {
            return (
                <div className="home-stock">
                    <div className="home-page-stock">
                        <div>
                            <span className="stocks-title-word-left">
                                丨
                            </span>
                            <span className="stocks-title-word">
                                港股推荐
                            </span>
                        </div>
                        <div>
                            <span className="stocks-title-en-word">
                                Hong Kong stock to recommend
                            </span>
                        </div>
                        <div className="stocks-bodyone">
                            <img alt='港股' src={imgoneURL} className="stocks-picture"/>
                            <img alt='港股' src={imgoneURL} className="stocks-picture"/>
                            <img alt='港股' src={imgoneURL} className="stocks-picture1"/>
                        </div>
                        <div className="stocks-bodytwo">
                            <img alt='港股' src={imgoneURL} className="stocks-picture"/>
                            <img alt='港股' src={imgoneURL} className="stocks-picture"/>
                            <img alt='港股' src={imgoneURL} className="stocks-picture1"/>
                        </div>
                    </div>
                </div>
            );
        }
    }
                

