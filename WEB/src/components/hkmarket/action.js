import Axios from 'axios';
import ECharts from 'echarts';
import qs from 'qs';
export const GET_HK_MARKET_LIST = 'GET_HK_MARKET_LIST';
export const GET_HK_MARKET_LIST_SELF = 'GET_HK_MARKET_LIST_SELF';
export const GET_HK_MARKET_LIST_DETAIL = 'GET_HK_MARKET_LIST_DETAIL';
export const GET_HK_STOCK_CODE_LIST = 'GET_HK_STOCK_CODE_LIST';
export const GET_HK_STOCK_CODE_PROFITS = 'GET_HK_STOCK_CODE_PROFITS';
export const GET_HK_GET_YEAR = 'GET_HK_GET_YEAR';
export const GET_HK_GET_VALUATION_LIST = 'GET_HK_GET_VALUATION_LIST';
export const GET_HK_GET_GROW_LIST = 'GET_HK_GET_GROW_LIST';
export const GET_HK_SLCAPITAL_LIST = 'GET_HK_SLCAPITAL_LIST';
export const GET_HK_BACK_LIST = 'GET_HK_BACK_LIST';
export const GET_HK_NEWS_START_LOADING = 'GET_HK_NEWS_START_LOADING';
export const GET_HK_STOCK_LIST = 'GET_HK_STOCK_LIST';
export const GET_HK_STOCK_IMG_LIST = 'GET_HK_STOCK_IMG_LIST';
export const GET_HK_SELF_CODE_VIEW = 'GET_HK_SELF_CODE_VIEW';


export const backList = () => dispath => {
    dispath({
        type:GET_HK_BACK_LIST,
        dataListDetail:true,
        key:'2'
    })
}

//全部列表
export const getHKMarketstockList = (current,userAccount) => dispath => {
    dispath({
        type:GET_HK_NEWS_START_LOADING,
        loading:true
    })
    setTimeout(()=>{
        Axios.get('/api/Market/codeList',{
                params:{
                    currentPage:current,
                    userAccount:userAccount,
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
                    current:current,
                    loading:false
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },1000)
}
//我的自选股列表数据
export const getHKMarketstockListSelf = (current,userAccount) => dispath => {
    dispath({
        type:GET_HK_NEWS_START_LOADING,
        loading:true
    })
    setTimeout(()=>{
        Axios.get('/api/User/selectCode',{
                params:{
                    currentPage:current,
                    userAccount:userAccount,
                    pageSize:10
                }
            }
        )
        .then(function (response) {
            if(response.data.code === 1){
                dispath({
                    type:GET_HK_MARKET_LIST_SELF,
                    data:response.data.data,
                    page:response.data.page,
                    loading:false,
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },1000)
}

//股票总览  是否是已添加的股票
export const setSelfCodeView = (userAccount,a,current) => dispath => {
    dispath({
        type    :GET_HK_SELF_CODE_VIEW,
        code    :2,
    })
    dispath(setSelfCode(current,userAccount))
}

export const getPageList = (data) => dispath => {
    dispath({
        type:GET_HK_MARKET_LIST_DETAIL,
        detail:false,
        data  :data
    })
}

//添加我的自选股
export const setSelfCode= (userAccount,stockCode,current) => dispath => {
    Axios.post('/api/Market/selfSelect',qs.stringify({
        userAccount:userAccount,
        stockCode:stockCode
    }))
    .then(function(response){
        if(response.data.code === 1){
                dispath(getHKMarketstockListSelf(current,userAccount))
                dispath(getHKMarketstockList(current,userAccount))
        }
    })
    .catch(function(error){
        console.log(error);
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

//获取股票总览
export const getInfoStock = (stockCode) => dispath => {
    Axios.get('/api/Market/getInfo',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        console.log(response.data.data);
        if(response.data.code === 1){
            dispath({
                type:GET_HK_STOCK_LIST,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

//获取股票总览K线图片
export const getImageStock = (stockCode) => dispath => {
    Axios.get('/api/Market/getImage',{
            params:{
                stockCode:stockCode,
            }
        }
    )
    .then(function (response) {
        console.log(response.data.data);
        if(response.data.code === 1){
            dispath({
                type:GET_HK_STOCK_IMG_LIST,
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
        if(response.data.code === 1){
            debugger;
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
        nubData.push(item.issuedStock)
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