import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import { connect } from 'react-redux';
import { 
    getHKNewsSelect
} from './action';
import { Select } from 'antd';
import './Newsone.css';
const Option = Select.Option;


class Newsone extends Component{
    render() {
        const self = this,
        { infoListPage,getHKNewsSelect=()=>{} } = self.props;
        return (
            <div>
                <div>
                    <span className="title-stock-newsone"></span>
                </div>
                <div className='title-select'>
                    <Select 
                        className="title-select-one"
                        // ref={Select=>{self.SelectValue=Select}}
                        defaultValue= {intl.get('any_time')}
                        // onChange={handleChange(self)}
                        onChange={getHKNewsSelect}
                        showArrow={true} 
                        style={{ 
                            border:'0',
                            marginLeft:'-10px'
                            // marginRight:'20px'
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
                    </Select>
                    <span className="title-search">
                        {intl.get('search_result_one')}
                        <span className="title-search-result">
                            {infoListPage ? infoListPage.total : ''}
                        </span>
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
    getHKNewsSelect
})(Newsone);
// export default Newsone;

