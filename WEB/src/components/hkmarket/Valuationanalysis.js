
import React,{ Component} from 'react';

import { Select } from 'antd' 
import data from './Valuationanalysis.json';

import './Valuationanalysis.css';

const Option = Select.Option;
  

function handleChange(value) {
    console.log(`selected ${value}`);
}

class ValuationAnalysis extends Component{

    constructor(props) {
        super(props);        
        this.ValuationAnalysisData = data.valuationanalysis;
      }    
    

    render(){
        const { ValuationAnalysisData } =this;
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='valuation-analysis-title'>估值分析</div>
                </div>
                <div style={{marginBottom:'40px', border:'solid 1px #ebeef1'}}>
                <table style={{width:'100%'}}>
                    <tbody>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td style={{paddingTop:'10px', paddingLeft:'40px'}}>
                            <Select 
                                defaultValue="2018" 
                                style={{ width:'80px' }} 
                                onChange={handleChange}
                                size="small"
                                className='valuation-analysis-select'
                            >
                                <Option value="2018">2018年</Option>
                                <Option value="2017">2017年</Option>
                                <Option value="2016">2016年</Option>
                                <Option value="2015">2015年</Option>
                            </Select>
                        </td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td style={{paddingLeft:'35px'}} colSpan='4'>
                            <hr style={{border:'solid 1px #ebeef1'}}/>
                        </td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-type'>{show.valu_type}</td>
                        ))}
                    </tr>  
                    <tr>
                        <th className='valuation-analysis-table-head'>市盈率(PE,TTM)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PE_TTM}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市盈率(PE,LYR)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PE_LYR}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市净率(PB,MRQ)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PB_MRQ}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市净率(PB,LYR)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PB_LYR}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市销率(PS,TTM)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PS_TTM}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市销率(PS,LYR)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PS_LYR}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市现率(PCF,TTM)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PCF_TTM}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>市现率(PCF,LYR)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text'>{show.PCF_LYR}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'></th>
                        <td className='valuation-analysis-table-value-text' colSpan='4'></td>
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>总市值</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{show.total_value}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>流通市值</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{show.circulation_value}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>企业股权价值</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{show.enterprise_equity_value}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>股息率(股价复权)</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{show.dividend_yield}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>区间起始日</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{show.interval_start_date}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='valuation-analysis-table-head'>区间截至日</th>
                        {ValuationAnalysisData.map((show,i)=>(
                            <td className='valuation-analysis-table-value-text' style={{textAlign:'left'}}>{show.interval_end_date}</td>
                        ))}
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

export default ValuationAnalysis;
