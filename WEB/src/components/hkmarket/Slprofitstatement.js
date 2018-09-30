import React,{ Component} from 'react';

import './Slprofitstatement.css'



class Slprofitstatement extends Component{

        render() {
            return (
            <div>
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='profitstetement-title'>利润表</div>
                </div>
                <div>
                    <table style={{width:'100%', margin:'0 0 22px', border:'solid 1px #ebeef1'}}>
                        <thead>
                            <tr>
                                <th className="profitstetement-table-title-left"></th>
                                <th className="profitstetement-table-title-right-one">2017年年报</th>
                                <th className="profitstetement-table-title-right">2017年中报</th>
                                <th className="profitstetement-table-title-right">2016年年报</th>
                                <th className="profitstetement-table-title-right-two">2016年中报</th>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr >
                                <td className="profitstetement-table-left">起始日期</td>
                                <td className="profitstetement-table-right-one">2017-05-01</td>
                                <td className="profitstetement-table-right">2017-05-01</td>
                                <td className="profitstetement-table-right">2017-05-01</td>
                                <td className="profitstetement-table-right-two">2017-05-01</td>
                            </tr>
                            <tr >
                                <td className="profitstetement-table-left">截止日期</td>
                                <td className="profitstetement-table-right-one">2018-04-30</td>
                                <td className="profitstetement-table-right">2018-04-30</td>
                                <td className="profitstetement-table-right">2018-04-30</td>
                                <td className="profitstetement-table-right-two">2018-04-30</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">报表类型</td>
                                <td className="profitstetement-table-right-one">合并报表</td>
                                <td className="profitstetement-table-right">合并报表</td>
                                <td className="profitstetement-table-right">合并报表</td>
                                <td className="profitstetement-table-right-two">合并报表</td>
                            </tr>
                            <tr>
                                <td  className="profitstetement-table-left">报表年结日</td>
                                <td className="profitstetement-table-right-one">0430</td>
                                <td className="profitstetement-table-right">0430</td>
                                <td className="profitstetement-table-right">0430</td>
                                <td className="profitstetement-table-right-two">0430</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">上市前/上市后</td>
                                <td className="profitstetement-table-right-one">上市后</td>
                                <td className="profitstetement-table-right">上市后</td>
                                <td className="profitstetement-table-right">上市后</td>
                                <td className="profitstetement-table-right-two">上市后</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">原始币种</td>
                                <td className="profitstetement-table-right-one">港元</td>
                                <td className="profitstetement-table-right">港元</td>
                                <td className="profitstetement-table-right">港元</td>
                                <td className="profitstetement-table-right-two">港元</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">营业收入(计算)(元)</td>
                                <td className="profitstetement-table-right-one">1,979,674,000.00</td>
                                <td className="profitstetement-table-right">1,979,674,000.00</td>
                                <td className="profitstetement-table-right">1,979,674,000.00</td>
                                <td className="profitstetement-table-right-two">1,979,674,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">销售成本(元)</td>
                                <td className="profitstetement-table-right-one">-1,285,380,000.00</td>
                                <td className="profitstetement-table-right">-1,285,380,000.00</td>
                                <td className="profitstetement-table-right">-1,285,380,000.00</td>
                                <td className="profitstetement-table-right-two">-1,285,380,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">毛利(计算)(元)</td>
                                <td className="profitstetement-table-right-one">694,294,000.00</td>
                                <td className="profitstetement-table-right">694,294,000.00</td>
                                <td className="profitstetement-table-right">694,294,000.00</td>
                                <td className="profitstetement-table-right-two">694,294,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">其他收入(元)</td>
                                <td className="profitstetement-table-right-one">8,636,000.00</td>
                                <td className="profitstetement-table-right">8,636,000.00</td>
                                <td className="profitstetement-table-right">8,636,000.00</td>
                                <td className="profitstetement-table-right-two">8,636,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">销售及分销成本(元)</td>
                                <td className="profitstetement-table-right-one">-569,947,000.00</td>
                                <td className="profitstetement-table-right">-569,947,000.00</td>
                                <td className="profitstetement-table-right">-569,947,000.00</td>
                                <td className="profitstetement-table-right-two">-569,947,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">行政开支(元)</td>
                                <td className="profitstetement-table-right-one">-151,221,000.00</td>
                                <td className="profitstetement-table-right">-151,221,000.00</td>
                                <td className="profitstetement-table-right">-151,221,000.00</td>
                                <td className="profitstetement-table-right-two">-151,221,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">员工薪酬(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">研发费用(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">折旧和摊销(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">其他支出(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">资产减值损失(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">重估盈余(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">出售资产之溢利(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">经营溢利(计算)(元)</td>
                                <td className="profitstetement-table-right-one">-18,238,000.00</td>
                                <td className="profitstetement-table-right">-18,238,000.00</td>
                                <td className="profitstetement-table-right">-18,238,000.00</td>
                                <td className="profitstetement-table-right-two">-18,238,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">应占联营公司溢利(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">应占合营公司溢利(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">财务成本(元)</td>
                                <td className="profitstetement-table-right-one">-22,053,000.00</td>
                                <td className="profitstetement-table-right">-22,053,000.00</td>
                                <td className="profitstetement-table-right">-22,053,000.00</td>
                                <td className="profitstetement-table-right-two">-22,053,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">影响税前利润的其他项目(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">税前利润(元)</td>
                                <td className="profitstetement-table-right-one">-40,291,000.00</td>
                                <td className="profitstetement-table-right">-40,291,000.00</td>
                                <td className="profitstetement-table-right">-40,291,000.00</td>
                                <td className="profitstetement-table-right-two">-40,291,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">所得税(元)</td>
                                <td className="profitstetement-table-right-one">7,422,000.00</td>
                                <td className="profitstetement-table-right">7,422,000.00</td>
                                <td className="profitstetement-table-right">7,422,000.00</td>
                                <td className="profitstetement-table-right-two">7,422,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">影响净利润的其他项目(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">净利润(元)</td>
                                <td className="profitstetement-table-right-one">-32,869,000.00</td>
                                <td className="profitstetement-table-right">-32,869,000.00</td>
                                <td className="profitstetement-table-right">-32,869,000.00</td>
                                <td className="profitstetement-table-right-two">-32,869,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">本公司拥有人应占净利润(元)</td>
                                <td className="profitstetement-table-right-one">-32,869,000.00</td>
                                <td className="profitstetement-table-right">-32,869,000.00</td>
                                <td className="profitstetement-table-right">-32,869,000.00</td>
                                <td className="profitstetement-table-right-two">-32,869,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">非控股权益应占净利润(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">股息(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">每股股息(元)</td>
                                <td className="profitstetement-table-right-one">0.0000</td>
                                <td className="profitstetement-table-right">0.0000</td>
                                <td className="profitstetement-table-right">0.0000</td>
                                <td className="profitstetement-table-right-two">0.0000</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">每股收益</td>
                                <td className="profitstetement-table-right-one">-</td>
                                <td className="profitstetement-table-right">-</td>
                                <td className="profitstetement-table-right">-</td>
                                <td className="profitstetement-table-right-two">-</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">基本每股收益(元)</td>
                                <td className="profitstetement-table-right-one">-0.0493</td>
                                <td className="profitstetement-table-right">-0.0493</td>
                                <td className="profitstetement-table-right">-0.0493</td>
                                <td className="profitstetement-table-right-two">-0.0493</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">稀释每股收益(元)</td>
                                <td className="profitstetement-table-right-one">-0.0493</td>
                                <td className="profitstetement-table-right">-0.0493</td>
                                <td className="profitstetement-table-right">-0.0493</td>
                                <td className="profitstetement-table-right-two">-0.0493</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">其他全面收益(元)</td>
                                <td className="profitstetement-table-right-one">31,300,000.00</td>
                                <td className="profitstetement-table-right">31,300,000.00</td>
                                <td className="profitstetement-table-right">31,300,000.00</td>
                                <td className="profitstetement-table-right-two">31,300,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">全面收益总额(元)</td>
                                <td className="profitstetement-table-right-one">-1,569,000.00</td>
                                <td className="profitstetement-table-right">-1,569,000.00</td>
                                <td className="profitstetement-table-right">-1,569,000.00</td>
                                <td className="profitstetement-table-right-two">-1,569,000.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">本公司拥有人应占全面收益总额(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">非控股权益应占全面收益总额(元)</td>
                                <td className="profitstetement-table-right-one">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right">0.00</td>
                                <td className="profitstetement-table-right-two">0.00</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">公告日期</td>
                                <td className="profitstetement-table-right-one">2018-07-27</td>
                                <td className="profitstetement-table-right">2018-07-27</td>
                                <td className="profitstetement-table-right">2018-07-27</td>
                                <td className="profitstetement-table-right-two">2018-07-27</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">会计准则</td>
                                <td className="profitstetement-table-right-one">香港会计准则</td>
                                <td className="profitstetement-table-right">香港会计准则</td>
                                <td className="profitstetement-table-right">香港会计准则</td>
                                <td className="profitstetement-table-right-two">香港会计准则</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">审计意见</td>
                                <td className="profitstetement-table-right-one">-</td>
                                <td className="profitstetement-table-right">-</td>
                                <td className="profitstetement-table-right">-</td>
                                <td className="profitstetement-table-right-two">-</td>
                            </tr>
                            <tr>
                                <td className="profitstetement-table-left">核数师</td>
                                <td className="profitstetement-table-right-one">-</td>
                                <td className="profitstetement-table-right">-</td>
                                <td className="profitstetement-table-right">-</td>
                                <td className="profitstetement-table-right-two">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            );
    }
}

export default Slprofitstatement;