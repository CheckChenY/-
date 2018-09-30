import React,{ Component} from 'react';

import './Newstwobody.css'

import imgoneURL from '../assient/group-6.png';


class Newstwobody extends Component{

        render() {
            return (
            <div style={{marginTop:'20px'}}>
                <img alt='详情' src={imgoneURL}  className="picture"/>
            </div>
                           
            );
    }
}


export default Newstwobody;
