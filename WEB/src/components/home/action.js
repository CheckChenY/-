import Axios from 'axios';
import { openNotification } from '../errcode/index';

export const GET_INDEX_LIST = 'GET_INDEX_LIST';
export const GET_HOT_WORD = 'GET_HOT_WORD';
// export const ERR_CODE_HOME = 'ERR_CODE_HOME';


export const homePage = () => dispath => {
    Axios.get('/api/Market/homePage',)
    .then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_INDEX_LIST,
                data:response.data.data,
            })
        }else{
            openNotification(response.data.code)
            // dispath({
            //     type:ERR_CODE_HOME,
            //     errcode:response.data.code
            // })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const Homepagesearch = (pop,value,bol,title) => dispath => {
    if(bol === '2'){
        //首页过来的数据
        pop.history.push(`/stockNews?key=${value}&tab=${bol}&title=${title}`)
    }else{
        pop.history.push(`/stockNews?key=${value}`)
    }
}


export const getHotWord = () =>dispath=>{
    Axios.get('/api/Info/showSerchHistory').then(
        function(response){
            if(response.data.code === 1){
                dispath({
                    type:GET_HOT_WORD,
                    data:response.data.data
                })
            }else{
                openNotification(response.data.code)
                // dispath({
                //     type:ERR_CODE_HOME,
                //     errcode:response.data.code
                // })
            }
        }
    )
}