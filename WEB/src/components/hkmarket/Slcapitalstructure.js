import React,{ Component} from 'react';

import './Slcapitalstructure.css'
import imgoneURL from '../assient/stockaa.jpg';
import imgtwoURL from '../assient/stockbb.jpg';


class Slcapitalstructure extends Component{

        render() {
            return (
            <div>
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='capitalstructure-title'>股本结构</div>
                </div>
                <div>
                    <div style={{paddingTop:'20px',width:'100%',borderLeft:'solid 1px #ebeef1',borderRight:'solid 1px #ebeef1'}}>
                        <img alt='图一' src={imgoneURL} className="capitalstructure-stock-one"/>
                        <img alt='图二' src={imgtwoURL} className="capitalstructure-stock-two"/>
                    </div>
                    <table style={{width:'100%', margin:'0 0 22px', border:'solid 1px #ebeef1'}}>
                        <tbody>
                            <tr >
                                <td className="capitalstructure-table-one-top">公告日期</td>
                                <td className="capitalstructure-table-two-top">2011-06-30</td>
                                <td className="capitalstructure-table-three-top">A股(股)</td>
                                <td className="capitalstructure-table-four-top">-</td>
                            </tr>
                            <tr >
                                <td className="capitalstructure-table-one">变动日期</td>
                                <td className="capitalstructure-table-two">2011-06-30</td>
                                <td className="capitalstructure-table-three">B股(股)</td>
                                <td className="capitalstructure-table-four">-</td>
                            </tr>
                            <tr >
                                <td className="capitalstructure-table-one">已发行普通股(股)</td>
                                <td className="capitalstructure-table-two">666,190,798.00</td>
                                <td className="capitalstructure-table-three">海外上市股(股)</td>
                                <td className="capitalstructure-table-four">-</td>
                            </tr>
                            <tr >
                                <td className="capitalstructure-table-one">香港普通股(股)</td>
                                <td className="capitalstructure-table-two">666,190,798.00</td>
                                <td className="capitalstructure-table-three">非上市流通股(股)</td>
                                <td className="capitalstructure-table-four">-</td>
                            </tr>
                            <tr >
                                <td className="capitalstructure-table-one">内地上市股(股)</td>
                                <td className="capitalstructure-table-two">-</td>
                                <td className="capitalstructure-table-three">已发行优先股(股)</td>
                                <td className="capitalstructure-table-four">-</td>
                            </tr>
                            <tr >
                                <td className="capitalstructure-table-one"></td>
                                <td className="capitalstructure-table-two"></td>
                                <td className="capitalstructure-table-three-bottom">股本变动原因</td>
                                <td className="capitalstructure-table-four-bottom">购回股份</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            );
    }
}

export default Slcapitalstructure;