
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { 
    getHKMarketstockList,
    getPageList
} from './action';

import { Select, Button, Table , Pagination } from 'antd';

import './HKmarketstocklist.css';

import imgoneURL from '../assient/refresh@3x.png';
// import data from './HKmarketstocklist.json'

const Option = Select.Option;
const Column = Table.Column;


function handleChange(value) {
    console.log(`selected ${value}`);
  }

class HKMarketStockList extends Component{
    // constructor(props) {
    //     super(props);        
    //     this.StockListData = data.stocklist;
    //   }

      componentDidMount(){
          const self = this,
          { getHKMarketstockList } = self.props;
          getHKMarketstockList(1);
      }

    render(){
        const self = this,
        { props } = self,
        { state,getHKMarketstockList ,getPageList} = props,
        { 
            hkmarketstocklist,
            hkmarketstocklistPageSize,
            hkmarketstocklistTotal 
        } = state;
        return (
            <div>
                <div style={{height:'43px', backgroundColor: '#f8f8f8',textAlign:'right'}}>
                    <Select className='stocklist-search' defaultValue={intl.get('gain')} onChange={handleChange}>
                        <Option value="涨幅">{intl.get('gain')}</Option>
                        <Option value="代码">{intl.get('code')}</Option>
                        <Option value="名称">{intl.get('name')}</Option>
                        <Option value="最新价">{intl.get('latest_price')}</Option>
                        <Option value="涨跌额">{intl.get('rise_fall')}</Option>
                        <Option value="涨跌幅">{intl.get('quote_change')}</Option>
                        <Option value="今开">{intl.get('today_open')}</Option>
                        <Option value="最高">{intl.get('higest')}</Option>
                        <Option value="最低">{intl.get('lowest')}</Option>
                        <Option value="昨收">{intl.get('yesterday_collect')}</Option>
                    </Select>
                    <Button className='stocklist-button' style={{padding:'0', border:'none', background:'none'}}>
                        <img alt='aaa' src={imgoneURL} style={{width:'18px', height:'18px'}}/>
                        <span className='stocklist-button-text'>{intl.get('refresh')}</span>
                    </Button>
                </div>
                <Table 
                    className='stocklist-table'
                    dataSource={hkmarketstocklist}
                    size='middle'
                    onRow={(record) => {
                        // ()=>getPageList(record)
                        return {
                          onClick: () => getPageList(record)      // 点击行
                        //   onMouseEnter: () => {},  // 鼠标移入行
                        };
                      }}

                    // pagination = {
                    //     pageSize: hkmarketstocklistPageSize,
                    //     position:'bottom',
                    //     total:hkmarketstocklistTotal,
                    // }
                    rowClassName={(record, index)=>(index%2===0?
                        (
                            'stocklist-table-row-text-another'
                        ):(
                            'stocklist-table-row-text'
                        ))}

                >
                    <Column
                        title={intl.get('code')}
                        dataIndex="stockCode"
                        key="stockCode"                    
                        width='10%'
                        className='stocklist-table-code'
                        onSelect = {
                            (record, selected, selectedRows, nativeEvent) => {
                                alert(record)
                            }
                        }
                    />
                    <Column
                        title={intl.get('name')}
                        dataIndex="secuCode"
                        key="secuCode"                    
                        width='16%'
                        className='stocklist-table-name'
                    />
                    <Column
                        title={intl.get('latest_price_en')}
                        dataIndex="latest_price"
                        key="latest_price"                    
                        width='12%'
                        className='stocklist-table-normal'
                    />
                    <Column
                        title={intl.get('rise_fall')}
                        dataIndex="change_amount"
                        key="change_amount"                    
                        width='8%'
                        className='stocklist-table-change-amount'
                    />
                    <Column
                        title={intl.get('quote_change')}
                        dataIndex="change_rate"
                        key="change_rate"                    
                        width='8%'
                        className='stocklist-table-normal'
                    />
                    <Column
                        title={intl.get('today_open')}
                        dataIndex="price_today"
                        key="price_today"                    
                        width='8%'
                        className='stocklist-table-normal'
                    />
                    <Column
                        title={intl.get('higest')}
                        dataIndex="highest_price"
                        key="highest_price"                    
                        width='8%'
                        className='stocklist-table-normal'
                    />
                    <Column
                        title={intl.get('lowest')}
                        dataIndex="lowest_price"
                        key="lowest_price"                    
                        width='8%'
                        className='stocklist-table-normal'
                    />
                    <Column
                        title={intl.get('yesterday_collect')}
                        dataIndex="last_close"
                        key="last_close"                    
                        width='8%'
                        className='stocklist-table-normal'
                    />
                    <Column
                        title={intl.get('append_choice_minestock')}
                        dataIndex="self_select_stock"
                        key="self_select_stock"                    
                        width='14%'
                        className='stocklist-table-normal'
                        render={self_select_stock => (
                            <span>
                              {self_select_stock==='是'?(<Button className='stock-list-select-button-one'>{intl.get('append_success')}</Button>):(<Button className='stock-list-select-button-two'>{intl.get('append_choice_mine')}</Button>)}
                            </span>
                          )}
                    >
                    {/* <button>添加自选股</button> */}
                    </Column>
                </Table>

                <Pagination
                    className='stocklist-table-pagination' 
                    defaultCurrent={hkmarketstocklistPageSize} 
                    total={hkmarketstocklistTotal}
                    onChange={
                        (current, size)=>getHKMarketstockList(current)
                }
                 />

            </div>
        )
    } 
}

const mapDispatchToProps = (state) => ({
    state:state.checkReducer
})
  
export default connect(mapDispatchToProps,{
    getHKMarketstockList,
    getPageList
})(HKMarketStockList);
// export default HKMarketStockList;
