import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';
import { Homepagesearch,getHotWord } from './action'

import { Input } from 'antd';
import './Homepagesearch.css';

const Search = Input.Search;

class Homepage extends Component{

    constructor(props){
        super(props)
        this.state = {
            keyValue:''
        }
        this.handeChangeValue = this.handeChangeValue.bind(this);
    }

    componentDidMount(){
        const self = this,
        { getHotWord } = self.props;
        getHotWord();
    }

    handeChangeValue = (e) =>{
        this.setState({
            keyValue:e.target.innerText
        })
    }

        render() {
            const self = this,
            { props,state} = self,
            { keyValue } = state,
            { Homepagesearch ,state:selfState} = props,
            { hotWordList=[] } = selfState;
            return (
                <div className="home-page-search">
                    <div className="user-head">
                        <div className="search">
                            {/* {
                                vister ? (
                                    <Search
                                        className="search-content"
                                        defaultValue={keyValue}
                                        enterButton={intl.get('search')}
                                        size="large"
                                        onSearch={
                                            ()=>{
                                                alert('请登录')
                                            }
                                        }
                                    />
                                ) : ( */}
                                    <Search
                                        className="search-content"
                                        defaultValue={keyValue}
                                        enterButton={intl.get('search')}
                                        size="large"
                                        onSearch={
                                            defaultValue=>Homepagesearch(props,defaultValue)
                                        }
                                        
                                    />
                                {/* )
                            } */}
                        </div>
                        <div className="hotsearch-all">
                            <span className="hotsearch-title">
                                {intl.get('search_hot')+':'}
                            </span>
                            {
                                hotWordList.map((show,i)=>(
                                    <span 
                                        className="hotsearch-title-one"
                                            key={i}
                                            onClick={
                                                ()=>Homepagesearch(props,show)
                                            }
                                        >
                                        {show}
                                    </span>
                                ))
                            }
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
    getHotWord
})(Homepage);

// export default Homepagesearch;
                

