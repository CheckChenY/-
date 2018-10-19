import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { getHKDetail } from '../stockNews/action';
import { Carousel } from 'antd';
import './Homepagepicture.css';
import imgoneURL from '../assient/home/1.png';
import imgtwoURL from '../assient/home/2.png';
import imgthreeURL from '../assient/home/3.png';
// import imgfourURL from '../assient/home/4.png';


class Homepagepicture extends Component{
    render() {
        const self = this,
        {  IndexOne ,getHKDetail} = self.props;
        return (
            <div className="home-picture-all">
                <div className="home-page-picture">
                    <Carousel autoplay>
                        <div><img 
                        name={IndexOne?IndexOne[0].styleId:'18'} 
                        onClick={
                            ()=>getHKDetail(this.props,IndexOne[0].styleId)
                        }
                        alt='轮播'src={imgoneURL}className="home-picture"/></div>
                        <div><img name={IndexOne?IndexOne[1].styleId:'18'} 
                        onClick={
                            ()=>getHKDetail(this.props,IndexOne[1].styleId)
                        }
                        alt='轮播'src={imgtwoURL}className="home-picture"
                        /></div>
                        <div><img name={IndexOne?IndexOne[2].styleId:'18'} 
                        onClick={
                            ()=>getHKDetail(this.props,IndexOne[2].styleId)
                        }
                        alt='轮播'src={imgthreeURL}className="home-picture"
                        /></div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
                
const mapDispatchToProps = state => ({
    state:state.checkReducer
})

export default connect(mapDispatchToProps,{
    getHKDetail
})(Homepagepicture);
// export default Homepagepicture;