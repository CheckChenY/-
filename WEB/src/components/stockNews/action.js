import Axios from 'axios';
export const GET_HK_NEWS = 'GET_HK_NEWS';
export const STOP_GET_HK_NEWS = 'STOP_GET_HK_NEWS';
export const GET_HK_DETAIL = 'GET_HK_DETAIL';
export const GET_HOT_HK_NEWS = 'GET_HOT_HK_NEWS';
export const GET_HK_NEWS_START_LOADING = 'GET_HK_NEWS_START_LOADING';

export const getHKNews = (searchWords,day,currentPage,firstBlood) => dispath => {
    // alert("滑到底部了，吓死宝宝了"+ currentPage)

    dispath({
        type:GET_HK_NEWS_START_LOADING,
        loading:true,
    })
    setTimeout(()=>{
        Axios.get('/api/Info/infoList',{
                params: {
                    searchWords: searchWords,
                    day:day,
                    currentPage:currentPage
                }
            }
        ).then(function(res){
            if(res.data.code === 1){
                const { page } = res.data,
                { total , pageSize} = page,
                numPage = parseInt(total/pageSize,10) + 1;
                dispath({
                    type:GET_HK_NEWS,
                    list:res.data,
                    numPage: numPage,
                    currentPage :currentPage+1,
                    loading:false,
                    firstBlood:firstBlood,
                })
            }
        })
    },1000)
}


// export const stopGetNews = () => dispath => {
//     dispath({
//         type:STOP_GET_HK_NEWS,
//         stop:false
//     })
// }

export const getHKDetail = (pop,id) => dispath => {
    pop.history.push(`/HKDetail?key=1&id=${id}`)
}

export const getIssueDetail = (pop,id) => dispath => {
    pop.history.push(`/IssueDetail?key=2&id=${id}`)
}


export const getHotHKNews = (searchWords,day,currentPageIsseu) => dispath => {

    Axios.get('/api/Issue/issueList',{
        params: {
                searchWords: searchWords,
                day:day,
                currentPage:currentPageIsseu
            }
        }
    ).then(function(res){
        if(res.data.code === 1){
            const { page } = res.data,
            { total , pageSize} = page,
            numPageIsseu = parseInt(total/pageSize,10) + 1;
            dispath({
                type:GET_HOT_HK_NEWS,
                list:res.data,
                numPageIsseu: numPageIsseu,
                currentPageIsseu :currentPageIsseu+1,
                loading:false,
            })
        }
    })
}
