import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Plus from './plus';
// import { getUser } from './action'

// import Header from '../header/Index';
import Header from '../header/Header';//访客头部按钮


import Footer from '../footer/Footer';
import Homepagesearch from './Homepagesearch'
import Homepagepicture from './Homepagepicture'
import Homepagestocks from './Homepagestocks'
import Homepageissues from './Homepageissues'

class Home extends Component {
  render() {
    const self = this,
    { props } = self,
    { state } = props,
    { user } = state;
    return (
      <div
        style={{
          minWidth:'1140px'
        }}
      >
        <Header 
          user={user} 
        />
        {/* <Plus { ...props } /> */}
        {/* <Header /> */}
        {/* <hr style={{border: 'solid 1px #dadada', minWidth:'1000px'}}/> */}
        <Homepagesearch vister={true} />
        {/* <br /> */}
        <Homepagepicture />
        {/* <br /> */}
        <Homepagestocks />
        {/* <br /> */}
        <Homepageissues/>
        {/* <br /> */}
        <Footer/>
      </div>
    );
  }
}


const mapDispatchToProps = state => ({
    state:state.checkReducer
})

export default connect(mapDispatchToProps,{
  // getUser
})(Home);

// export default Home;