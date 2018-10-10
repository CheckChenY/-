import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { 
    getStockProfitTable
} from './action';

import { Row, Col } from 'antd';
import intl from 'react-intl-universal';

import './Slprofitstatement.css'



class Slprofitstatement extends Component{
    componentDidMount(){
        const self = this,
        { getStockProfitTable,stockCodeList } = self.props,
        { stockCode } = stockCodeList;
        getStockProfitTable(stockCode);
    }
    render() {
        const self = this,
        { state } = self.props,
        { dataProfitDetail=[] } = state;
        console.log(dataProfitDetail);
        return (
            <div>
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='profitstetement-title'>{intl.get('slprofitTable')}</div>
                </div>
                <div className="profitstetement-body">
                    <Row>
                        <Col span={6}>
                            <ul className="profitstetement-body-left">
                                <li className="profitstetement-body-left-none"></li>
                                <li className="profitstetement-body-left-one">起始日期</li>
                                <li className="profitstetement-body-left-two">截止日期</li>
                                <li className="profitstetement-body-left-two">报表类型</li>
                                <li className="profitstetement-body-left-two">报表年结日</li>
                                <li className="profitstetement-body-left-two">上市前/上市后</li>
                                <li className="profitstetement-body-left-two">原始币种</li>
                                <li className="profitstetement-body-left-two">营业收入(计算)(元)</li>
                                <li className="profitstetement-body-left-two">销售成本(元)</li>
                                <li className="profitstetement-body-left-two">毛利(计算)(元)</li>
                                <li className="profitstetement-body-left-two">其他收入(元)</li>
                                <li className="profitstetement-body-left-two">销售及分销成本(元)</li>
                                <li className="profitstetement-body-left-two">行政开支(元)</li>
                                <li className="profitstetement-body-left-two">员工薪酬(元)</li>
                                <li className="profitstetement-body-left-two">研发费用(元)</li>
                                <li className="profitstetement-body-left-two">折旧和摊销(元)</li>
                                <li className="profitstetement-body-left-two">其他支出(元)</li>
                                <li className="profitstetement-body-left-two">资产减值损失(元)</li>
                                <li className="profitstetement-body-left-two">重估盈余(元)</li>
                                <li className="profitstetement-body-left-two">出售资产之溢利(元)</li>
                                <li className="profitstetement-body-left-two">经营溢利(计算)(元)</li>
                                <li className="profitstetement-body-left-two">应占联营公司溢利(元)</li>
                                <li className="profitstetement-body-left-two">应占合营公司溢利(元)</li>
                                <li className="profitstetement-body-left-two">财务成本(元)</li>
                                <li className="profitstetement-body-left-two">影响税前利润的其他项目(元)</li>
                                <li className="profitstetement-body-left-two">税前利润(元)</li>
                                <li className="profitstetement-body-left-two">所得税(元)</li>
                                <li className="profitstetement-body-left-two">影响净利润的其他项目(元)</li>
                                <li className="profitstetement-body-left-two">净利润(元)</li>
                                <li className="profitstetement-body-left-two">本公司拥有人应占净利润(元)</li>
                                <li className="profitstetement-body-left-two">非控股权益应占净利润(元)</li>
                                <li className="profitstetement-body-left-two">股息(元)</li>
                                <li className="profitstetement-body-left-two">每股股息(元)</li>
                                <li className="profitstetement-body-left-two">每股收益</li>
                                <li className="profitstetement-body-left-two">基本每股收益(元)</li>
                                <li className="profitstetement-body-left-two">稀释每股收益(元)</li>
                                <li className="profitstetement-body-left-two">其他全面收益(元)</li>
                                <li className="profitstetement-body-left-two">全面收益总额(元)</li>
                                <li className="profitstetement-body-left-two">本公司拥有人应占全面收益总额(元)</li>
                                <li className="profitstetement-body-left-two">非控股权益应占全面收益总额(元)</li>
                                <li className="profitstetement-body-left-two">公告日期</li>
                                <li className="profitstetement-body-left-two">会计准则</li>
                                <li className="profitstetement-body-left-two">审计意见</li>
                                <li className="profitstetement-body-left-two">核数师</li>
                            </ul>
                        </Col>
                        <Col span={18}  style={{overflowX:'scroll'}}>
                            <div className="profitstetement-body-div">
                                {
                                    dataProfitDetail.map((show,i)=>(
                                        <ul className="profitstetement-body-right">
                                            <li className="profitstetement-body-right-one">{show?show.year:'2017年年报'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.startDate:'2017-05-01'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.endDate:'2018-04-30'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.reportType:'合并报表'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.annualReportDate:'0430'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.listingBeforeAfter:'上市后'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.originalCurrency:'港元'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.operatingIncome:'1,979,674,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.salesCost:'-1,285,380,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.grossProfit:'694,294,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.otherIncome:'8,636,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.salesDistributionCost:'-569,947,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.administrativeExpenses:'-151,221,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.employeeCompensation:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.rdCost:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.depreciationAmortization:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.otherExpend:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.assetImpairmentLosses:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.revaluationSurplus:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.profitFromSellingAssets:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.operatingProfit:'-18,238,000.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.affiliatedCompanyProfit:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.jointVentureProfit:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.financialCost:'港元'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.otherProject:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.preTaxProfit:'港元'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.incomeTax:'港元'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.otherNetProfit:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.netProfit:'港元'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.ownerNetProfit:'港元'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.noncontrolNetProfit:'0.00'}&nbsp;</li>
                                            <li className="profitstetement-body-right-two">{show?show.dividend:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.perDividend:'0.00'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.perProfit:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.basicPerProfit:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.dilutionPerProfit:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.otherTotalProfit:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.totalProfitAmount:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.ownerProfitAmount:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.noncontolProfitAmount:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.noticeDate:'2018-07-27'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.accountingStandard:'香港会计准则'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.auditOpinion:'-'}</li>
                                            <li className="profitstetement-body-right-two">{show?show.auditor:'-'}</li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </Col>
                        
                    </Row>
                    
                    
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getStockProfitTable
})(Slprofitstatement);
// export default Slprofitstatement;