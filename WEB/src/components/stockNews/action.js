import Axios from 'axios';
import Tools from '../corn/tools';
import { openNotification } from '../errcode/index';

export const GET_HK_NEWS = 'GET_HK_NEWS';
export const GET_HK_FIRST_NEWS = 'GET_HK_FIRST_NEWS';//首次加载港股资讯列表
export const STOP_GET_HK_NEWS = 'STOP_GET_HK_NEWS';
export const GET_HK_DETAIL = 'GET_HK_DETAIL';
export const GET_HOT_HK_FIRST_NEWS = 'GET_HOT_HK_FIRST_NEWS';//首次港股议题
export const GET_HOT_HK_NEWS = 'GET_HOT_HK_NEWS';
export const GET_HK_NEWS_NONE = 'GET_HK_NEWS_NONE';
export const GET_HK_NEWS_START_LOADING = 'GET_HK_NEWS_START_LOADING';
export const GET_HK_NEWS_NEW_ADD_LIST = 'GET_HK_NEWS_NEW_ADD_LIST';
export const GET_HK_HOT_NEW_ADD_LIST = 'GET_HK_HOT_NEW_ADD_LIST';
export const GET_HK_HOT_NEWS_NONE = 'GET_HK_HOT_NEWS_NONE';

// export const ERR_CODE_STOCKNEWS = 'ERR_CODE_STOCKNEWS';
export const SET_TITLE_INDEX_NEWS = 'SET_TITLE_INDEX_NEWS';

//选择时间查询资讯列表
export const getHKNewsSelect = (value) => dispath => {
    console.log(value);
    const step = Tools.getFromUrlParam('key') || '';
    dispath(getHKNews(step,value,1,3));
}

//查询港股资讯列表
export const getHKFirstNews = (searchWord,day,currentPage) => dispath => {
    dispath({
        type:GET_HK_NEWS_START_LOADING,
        loading:true,
    })
    setTimeout(()=>{
        Axios.get('/api/Info/infoList',{
            params: {
                searchWords: searchWord,
                day:day,
                currentPage:currentPage
            }
        }).then(function(res){
            if(res.data.code === 1){
                const { page } = res.data,
                { total , pageSize} = page,
                numPage = parseInt(total/pageSize,10) + 1;
                if(res.data.data.length === 0){
                    dispath({
                        type:GET_HK_NEWS_NONE,
                        none:false,
                        list:res.data,
                    })
                }else{
                    dispath({
                        type:GET_HK_FIRST_NEWS,
                        list:res.data,
                        numPage: numPage,
                        currentPage :currentPage+1,
                        loading:false,
                        none:true,
                    })
                }
            }else{
                openNotification(res.data.code)
            }
        })
    },1000)
}

//查询港股资讯列表
export const getHKNews = (searchWords,day,currentPage,urlnub) => dispath => {
    dispath({
        type:GET_HK_NEWS_START_LOADING,
        loading:true,
    })
    let searchWord;
    if(urlnub===1){
        searchWord = searchWords.searchword.input.input.value
    }else if(urlnub === 3){
        //选择日期 数组清空 重新添加数据
        dispath({
            type:GET_HK_NEWS_NEW_ADD_LIST,
        })
    }else{
        searchWord = searchWords
    }
    setTimeout(()=>{
        Axios.get('/api/Info/infoList',{
            params: {
                searchWords: searchWord,
                day:day,
                currentPage:currentPage
            }
        }).then(function(res){
            if(res.data.code === 1){
                const { page } = res.data,
                { total , pageSize} = page,
                numPage = parseInt(total/pageSize,10) + 1;
                if(res.data.data.length === 0){
                    dispath({
                        type:GET_HK_NEWS_NONE,
                        none:false,
                        list:res.data,
                    })
                }else{
                    dispath({
                        type:GET_HK_NEWS,
                        list:res.data,
                        numPage: numPage,
                        currentPage :currentPage+1,
                        loading:false,
                        none:true,
                    })
                }
            }else{
                openNotification(res.data.code)
                // dispath({
                //     type:ERR_CODE_STOCKNEWS,
                //     errcode:res.data.code
                // })
            }
        })
    },1000)
}


export const setTitleIndex = (title,bol) => dispath => {
    dispath({
        type:SET_TITLE_INDEX_NEWS,
        title:title,
        dataListDetail:false,
    })
}

export const getHKDetail = (pop,id) => dispath => {
    if(pop.history === undefined){
        return false;
    }else{
        pop.history.push(`/hkDetail?key=1&id=${id}`)
    }
}

export const getIssueDetail = (pop,id) => dispath => {
    if(pop.history === undefined){
        return false;
    }else{
        pop.history.push(`/IssueDetail?key=2&id=${id}`)
    }
}


//选择时间查询港股议题列表
export const getHKIssueSelect = (value) => dispath => {
    const step = Tools.getFromUrlParam('key') || '';
    dispath(getHotHKFirstNews(step,value,1));
}
//首次查询港股议题列表
export const getHotHKFirstNews = (searchWords,day,currentPageIsseu) => dispath => {
    Axios.get('/api/Issue/issueList',{
        params: {
                searchWords: searchWords,
                day:day,
                currentPage:currentPageIsseu,
                pageSize:9,
            }
        }
    ).then(function(res){
        if(res.data.code === 1){
            const { page } = res.data,
            { total , pageSize,pages} = page,
            numPageIsseu = parseInt(total/pageSize,10) + 1;

            if(pages < currentPageIsseu || res.data.data.length === 0){
                dispath({
                    type:GET_HK_HOT_NEWS_NONE,
                    none:false,
                    numPageIsseuTotal:total,
                })
            }else{
                dispath({
                    type:GET_HOT_HK_FIRST_NEWS,
                    list:res.data,
                    numPageIsseu: numPageIsseu,
                    currentPageIsseu :currentPageIsseu+1,
                    numPageIsseuTotal:total,
                    loading:false,
                    issuesNone:true,
                    isseuLoading:true,
                    day:day,
                })
            }
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_STOCKNEWS,
            //     errcode:res.data.code
            // })
        }
    })
}

//查询港股议题列表
export const getHotHKNews = (searchWords,day,currentPageIsseu,nub) => dispath => {
    dispath({
        type:GET_HK_NEWS_START_LOADING,
        loading:true,
    })

    if(nub === 3){
        dispath({
            type:GET_HK_HOT_NEW_ADD_LIST,
            loading:false,
        })
    }
    
    Axios.get('/api/Issue/issueList',{
        params: {
                searchWords: searchWords,
                day:day,
                currentPage:currentPageIsseu,
                pageSize:9,
            }
        }
    ).then(function(res){
        if(res.data.code === 1){
            const { page } = res.data,
            { total , pageSize,pages} = page,
            numPageIsseu = parseInt(total/pageSize,10) + 1;

            if(pages < currentPageIsseu || res.data.data.length === 0){
                dispath({
                    type:GET_HK_HOT_NEWS_NONE,
                    issuesNone:false,
                    numPageIsseuTotal:total,
                    loading:false,
                    isseuLoading:false,
                })
            }else{
                dispath({
                    type:GET_HOT_HK_NEWS,
                    list:res.data,
                    numPageIsseu: numPageIsseu,
                    currentPageIsseu :currentPageIsseu+1,
                    numPageIsseuTotal:total,
                    loading:false,
                })
            }
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_STOCKNEWS,
            //     errcode:res.data.code
            // })
        }
    })
}
