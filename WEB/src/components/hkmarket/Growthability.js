
import React,{ Component} from 'react';
import intl from 'react-intl-universal';

import { connect } from 'react-redux';
import {Row , Col} from 'antd';
import { 
    getGrowBili,
} from './action';
import data from './Growthability.json';

import './Growthability.css';


  
  
class GrowthAbility extends Component{
    constructor(props) {
        super(props);        
        this.GrowthAbilityData = data.growthability;
    }
    componentDidMount(){
        const self = this,
        { getGrowBili,stockCodeList } = self.props,
        { stock_code } = stockCodeList;
        getGrowBili(stock_code);
    }

    render(){
        const self = this,
        { GrowthAbilityData } = self,
        { state } =  self.props,
        { getGrowList=[] } = state;
        console.log(getGrowList,GrowthAbilityData);
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', borderTop:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='growth-ability-title'>{intl.get('growth_ability')}</div>
                </div>
                <div style={{ borderTop:'solid 1px #ebeef1'}}>
                <Row>
                    <Col span={7}>
                        <ul className='growth-ability-head-ul'>
                            <li className="growth-ability-head-one"></li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_total_assets')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_net_assets')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_total_liability')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_profit_before')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_basic_income')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_gross_profit')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_net_profit')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_equity')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_operating_profit')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_operating_income')}</li>
                            <li className="growth-ability-head">{intl.get('yeargrowth_ratio_shareholders_equity')}</li>
                            <li className="growth-ability-head" style={{height:'19px'}}></li>
                        </ul>
                    </Col>
                    <Col span={17} >
                        <div style={{overflowX:'auto',paddingRight:'2px'}}>
                        <div style={{display:'inline-flex'}}>
                            {
                                getGrowList.map((show,i)=>(
                                    <ul className='growth-ability-text-ul' >
                                        <li className="growth-ability-year">{show?show.year:'-'}</li>
                                        <li className="growth-ability-text">{show?show.totalAssets:'-'}</li>
                                        <li className="growth-ability-text">{show?show.perAssets:'-'}</li>
                                        <li className="growth-ability-text">{show?show.totalLiabilities:'-'}</li>
                                        <li className="growth-ability-text">{show?show.preTaxProfit:'-'}</li>
                                        <li className="growth-ability-text">{show?show.basicEarnings:'-'}</li>
                                        <li className="growth-ability-text">{show?show.grossProfit:'-'}</li>
                                        <li className="growth-ability-text">{show?show.netParentCompany:'-'}</li>
                                        <li className="growth-ability-text">{show?show.rateParentCompany:'-'}</li>
                                        <li className="growth-ability-text">{show?show.operatingProfit:'-'}</li>
                                        <li className="growth-ability-text">{show?show.operatingIncome:'-'}</li>
                                        <li className="growth-ability-text">{show?show.shareholdersEquity:'-'}</li>                
                                    </ul>
                                ))
                            }
                        </div>
                        </div>
                    </Col>                        
                </Row>
                </div> 
            </div> 
        )
    } 
}

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getGrowBili
})(GrowthAbility);
// export default GrowthAbility;
