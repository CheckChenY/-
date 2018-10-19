import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { Homepagesearch } from './action'
import './Homepagestocks.css'
// import imgoneURL from '../assient/home/stockphoto.png';
import imgoneURL from '../assient/home/CHANGHE.png';
import imgtwoURL from '../assient/home/SHENDIAN.png';
import imgthreeURL from '../assient/home/XIANGGANG.png';
import imgfourURL from '../assient/home/JIULONG.png';
import imgfiveURL from '../assient/home/HUIFENG.png';
import imgsixURL from '../assient/home/DIANNENG.png';



class Homepagestocks extends Component{
    render() {
        const self = this,
        { props } = self,
        {  Homepagesearch,IndexTre } = props;
        console.log(IndexTre);
        return (
            <div className="home-stock">
                <div className="home-page-stock">
                    <div>
                        <span className="stocks-title-word-left">
                            丨
                        </span>
                        <span className="stocks-title-word">
                            {intl.get('recommend_HKstocks')}
                        </span>
                    </div>
                    <div>
                        <span className="stocks-title-en-word">
                            Hong Kong stock to recommend
                        </span>
                    </div>
                    <div className="stocks-bodyone">
                        <img alt='港股' 
                            src={imgoneURL} 
                            onClick={
                                ()=>Homepagesearch(props,'','2',IndexTre[0].title)
                            }
                            className="stocks-picture"
                        />
                        <img alt='港股' 
                            onClick={
                                ()=>Homepagesearch(props,'','2',IndexTre[1].title)
                            }
                            src={imgtwoURL} 
                            className="stocks-picture"
                        />
                        <img alt='港股' 
                            onClick={
                                ()=>Homepagesearch(props,'','2',IndexTre[2].title)
                            }
                            src={imgthreeURL} 
                            className="stocks-picture1"
                        />
                    </div>
                    <div className="stocks-bodytwo">
                        <img alt='港股' 
                            onClick={
                                ()=>Homepagesearch(props,'','2',IndexTre[3].title)
                            }
                            src={imgfourURL} 
                            className="stocks-picture"
                        />
                        <img alt='港股' 
                            onClick={
                                ()=>Homepagesearch(props,'','2',IndexTre[4].title)
                            }   
                            src={imgfiveURL} 
                            className="stocks-picture"
                        />
                        <img alt='港股' 
                            onClick={
                                ()=>Homepagesearch(props,'','2',IndexTre[5].title)
                            }
                            src={imgsixURL} 
                            className="stocks-picture1"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
                
const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
    
export default connect(mapDispatchToProps,{
    Homepagesearch,
})(Homepagestocks);
// export default Homepagestocks;