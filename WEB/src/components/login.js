import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/Header';
import LoginTxt from './loginTxt';
import Footer from './footer/Footer';

// import { loading } from './action'
// import reducer from './reducer'

import './login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      bLoginRegister: true,
    }
  }

  render() {
    const self = this,   
    { props ,state } = self,
    { bLoginRegister }= state;
    
    return (

      <div
      style={{
        minWidth:'1140px'
      }}
      >
        <Header bLoginRegister = {bLoginRegister} bNoBoxShadow={true} />
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
    // loading
})(Login);