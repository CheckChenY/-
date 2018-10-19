
import React,{ Component} from 'react';
import { connect } from 'react-redux';
import intl from 'react-intl-universal';

import { 
    getHKMarketstockListSelf,
    getPageList,
    setSelfCode
} from './action';

import { Select, Button, Table , Pagination,Icon } from 'antd';

// import './HKmarketstocklist.css';
import './HKmarketstocklistSelf.css';

// import imgoneURL from '../assient/refresh@3x.png';
// import data from './HKmarketstocklist.json'
import imgtwoURL from '../assient/deleteone.png';

const Option = Select.Option;
const Column = Table.Column;

// function handleChange(value) {
//     console.log(`selected ${value}`);
//   }

  
class HKMarketStockList extends Component{
    constructor(props) {
        super(props);        
        this.state = {
            id:'',
            sortkey:'stock_code'
        }
    }
        
    handleChange=(value)=>{  
        switch(value)
        {
            default:
            case  '代码':
            this.setState({ sortkey:'stock_code' })
            break;
            case  '名称':
            this.setState({ sortkey:'secu_code' })
            break;
            case  '最新价':
            this.setState({ sortkey:'latest_price' })
            break;
            case  '涨跌额':
            this.setState({ sortkey:'change_amount' })
            break;
            case  '涨跌幅':
            this.setState({ sortkey:'change_rate' })
            break;
            case  '今开':
            this.setState({ sortkey:'price_today' })
            break;
            case  '最高':
            this.setState({ sortkey:'highest_price' })
            break;
            case  '最低':
            this.setState({ sortkey:'lowest_price' })
            break;
            case  '昨收':
            this.setState({ sortkey:'last_close' })
            break;
        }
    }


    componentDidMount(){
        const self = this,
        { getHKMarketstockListSelf,state } = self.props,
        { userAccount } = state;
        getHKMarketstockListSelf(1,userAccount);
    }
            
