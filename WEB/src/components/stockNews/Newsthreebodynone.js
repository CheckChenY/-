import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import './Newsthreebodynone.css'

import imgoneURL from '../assient/stockNews/group-2.png';


class Newsthreebodynone extends Component{

        render() {
            const self = this,
            { word } = self.props;
            return (
            <div>
                <div style={{marginTop:'20px',marginLeft: '60px'}}>
                    <img alt='无内容' src={imgoneURL}  className="picture"/>
                </div>
                <div className="newsthreebodynone-text">
                    <span>{intl.get('search_no_result_one')}</span>
                    <span>{word}</span>
                    <span>{intl.get('search_no_result_two')}</span>
                </div>
            </div>
                           
            );
    }
}


export default Newsthreebodynone;
