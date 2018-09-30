
import React,{ Component} from 'react';

import { Row, Col } from 'antd';

import './Footer.css';

class Footer extends Component{

    render(){
        return (
            <div>
                <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <div className='footer-text' style={{textAlign:'center'}}>
                        Copyright © 2018金融搜索bar 沪ICP备XXXXXXXX号-X
                    </div>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        )
    } 
}

export default Footer;
