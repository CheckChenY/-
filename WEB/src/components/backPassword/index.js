import React, { Component } from 'react';
import BackPasswordStepOne from './backPasswordStepOne';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import { Layout} from 'antd';

import imgUrl_2 from '../assient/loginRegisterBG/login_register_bk.jpg'; 

const { /*Header, Footer, Sider,*/ Content } = Layout;

class BackPassword extends Component {
  render() {
    const self = this;
    console.log(self);
    return (
      <div 
        style={{
          minWidth:'1140px'
        }}
      >
          <Header/>  
          <Content
            style={{
              background:`url(${imgUrl_2}) no-repeat`,
              backgroundSize:'100% 100%',
            }}
          >

            <BackPasswordStepOne />
          </Content>
          <Footer/>           
      </div>
    );
  }
}

export default BackPassword;