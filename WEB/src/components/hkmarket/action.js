import Axios from 'axios';
import ECharts from 'echarts';
export const GET_HK_MARKET_LIST = 'GET_HK_MARKET_LIST';
export const GET_HK_MARKET_LIST_DETAIL = 'GET_HK_MARKET_LIST_DETAIL';
export const GET_HK_STOCK_CODE_LIST = 'GET_HK_STOCK_CODE_LIST';
export const GET_HK_STOCK_CODE_PROFITS = 'GET_HK_STOCK_CODE_PROFITS';
export const GET_HK_GET_YEAR = 'GET_HK_GET_YEAR';
export const GET_HK_GET_VALUATION_LIST = 'GET_HK_GET_VALUATION_LIST';
export const GET_HK_GET_GROW_LIST = 'GET_HK_GET_GROW_LIST';
export const GET_HK_SLCAPITAL_LIST = 'GET_HK_SLCAPITAL_LIST';
export const GET_HK_BACK_LIST = 'GET_HK_BACK_LIST';


export const backList = () => dispath => {
    dispath({
        type:GET_HK_BACK_LIST,
        dataListDetail:true,
    })
}

export const getHKMarketstockList = (current) => dispath => {
    Axios.get('/api/Market/codeList',{
            params:{
                currentPage:current,
                pageSize:10
            }
        }
    )
    .then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_HK_MARKET_LIST,
                data:response.data.data,
                page:response.data.page,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const getPageList = (data) => dispath => {
    dispath({
        type:GET_HK_MARKET_LIST_DETAIL,
        detail:false,
        data  :data
    })
}



export const getStockCodeList = (stockCode) => dispath => {
    Axios.get('/api/Market/basicData',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        console.log(response.data.data);
        if(response.data.code === 1){
            dispath({
                type:GET_HK_STOCK_CODE_LIST,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
//获取股本结构数据列表
export const getSlcapitalList = (stockCode) => dispath => {

    Axios.get('/api/Market/structure',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        console.log(response.data.data);
        if(response.data.code === 1){
            dispath(getSlcapitalView(response.data.data));
            dispath({
                type:GET_HK_SLCAPITAL_LIST,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
export const getSlcapitalView = (stockCode) => dispath => {
    // let echarts = require('echarts');
    console.log(stockCode);
    const data = [],nubData = [];

    stockCode.map((show)=>(
        data.push(show.changeReason)
    ))
    stockCode.map((item)=>(
        nubData.push(item.issuedStock.replace(/,/g,''))
    ))

    var myChart = ECharts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
        tooltip: {},
        xAxis: {
            data: data
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: nubData
        }]
    });
}

//估值分析 获取年份
export const getYear = (stockCode) => (dispath) => {
    let firstYear;
    Axios.get('/api/Market/gzYear',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        if(response.data.code === 1){
            firstYear = response.data.data[0]
            dispath(getValuationListSis(firstYear,stockCode))
            dispath({
                type:GET_HK_GET_YEAR,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });


//     // 重新取得中類列表與產品
//   if(firstYear){
//     dispatch({getValuationList(stockCode,firstYear)});
//   }

    // setTimeout(()=>{
    //     Axios.get('/api/Market/guZhi',{
    //             params:{
    //                 stockCode:stockCode,
    //                 year:firstYear
    //             }
    //         }
    //     )
    //     .then(function (response) {
    //         if(response.data.code === 1){
    //             console.log(response.data.data);
    //             dispath({
    //                 type:GET_HK_GET_VALUATION_LIST,
    //                 data:response.data.data,
    //             })
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     },500);
    // })
}
//估值分析 选择获取数据
export const getValuationListSis = (firstYear,stockCode) => dispath => {
    Axios.get('/api/Market/guZhi',{
            params:{
                stockCode:stockCode,
                year:firstYear
            }
        }
    )
    .then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_HK_GET_VALUATION_LIST,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
//选择年份获取数据
export const getValuationListSelect = (Year,Code) => dispath => {
    let firstYear = Code.props.value;
    let stockCode = Code.props.name;
    dispath(getValuationListSis(firstYear,stockCode))
}


//成长能力 选择获取数据
export const getGrowBili = (stockCode) => dispath => {
    Axios.get('/api/Market/growthAbility',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_HK_GET_GROW_LIST,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

//利润表
export const getStockProfitTable = (stockCode) => dispath => {
    Axios.get('/api/Market/profit',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        
        if(response.data.code === 1){
            dispath({
                type:GET_HK_STOCK_CODE_PROFITS,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}