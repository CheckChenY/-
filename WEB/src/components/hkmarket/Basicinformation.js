
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { 
    getStockCodeList
} from './action';
// import { Row, Col } from 'antd';

import './Basicinformation.css';

class BasicInformation extends Component{

    componentDidMount(){
        const self = this,
        { getStockCodeList,stockCodeList } = self.props,
        { stock_code } = stockCodeList;
        getStockCodeList(stock_code);
    }
    render(){
        const self = this,
        { state } = self.props,
        { dataBasicDetail } = state;
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', borderTop:'solid 1px #ebeef1',borderBottom:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='basic-information-title'>{intl.get('basic_information')}</div>
                </div>
                <table style={{width:'100%', margin:'0',}}>
                    <tbody>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('securities_code')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.stockCode : '00759.HK' }</td>
                            <td className='basic-information-col-3'>{intl.get('securities_shortname')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.secuCode : '证券简称' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('listing_date')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.listedDate : '2018-08-08' }</td>
                            <td className='basic-information-col-3'>{intl.get('type_securities')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.secuTypeli : '普通股' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('exchange')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.tradecName : '香港交易所' }</td>
                            <td className='basic-information-col-3'>{intl.get('plate')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.listeboard : '主板' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('parvalue_share')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.perValue : '0.10 HKD' }</td>
                            <td className='basic-information-col-3'>{intl.get('latest_trading_unit')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.volunit : '2,000' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('latest_closing_price')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.preClose : '0.46 HKD' }</td>
                            <td className='basic-information-col-3'>ISIN</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.isinCode : 'BMG1988W1064' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'><hr style={{border:'solid 1px #ebeef1'}}/></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'><hr style={{border:'solid 1px #ebeef1'}}/></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('company_name')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.compName : 'CEC国际控股有限公司' }</td>
                            <td className='basic-information-col-3'>{intl.get('company_name_en')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.englishName : 'CEC International Holdings Ltd.' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('registration')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.area : 'Bermuda 百慕大' }</td>
                            <td className='basic-information-col-3'>{intl.get('registered_address')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.address : "Canon's Court, 22 Victoria Street, Hamilton, Bermuda" }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('company_establishment_date')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.foundDate : '1999-09-10' }</td>
                            <td className='basic-information-col-3'>{intl.get('office_address')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.officeAddress : '香港九龙观塘巧明街110号兴运工业大厦2楼' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('chairman')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.chairman : '邓凤群' }</td>
                            <td className='basic-information-col-3'>{intl.get('company_website')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.website : 'www.0759.com,www.ceccoils.com,www.irasia.com/listco/hk/cecint' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('registered_capital')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.capital : '559，797，391 CNY' }</td>
                            <td className='basic-information-col-3'>{intl.get('company_secretary')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.secy : '何咏仪' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('number_employees')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.emploNum : '2,070.00' }</td>
                            <td className='basic-information-col-3'>E-MAIL</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.email : 'info@ceccoils.com;secretary@ceccoils.com' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'>{intl.get('auditor')}</td>
                            <td className='basic-information-col-2'>{dataBasicDetail ? dataBasicDetail.auditor : '罗兵咸永道会计师事务所' }</td>
                            <td className='basic-information-col-3'>{intl.get('company_profile')}</td>
                            <td className='basic-information-col-4'>{dataBasicDetail ? dataBasicDetail.compScope : 'CEC国际控股有限公司为一家奉行「循序、坚定、敬业」经营理念的中小型企业,业务包括设计以至生产各类型电子线圈及本地零售业务。电子线圈业务始创于1979年,经过多年来不断循序发展,至今已成为较具规模的电子线圈制造商,产品市场来自包括电讯及信息科技设备、数据网络及电压转换技术、办公室自动化设备、影音产品,以及家居电器及电动工具等不同行业。CEC国际于电子线圈业务经验丰富且具竞争力,在中国内地设有具规模之生产设施、研发部门、销售与客户服务、及遍布中国香港、中国内地、中国台湾及新加坡之市场推广中心。集团于2010年7月7日创立759阿信屋,参照日本生活区的消费模式开拓本地的零售业务。759阿信屋积极将进货领域进一步扩大,除食品外、自行进口急冻食品、酒类、住宅用品、厨具、个人护理用品及化妆品等等。' }</td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                        <tr>
                            <td className='basic-information-col-1'></td>
                            <td className='basic-information-col-2'></td>
                            <td className='basic-information-col-3'></td>
                            <td className='basic-information-col-4'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } 
}


const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getStockCodeList
})(BasicInformation);
// export default BasicInformation;
