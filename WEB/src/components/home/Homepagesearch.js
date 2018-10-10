import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { Homepagesearch } from './action'

import { Input } from 'antd';
import './Homepagesearch.css';

const Search = Input.Search;

class Homepage extends Component{

    constructor(props){
        super(props)
        this.state = {
            keyValue:' '
        }
    }

    handeChangeValue = (e) =>{
        this.setState({
            keyValue:e.target.text
        })
    }

        render() {
            const self = this,
            { props,state} = self,
            { keyValue } = state,
            { Homepagesearch ,vister} = props;
            return (
                <div className="home-page-search">
                    <div className="user-head">
                        <div className="search">
                            {
                                vister ? (
                                    <Search
                                        className="search-content"
                                        value={keyValue}
                                        enterButton={intl.get('search')}
                                        size="large"
                                        onSearch={
                                            ()=>{
                                                alert('请登录')
                                            }
                                        }
                                    />
                                ) : (
                                    <Search
                                        className="search-content"
                                        value={keyValue}
                                        enterButton={intl.get('search')}
                                        size="large"
                                        onSearch={
                                            value=>Homepagesearch(props,value)
                                        }
                                        
                                    />
                                )
                            }
                        </div>
                        <div className="hotsearch-all">
                            <span className="hotsearch-title">
                                {intl.get('search_hot')}
                            </span>
                            <a 
                                className="hotsearch-title-one"
                                    onClick={this.handeChangeValue}
                                >
                                {intl.get('hot_search_one')}
                            </a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_two')}</a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_three')}</a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_four')}</a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_five')}</a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_six')}</a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_seven')}</a>
                            <a className="hotsearch-title-one">{intl.get('hot_search_eight')}</a>
                        </div>
                    </div>
                </div>
            );
        }
    }

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
    
export default connect(mapDispatchToProps,{
    Homepagesearch
})(Homepage);

// export default Homepagesearch;
                

