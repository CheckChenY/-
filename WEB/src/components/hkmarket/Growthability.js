
import React,{ Component} from 'react';
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
        { stockCode } = stockCodeList;
        getGrowBili(stockCode);
    }

    render(){
        const self = this,
        { GrowthAbilityData } = self,
        { state } =  self.props,
        { getGrowList=[] } = state;
        console.log(getGrowList,GrowthAbilityData);
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='growth-ability-title'>成长能力</div>
                </div>
                <div style={{marginBottom:'40px', border:'solid 1px #ebeef1'}}>
                <Row>
                    <Col span={7}>
                        <ul className='growth-ability-head-ul'>
                            <li className="growth-ability-head"></li>
                            <li className="growth-ability-head">总资产同比增长率(%)</li>
                            <li className="growth-ability-head">每股净资产同比增长率(%)</li>
                            <li className="growth-ability-head">总负债同比增长率(%)</li>
                            <li className="growth-ability-head">税前利润同比增长率(%)</li>
                            <li className="growth-ability-head">基本每股收益同比增长率(%)</li>
                            <li className="growth-ability-head">毛利同比增长率(%)</li>
                            <li className="growth-ability-head">归属母公司股东净利润同比增长率(%)</li>
                            <li className="growth-ability-head">归属母公司股东的权益同比增长率(%)</li>
                            <li className="growth-ability-head">营业利润同比增长率(%)</li>
                            <li className="growth-ability-head">营业收入同比增长率(%)</li>
                            <li className="growth-ability-head">股东权益合计同比增长率(%)</li>
                            <li className="growth-ability-head" style={{height:'19px'}}></li>
                        </ul>
                    </Col>
                    <Col span={17} >
                        <div style={{overflowX:'auto'}}>
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
