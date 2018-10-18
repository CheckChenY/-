import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import './Homepagestocks.css'
// import imgoneURL from '../assient/home/stockphoto.png';
import imgoneURL from '../assient/home/11.png';
import imgtwoURL from '../assient/home/22.png';
import imgthreeURL from '../assient/home/33.png';
import imgfourURL from '../assient/home/44.png';
import imgfiveURL from '../assient/home/55.png';
import imgsixURL from '../assient/home/66.png';



class Homepagestocks extends Component{

        render() {
            return (
                <div className="home-stock">
                    <div className="home-page-stock">
                        <div>
                            <span className="stocks-title-word-left">
                                丨
                            </span>
                            <span className="stocks-title-word">
                                {intl.get('recommend_HKstocks')}
                            </span>
                        </div>
                        <div>
                            <span className="stocks-title-en-word">
                                Hong Kong stock to recommend
                            </span>
                        </div>
                        <div className="stocks-bodyone">
                            <img alt='港股' src={imgoneURL} className="stocks-picture"/>
                            <img alt='港股' src={imgtwoURL} className="stocks-picture"/>
                            <img alt='港股' src={imgthreeURL} className="stocks-picture1"/>
                        </div>
                        <div className="stocks-bodytwo">
                            <img alt='港股' src={imgfourURL} className="stocks-picture"/>
                            <img alt='港股' src={imgfiveURL} className="stocks-picture"/>
                            <img alt='港股' src={imgsixURL} className="stocks-picture1"/>
                        </div>
                    </div>
                </div>
            );
        }
    }
                

export default Homepagestocks;