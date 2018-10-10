import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import { Select } from 'antd';


import './Newsthree.css'




const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class Newsthree extends Component{

        render() {
            return (
                <div>
                    <div>
                        <span className="title-stock-newsthree"></span>
                    </div>
                    <div className='title-select'>
                        <Select 
                            className="title-select-one"
                            defaultValue= {intl.get('any_time')} 
                            onChange={handleChange}
                            showArrow={true} 
                            style={{ 
                                border:'0',
                                marginLeft:'-10px'
                            }}
                        >
                            <Option value="day">{intl.get('day')}</Option>
                            <Option value="week">{intl.get('week')}</Option>
                            <Option value="month">{intl.get('month')}</Option>
                            <Option value="yesr">{intl.get('year')}</Option>
                        </Select>
                        <Select 
                            className="title-select-two"
                            defaultValue= {intl.get('classify')}
                            onChange={handleChange}
                            showArrow={true} 
                            style={{ 
                                border:'0'
                            }}
                        >
                            {/* <Option value="stockissue">港股议题</Option>
                            <Option value="stocknews">港股资讯</Option>
                            <Option value="hotissue">热门议题</Option> */}
                        </Select>
                        <span className="title-search">
                            {intl.get('search_result_one')}
                            <span className="title-search-result">490,000</span>
                            {intl.get('search_result_two')}
                        </span>
                    </div>
                </div>
                           
            );
    }
}

export default Newsthree;