    render(){
        const self = this,
        { props,state:selfState } = self,
        { id, sortkey } = selfState,
        { state,getHKMarketstockListSelf ,getPageList,setSelfCode} = props,
        { 
            hkmarketstocklistSelf,
            hkmarketstocklistPageSizeSelf,
            hkmarketstocklistTotalSelf,
            userAccount,
            current,
            loading,
        } = state;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    id:selectedRows[0].stock_code
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            })
        };
        return (
            <div>
                <div style={{height:'43px', backgroundColor: '#f8f8f8',textAlign:'right'}}>
                    <Select className='stocklistself-search' defaultValue={intl.get('code')} onChange={this.handleChange}>
                        <Option value="代码">{intl.get('code')}</Option>
                        <Option value="名称">{intl.get('name')}</Option>
                        {/* <Option value="最新价">{intl.get('latest_price')}</Option>
                        <Option value="涨跌额">{intl.get('rise_fall')}</Option>
                        <Option value="涨跌幅">{intl.get('quote_change')}</Option>
                        <Option value="今开">{intl.get('today_open')}</Option>
                        <Option value="最高">{intl.get('higest')}</Option>
                        <Option value="最低">{intl.get('lowest')}</Option>
                        <Option value="昨收">{intl.get('yesterday_collect')}</Option> */}
                    </Select>
                    <Button 
                        className='stocklistself-button' 
                        style={{padding:'0', border:'none', background:'none'}}
                        onClick={
                            ()=>setSelfCode(userAccount,id,current)
                        }
                    >
                        <img alt='删除' src={imgtwoURL} style={{width:'16px', height:'16px'}}/>
                        <span className='stocklistself-button-text'>{intl.get('delete')}</span>
                    </Button>
                    <Button 
                    className='stocklistself-button' 
                    style={{padding:'0', border:'none', background:'none'}}
                    onClick={
                        ()=>getHKMarketstockListSelf(1,userAccount)
                    }
                    >   
                        {loading ? (
                            <Icon type="sync" style={{color:'red'}} spin />
                        ) : (
                            <Icon type="sync" style={{color:'red'}} />
                        )}
                        {/* <img alt='刷新' src={imgoneURL} style={{width:'18px', height:'18px'}}/> */}
                        <span className='stocklistself-button-text'>{intl.get('refresh')}</span>
                    </Button>
                </div>
                <Table 
                    className='stocklistself-table'
                    dataSource={hkmarketstocklistSelf}
                    size='middle'
                    rowKey="id"
                    rowClassName={(record, index)=>(index%2===0?
                        (
                            'stocklistself-table-row-text-another'
                        ):(
                            'stocklistself-table-row-text'
                        ))}
                    rowSelection={rowSelection}

                    >
                    <Column
                        title={intl.get('code')}
                        dataIndex="stock_code"
                        rowKey="stock_code"                    
                        width='10%'
                        sorter={(a, b) => (a.stock_code - b.stock_code)}                        
                        sortOrder={sortkey==='stock_code'&&'descend'}
                        className='stocklistself-table-code'
                        render={(stock_code,record) => (
                            <span
                            onClick={
                                () => getPageList(record)  
                            }>
                                {stock_code}
                             </span>
                          )}
                    />
                    <Column
                        title={intl.get('name')}
                        dataIndex="secu_code"
                        key="secu_code"                    
                        width='16%'
                        sorter={(a, b) => (a.secu_code - b.secu_code)}                        
                        sortOrder={sortkey==='secu_code'&&'descend'}
                        className='stocklistself-table-name'
                    />
                    <Column
                        title={intl.get('latest_price_en')}
                        dataIndex="latest_price"
                        key="latest_price"                    
                        width='14%'
                        sorter={(a, b) => (a.latest_price - b.latest_price)}                        
                        sortOrder={sortkey==='latest_price'&&'descend'}
                        className='stocklistself-table-normal'
                    />
                    <Column
                        title={intl.get('rise_fall')}
                        dataIndex="change_amount"
                        key="change_amount"                    
                        width='9%'
                        sorter={(a, b) => (a.change_amount - b.change_amount)}                        
                        sortOrder={sortkey==='change_amount'&&'descend'}
                        className='stocklistself-table-change-amount'
                    />
                    <Column
                        title={intl.get('quote_change')}
                        dataIndex="change_rate"
                        key="change_rate"                    
                        width='9%'
                        sorter={(a, b) => (a.change_rate - b.change_rate)}                        
                        sortOrder={sortkey==='change_rate'&&'descend'}
                        className='stocklistself-table-normal'
                    />
                    <Column
                        title={intl.get('today_open')}
                        dataIndex="price_today"
                        key="price_today"                    
                        width='9%'
                        sorter={(a, b) => (a.price_today - b.price_today)}                        
                        sortOrder={sortkey==='price_today'&&'descend'}
                        className='stocklistself-table-normal'
                    />
                    <Column
                        title={intl.get('higest')}
                        dataIndex="highest_price"
                        key="highest_price"                    
                        width='9%'
                        sorter={(a, b) => (a.highest_price - b.highest_price)}                        
                        sortOrder={sortkey==='highest_price'&&'descend'}
                        className='stocklistself-table-normal'
                    />
                    <Column
                        title={intl.get('lowest')}
                        dataIndex="lowest_price"
                        key="lowest_price"                    
                        width='9%'
                        sorter={(a, b) => (a.lowest_price - b.lowest_price)}                        
                        sortOrder={sortkey==='lowest_price'&&'descend'}
                        className='stocklistself-table-normal'
                    />
                    <Column
                        title={intl.get('yesterday_collect')}
                        dataIndex="last_close"
                        key="last_close"                    
                        width='9%'
                        sorter={(a, b) => (a.last_close - b.last_close)}                        
                        sortOrder={sortkey==='last_close'&&'descend'}
                        className='stocklistself-table-normal'
                    />
                    {/* <Column
                        title={intl.get('append_choice_minestock')}
                        dataIndex="status"
                        key="status"                    
                        width='14%'
                        className='stocklist-table-normal'
                        render={(status,record) => 
                            (
                            <span>
                                { status === 1 ?(
                                    <Button 
                                        className='stock-list-select-button-one'
                                        onClick={
                                            ()=>setSelfCode(userAccount,record.stock_code,current,1)
                                        }
                                    >{intl.get('append_success')}</Button>
                                    )
                                    :(
                                    <Button 
                                        className='stock-list-select-button-two'
                                        onClick={
                                            ()=>setSelfCode(userAccount,record.stock_code,current,1)
                                        }
                                    >{intl.get('append_choice_mine')}</Button>
                                )}
                            </span>
                          )
                        }
                    >
                    </Column> */}
                </Table>

                <Pagination
                    className='stocklistself-table-pagination' 
                    defaultCurrent={hkmarketstocklistPageSizeSelf} 
                    total={hkmarketstocklistTotalSelf}
                    onChange={
                        (current, size)=>getHKMarketstockListSelf(current,userAccount)
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
    getHKMarketstockListSelf,
    getPageList,
    setSelfCode,
})(HKMarketStockList);
// export default HKMarketStockList;
