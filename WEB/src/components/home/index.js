import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homePage } from './action';
import Header from '../header/Header';//访客头部按钮


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
    { props } = self;
    
    return (
      <div
        style={{
          minWidth:'1140px'
        }}
      >
        <Header {...props} />
        <Homepagesearch {...props} vister={true} />
        <Homepagepicture 
        // IndexOne={IndexOne} {...props} 
        />
        <Homepagestocks 
        // IndexTwo={IndexTwo} {...props} 
        />
        <Homepageissues 
        // IndexTre={IndexTre} {...props}
        />
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