/**
* Created by mapbar_front on 2018/3/18.
*/
import React,{ Component} from 'react';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import './Homepagepicture.css';
import imgoneURL from '../assient/1.png';
import imgtwoURL from '../assient/2.png';
import imgthreeURL from '../assient/3.png';
import imgfourURL from '../assient/4.png';


export default class Homepagepicture extends Component{

        render() {
            return (
            <div>
                <Row>
                    <Col xl={2} md={1}></Col>
                    <Col xl={20} md={22}>
                        {/* <img alt='轮播' src={imgoneURL} className="home-picture"/>  */}
                        <Carousel autoplay>
                            <div><img alt='轮播' src={imgoneURL} className="home-picture"/></div>
                            <div><img alt='轮播' src={imgtwoURL} className="home-picture"/></div>
                            <div><img alt='轮播' src={imgthreeURL} className="home-picture"/></div>
                            <div><img alt='轮播' src={imgfourURL} className="home-picture"/></div>
                        </Carousel> 
                    </Col>
                    <Col xl={2} md={1}></Col>
                </Row>
            </div>
            );
    }
}

