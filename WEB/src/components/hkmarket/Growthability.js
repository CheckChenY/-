
import React,{ Component} from 'react';

import data from './Growthability.json';

import './Growthability.css';


  
  
class GrowthAbility extends Component{

    constructor(props) {
        super(props);        
        this.GrowthAbilityData = data.growthability;
      }
         

    render(){
        const { GrowthAbilityData } =this;
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='growth-ability-title'>成长能力</div>
                </div>
                <div style={{marginBottom:'40px', border:'solid 1px #ebeef1'}}>
                <table >
                    <tbody>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-year'>{show.year}</td>
                        ))}
                    </tr>                    
                    <tr>
                        <th className='growth-ability-table-head'>总资产同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.total_assets}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>每股净资产同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.net_asset_per_share}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>总负债同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.total_liabilities}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>税前利润同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.pre_tax_profit}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>基本每股收益同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.basic_earnings_per_share}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>毛利同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.gross_profit}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>归属母公司股东净利润同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.net_profit_of_parent_shareholder}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>归属母公司股东的权益同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.equity_attributable_of_parent_shareholder}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>营业利润同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.operating_profit}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>营业收入同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.operating_revenue}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'>股东权益合计同比增长率(%)</th>
                        {GrowthAbilityData.map((show,i)=>(
                            <td className='growth-ability-table-text'>{show.total_shareholder_equity}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>     
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    <tr>
                        <th className='growth-ability-table-head'></th>
                    </tr>
                    </tbody>
                </table>               
                </div>
            </div> 
        )
    } 
}

export default GrowthAbility;
