import React,{ Component} from 'react';
import intl from 'react-intl-universal';
import { connect } from 'react-redux';
import { getHKIssueSelect } from './action';
import { Select } from 'antd';
import './Newsthree.css';
const Option = Select.Option;
class Newsthree extends Component{
    render() {
        const self = this,
        { getHKIssueSelect=()=>{},numPageIsseuTotal } = self.props;
        console.log(numPageIsseuTotal);
            return (
                <div>
                    <div>
                        <span className="title-stock-newsthree"></span>
                    </div>
                    <div className='title-select'>
                        <Select 
                            className="title-select-one"
                            defaultValue= {intl.get('any_time')} 
                            onChange={getHKIssueSelect}
                            showArrow={true} 
                            style={{ 
                                border:'0',
                                marginLeft:'-10px'
                            }}
                        >
                            <Option value="">{intl.get('any_time')}</Option>
                            <Option value="1">{intl.get('day')}</Option>
                            <Option value="7">{intl.get('week')}</Option>
                            <Option value="30">{intl.get('month')}</Option>
                            <Option value="365">{intl.get('year')}</Option>
                        </Select>
                        <Select 
                            className="title-select-two"
                            defaultValue= {intl.get('classify')}
                            // onChange={handleChange}
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
                            <span className="title-search-result">{numPageIsseuTotal?numPageIsseuTotal:'0'}</span>
                            {intl.get('search_result_two')}
                        </span>
                    </div>
                </div>
                           
            );
    }
}
const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKIssueSelect
})(Newsthree);
// export default Newsthree;
