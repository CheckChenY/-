import React, { Component } from 'react';
// import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { Button, Row, Col } from 'antd';

import {
  Link
} from 'react-router-dom';
import imgUrl_1 from '../assient/backpassword.png'; 
import imgUrl_3 from '../assient/reset-success.png';


import './backPasswordStepTre.css'

class BackPasswordStepTre extends Component {
  render() {
    return (
          <Row >
            <Col span={6}></Col>
            <Col span={12}>
              <div className='backPasswordStepTre-box' style={{height:'465px'}}>
                <div className='backPasswordStepTre-box-header'>
                  <img alt='aaa' src={imgUrl_1} style={{width:'40px', height:'40px'}}/>                  
                  <span style={{marginLeft:'10px'}}>{intl.get('password_retrieve')}</span>
                </div>
                <div style={{marginTop:'20px'}}>
                  <Row style={{textAlign:'center'}}>
                    <span className='backPasswordStepTre-number-normal'>1</span>
                    <span className='backPasswordStepTre-number-text'>{intl.get('confirm_account')}</span>
                    <span className='backPasswordStepTre-line'></span> 
                    <span className='backPasswordStepTre-number-normal'>2</span>
                    <span className='backPasswordStepTre-number-text'>{intl.get('reset_password')}</span>
                    <span className='backPasswordStepTre-line'></span>
                    <span className='backPasswordStepTre-number-pink'>3</span>
                    <span className='backPasswordStepTre-number-text'>{intl.get('reset_success')}</span> 
                  </Row>
                </div>
                <div  className='backPasswordStepTre-form'>
                  <Row>
                    <Col span={7}></Col>
                    <Col span={10}>
                      <div className='backPasswordStepTre-body'>
                        <img alt='修改成功' style={{width:'130px',height:'130px'}} src={imgUrl_3} />
                        <div className="backPasswordStepTre-body-text" style={{marginTop:'30px'}}>
                            {intl.get('password_modify_success')}
                        </div>
                          <Link to='/'>
                            <Button 
                              className='backPasswordStepTre-button'
                              >
                              <span className='backPasswordStepTre-button-txt'>{intl.get('return_loginpage')}</span> 
                            </Button>                         
                          </Link>
                      </div>
                    </Col>
                    <Col span={7}></Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col span={6}></Col>
          </Row>     
    );
  }
}

export default BackPasswordStepTre;