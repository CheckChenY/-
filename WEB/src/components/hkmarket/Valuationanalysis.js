
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { 
    getYear,
    getValuationListSelect
} from './action';
import { Select } from 'antd' 
import data from './Valuationanalysis.json';

import './Valuationanalysis.css';

const Option = Select.Option;
  

// function handleChange(value) {
//     console.log(`selected ${value}`);
// }

class ValuationAnalysis extends Component{

    constructor(props) {
        super(props); 
        this.state = {
            yearArr:[]
        }       
        this.ValuationAnalysisData = data.valuationanalysis;
      }    
    
    componentDidMount(){
          const self = this,
          {   getYear , 
            stockCodeList,
        } = self.props,
        { stock_code } = stockCodeList;
        getYear(stock_code);
    }
    render(){
        const { ValuationAnalysisData,props } =this,
        { state,
            getValuationListSelect=()=>{},
            stockCodeList } = props,
        { stock_code } = stockCodeList,
        { getYearList=[],getValuationList } = state;
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', borderTop:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='valuation-analysis-title'>{intl.get('valuation_analysis')}</div>
                </div>
                <div style={{borderTop:'solid 1px #ebeef1'}}>
                <table style={{width:'100%'}}>
                    <tbody>
                    <tr >
                        <th className='valuation-analysis-table-head'></th>
                        <td style={{paddingTop:'20px', paddingLeft:'40px'}}>
                            <Select 
                                defaultValue="2018" 
                                style={{ width:'80px' }} 
                                onChange={getValuationListSelect}
                                size="small"
                                className='valuation-analysis-select'
                            >
                                 {getYearList.map((show,i)=>(
                                     <Option key={i} name={stock_code} value={show}>{show}年</Option>
                                 ))}
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head-none'></th>
                        <td style={{paddingLeft:'35px',paddingBottom:'10px'}} colSpan='4'>
                            <hr style={{border:'solid 1px #ebeef1'}}/>
                        </td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td key={i} className='valuation-analysis-table-value-type'>{show.valu_type}</td>
                        ))}
                    </tr>  
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_profit_ratio_one')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peTtmAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peTtmMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peTtmMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peTtmFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_profit_ratio_two')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psLyrAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peLyrMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peLyrMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.peLyrFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_netvalue_ratio_one')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbMrqAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbMrqMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbMrqMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbMrqFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_netvalue_ratio_two')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbLyrAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbLyrMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbLyrMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pbLyrFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_sell_ratio_one')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psTtmAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psTtmMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psTtmMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psTtmFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_sell_ratio_two')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psLyrAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psLyrMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psLyrMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.psLyrFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_now_ratio_one')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfTtmAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfTtmMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfTtmMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfTtmFinalValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('market_now_ratio_two')}</th>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfLyrAverageValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfLyrMaxValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfLyrMinValue:'-9.9858'}</td>
                        <td className='valuation-analysis-table-value-text'>{getValuationList?getValuationList.pcfLyrFinalValue:'-9.9858'}</td>
                    </tr>
                    {/* <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td className='valuation-analysis-table-value-text' colSpan='4'></td>
                    </tr> */}
                    <tr>
                        <th className='valuation-analysis-table-head-none'></th>
                        <td style={{paddingLeft:'5px',paddingTop:'10px',paddingBottom:'10px'}} colSpan='4'>
                            <hr style={{border:'solid 1px #ebeef1'}}/>
                        </td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('total_market_capitalization')}</th>
                        <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{getValuationList?getValuationList.totalMarketValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('circulation_market_value')}</th>
                        <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{getValuationList?getValuationList.circulationMarketValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('corporate_equity_value')}</th>
                        <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{getValuationList?getValuationList.equityValue:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('dividend_yield_share_price')}</th>
                        <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{getValuationList?getValuationList.dividendYield:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('interval_start_date')}</th>
                        <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{getValuationList?getValuationList.startDate:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>{intl.get('interval_deadline')}</th>
                        <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{getValuationList?getValuationList.endDate:'-9.9858'}</td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td className='valuation-analysis-table-value-text' colSpan='4'></td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td className='valuation-analysis-table-value-text' colSpan='4'></td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td className='valuation-analysis-table-value-text' colSpan='4'></td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td className='valuation-analysis-table-value-text' colSpan='4'></td>
                    </tr>
                    </tbody>
                </table>               
                </div>
            </div> 
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getYear,
    getValuationListSelect
})(ValuationAnalysis);
// export default ValuationAnalysis;
