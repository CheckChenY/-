import React,{ Component} from 'react';
import { Select } from 'antd';


import './Newsone.css'



const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class Newsone extends Component{
    render() {
        const self = this,
        { infoListPage } = self.props;
        return (
            <div>
                <div>
                    <span className="title-stock-newsone"></span>
                </div>
                <div>
                    <Select 
                        className="title-select-one"
                        defaultValue="时间不限" 
                        onChange={handleChange}
                        showArrow={true} 
                        style={{ 
                            border:'0',
                            marginLeft:'-10px'
                            // marginRight:'20px'
                        }}
                    >
                        <Option value="day">一天内</Option>
                        <Option value="week">一周内</Option>
                        <Option value="month">一月内</Option>
                        <Option value="yesr">一年内</Option>
                    </Select>
                    <Select 
                        className="title-select-two"
                        defaultValue="分类" 
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
                        为您找到相关结果约为
                        <span className="title-search-result">
                            {infoListPage ? infoListPage.total : ''}
                        </span>
                        条
                    </span>
                </div>
            </div>
                        
        );
    }
}


export default Newsone;

