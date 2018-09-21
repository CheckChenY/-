/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { Row, Col } from 'antd';
import './Homepageissues.css'
import imgoneURL from '../assient/issuephotoaa.png';
import imgtwoURL from '../assient/issuephotobb.png';
import imgthreeURL from '../assient/issuephotocc.png';
import imgfourURL from '../assient/issuephotodd.png';


export default class Homepageissues extends Component{

        render() {
            return (
            <div>
                <Row>
                    <Col xl={2} md={1}></Col>
                    <Col xl={20} md={22}>
                        <span className="issues-title-word-left">
                            丨
                        </span>
                        <span className="issues-title-word">
                            议题推荐
                        </span>
                    </Col>
                    <Col xl={2} md={1}></Col>
                </Row>
                <Row>
                    <Col xl={2} md={1}></Col>
                    <Col xl={20} md={22}>
                        <span className="issues-title-word-en">
                            Issue to recommend
                        </span>
                    </Col>
                    <Col xl={2} md={1} className="stocks-title-right"></Col>
                </Row>
                <Row>
                    <Col xl={2} md={1}></Col>
                    <Col xl={20} md={22}>
                        <Row>
                            <Col xl={12} md={12}>
                                <Row>
                                    <Col xl={23} md={23}>
                                        <img alt='轮播' src={imgoneURL} className="stocks-body-pic-one"/>    
                                    </Col>
                                    <Col xl={1} md={1}></Col>
                                    
                                </Row>
                            </Col>
                            <Col xl={12} md={12}>
                                <Row>
                                    <Col xl={1} md={1}></Col>
                                    <Col xl={23} md={23}>
                                        <img alt='轮播' src={imgtwoURL} className="stocks-body-pic-two"/> 
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={2} md={1}></Col>
                </Row>
                <Row>
                    <Col xl={2} md={1}></Col>
                    <Col xl={20} md={22}>
                        <Row>
                            <Col xl={12} md={12}>
                                <Row>
                                    <Col xl={23} md={23}>
                                        <img alt='轮播' src={imgthreeURL} className="stocks-body-pic-three"/> 
                                    </Col>
                                    <Col xl={1} md={1}></Col>
                                    
                                </Row>
                            </Col>
                            <Col xl={12} md={12}>
                                <Row>
                                    <Col xl={1} md={1}></Col>
                                    <Col xl={23} md={23}>
                                        <img alt='轮播' src={imgfourURL} className="stocks-body-pic-four"/> 
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={2} md={1}></Col>
                </Row>
            </div>
            );
    }
}



