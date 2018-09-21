/**
* Created by Migual on 2018/9/20.
*/
import React,{ Component} from 'react';

import { Row, Col } from 'antd';

import './Footer.css';

class Footer extends Component{

    render(){
        const { user } = this.props;
        console.log(user);
        return (
            <div>
                <Row>
                <Col span={8}></Col>
                <Col span={8}>
                    <div className='footer-text' style={{textAlign:'center'}}>
                        Copyright © 2018金融搜索bar 沪ICP备10011451号-6
                    </div>
                </Col>
                <Col span={8}></Col>
                </Row>
            </div>
        )
    } 
}

export default Footer;
