/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import './Homepagesearch.css';

const Search = Input.Search;

export default class Homepagesearch extends Component{

        render() {
            return (
            <div>
                <Row className="search">
                    <Col xl={4} md={4}></Col>
                    <Col xl={16} md={16}>
                        <Search
                            className="search-content"
                            placeholder="港元汇率"
                            enterButton="搜索"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </Col>
                    <Col xl={4} md={4}></Col>
                </Row>
                <Row>
                    <Col xl={4} md={4}></Col>
                    <Col xl={16} md={16} className="hotsearch-all">
                        <Row>
                            <Col xl={2} md={3}> 
                                <span className="hotsearch-title">
                                    热门搜索
                                </span>
                            </Col>
                            <Col xl={22} md={21}>
                                <Row>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">港股开户</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">A股H股</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">市况不明</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">恒生综合</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">业绩地雷</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">港股市场</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">三国议息</a>
                                    </Col>
                                    <Col xl={2} md={3}>
                                        <a className="hotsearch-title-one">恒生指数</a>
                                    </Col>
                                </Row>
                            </Col> 
                        </Row>
                    </Col>
                    <Col xl={4} md={4}></Col>
                </Row>
            </div>
            );
    }
}

