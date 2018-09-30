import React,{ Component} from 'react';
// import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import './Homepagepicture.css';
import imgoneURL from '../assient/home/1.png';
import imgtwoURL from '../assient/home/2.png';
import imgthreeURL from '../assient/home/3.png';
import imgfourURL from '../assient/home/4.png';


class Homepagepicture extends Component{

    render() {
        return (
            <div className="home-picture-all">
                <div className="home-page-picture">
                    <Carousel autoplay>
                        <div><img alt='轮播'src={imgoneURL}className="home-picture"/></div>
                        <div><img alt='轮播'src={imgtwoURL}className="home-picture"/></div>
                        <div><img alt='轮播'src={imgthreeURL}className="home-picture"/></div>
                        <div><img alt='轮播'src={imgfourURL}className="home-picture"/></div>
                    </Carousel>
                </div>
            </div>
        );
    }
}
                

export default Homepagepicture;