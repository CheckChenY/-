import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/Header';
import LoginTxt from './loginTxt';
import Footer from './footer/Footer';

import { loading } from './action'
// import reducer from './reducer'

import './login.css';

class Login extends Component {
  render() {
    const self = this,
    { props } = self;
    return (

      <div>
        <Header/>
        <LoginTxt { ...props } />
        <Footer/>
      </div>
    );
  }
}


const mapDispatchToProps = state => ({
    loadingTxt:state.checkReducer
})

export default connect(mapDispatchToProps,{
    loading
})(Login);