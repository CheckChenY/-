/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { connect } from 'react-redux';
// import {
//     Link
//   } from 'react-router-dom';
import { Homepagesearch } from './action'

import { Input } from 'antd';
import './Homepagesearch.css';

const Search = Input.Search;

class Homepage extends Component{

    constructor(props){
        super(props)
        this.state = {
            keyValue:'港股资讯'
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
            { Homepagesearch } = props;
            return (
                <div className="home-page-search">
                    <div className="user-head">
                        <div className="search">
                            <Search
                                className="search-content"
                                value={keyValue}
                                enterButton="搜索"
                                size="large"
                                onSearch={
                                    value=>Homepagesearch(props,value)
                                }
                            />
                        </div>
                        <div className="hotsearch-all">
                            <span className="hotsearch-title">
                            热门搜索
                            </span>
                            <a 
                            className="hotsearch-title-one"
                                onClick={this.handeChangeValue}
                            >港股开户</a>
                            <a className="hotsearch-title-one">A股H股</a>
                            <a className="hotsearch-title-one">市况不明</a>
                            <a className="hotsearch-title-one">恒生综合</a>
                            <a className="hotsearch-title-one">业绩地雷</a>
                            <a className="hotsearch-title-one">港股市场</a>
                            <a className="hotsearch-title-one">三国议息</a>
                            <a className="hotsearch-title-one">恒生指数</a>
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
                

