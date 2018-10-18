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
        { stock_code } = stockCodeList;
        getStockProfitTable(stock_code);
    }
    render() {
        const self = this,
        { state } = self.props,
        { dataProfitDetail=[] } = state;
        console.log(dataProfitDetail);
        return (
            <div>
                <div style={{padding:'20px 0 22px 0', borderTop:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='profitstetement-title'>{intl.get('income_statement')}</div>
                </div>
                <div className="profitstetement-body">
                    <Row>
                        <Col span={6}>
                            <ul className="profitstetement-body-left">
                                <li className="profitstetement-body-left-none"></li>
                                <li className="profitstetement-body-left-one">{intl.get('start_date')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('deadline')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('report_type')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('report_year_date')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('listing_before_after')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('original_currency')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('operating_income')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('cost_sales')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('gross_profit')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('other_income')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('sales_distribution_costs')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('administrative_expenses')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('employee_compensation')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('development_expenses')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('depreciation_amortization')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('other_expenses')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('asset_impairment_loss')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('revaluation_surplus')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('sale_assets')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('operating_profit')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('share_profit_associates')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('share_joint_associates')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('financial_costs')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('project_impact_profit_before')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('profit_before')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('income_tax')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('project_impact_net_profit')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('net_profit')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('net_profit_company')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('net_profit_controlling')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('dividend')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('dividend_pershare')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('earnings_pershare')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('earnings_pershare_basic')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('earnings_pershare_dilution')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('income_all')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('income_iumpsum')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('income_iumpsum_company')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('income_iumpsum_controlling')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('announcement_date')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('accounting_standards')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('audit_opinions')}</li>
                                <li className="profitstetement-body-left-two">{intl.get('auditor')}</li>
                            </ul>
                        </Col>
                        <Col span={18}>
                            <div style={{overflowX:'auto'}}>
                            <div style={{display:'inline-flex'}} className="profitstetement-body-div">
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