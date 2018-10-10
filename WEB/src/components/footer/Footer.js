
import React,{ Component} from 'react';

import { Row, Col } from 'antd';

import './Footer.css';

class Footer extends Component{

    render(){
        return (
            <div className="footer">
                <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <div className='footer-text' style={{textAlign:'center'}}>
                        <span className="footer-text-one">Copyright © 2018金融搜索bar 沪ICP备XXXXXX号-X</span>
                        <span className="footer-text-two">Version：v1.0</span>
                    </div>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        )
    } 
}

export default Footer;
