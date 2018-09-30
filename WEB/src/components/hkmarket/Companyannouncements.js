
import React,{ Component} from 'react';

import { Table } from 'antd';

import data from './Companyannouncements.json';

import './Companyannouncements.css';

const { Column } = Table;

  
class CompanyAnnouncements extends Component{

    constructor(props) {
        super(props);
        
        this.CompanyAnnouncementsData = data.companyannouncements;
      }
         

    render(){

        const { CompanyAnnouncementsData } =this;
        return (
            <div >
                <div style={{padding:'20px 0 22px 0', border:'solid 1px #ebeef1'}}>
                    <div style={{borderRight:'4px solid #f56f6f', marginLeft:'30px', display:'inline'}}/>
                    <div className='company-anouncement-title'>公司公告</div>
                </div>
                <Table 
                    className='company-anouncement-table'
                    dataSource={CompanyAnnouncementsData} 
                    size='middle'
                    pagination={{ pageSize: 16 , position:'bottom'}}
                    rowClassName={(record, index)=>(index%2===0?
                        (
                            'company-anouncement-table-row-text-another'
                        ):(
                            'company-anouncement-table-row-text'
                        ))}
                >
                    <Column
                        title='标题'
                        dataIndex="title"
                        key="title"                    
                        width='70%'
                        className='company-anouncement-table-title'
                    />
                    <Column
                        title='日期'
                        dataIndex="date"
                        key="date"                    
                        width='30%'
                        className='company-anouncement-table-date'
                    />
                </Table>                
            </div>
        )
    } 
}

export default CompanyAnnouncements;
