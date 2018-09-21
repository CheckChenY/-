import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Plus from './plus';
import {homePlus } from '../action'

// import Header from '../header/Index'
import Header from '../header/Header'
import Homepagesearch from './Homepagesearch'
import Homepagepicture from './Homepagepicture'
import Homepagestocks from './Homepagestocks'
import Homepageissues from './Homepageissues'

class Home extends Component {
  render() {
    // const self = this,
    // { props } = self,
    // { user } = props.loadingTxt;
    return (
      <div>
        {/* <Header user={JSON.parse(user)} /> */}
        {/* <Plus { ...props } /> */}
        <Header />
        <Homepagesearch />
        <br />
        <Homepagepicture />
        <br />
        <Homepagestocks />
        <br />
        <Homepageissues/>
        <br />
      </div>
    );
  }
}


const mapDispatchToProps = state => ({
    loadingTxt:state.checkReducer
})

export default connect(mapDispatchToProps,{
    homePlus
})(Home);