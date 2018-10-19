import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homePage } from './action';

import Header from '../header/Index';
import HeaderVister from '../header/Header';//访客头部按钮


import Footer from '../footer/Footer';
import Homepagesearch from './Homepagesearch'
import Homepagepicture from './Homepagepicture'
import Homepagestocks from './Homepagestocks'
import Homepageissues from './Homepageissues'

class Home extends Component {

  componentDidMount(){
    const self = this,
    { homePage } = self.props;
    homePage();
  }
  
  render() {
    const self = this,
    { props } = self,
    { state } = props,
    { userId,IndexOne,IndexTwo,IndexTre  } = state;
    return (
      <div style={{minWidth:'1140px'}}>
        {userId===''? <HeaderVister /> : <Header userId={userId} {...props} />}
        <Homepagesearch {...props} />
        <Homepagepicture IndexOne={IndexOne} {...props} />
        <Homepagestocks IndexTre={IndexTre} {...props} />
        <Homepageissues IndexTwo={IndexTwo} {...props}/>
        <Footer/>
      </div>
    );
  }
}


const mapDispatchToProps = state => ({
    state:state.checkReducer
})

export default connect(mapDispatchToProps,{
  homePage
})(Home);

// export default Home;