import Axios from 'axios';
export const GET_INDEX_LIST = 'GET_INDEX_LIST';
export const GET_HOT_WORD = 'GET_HOT_WORD';


export const homePage = () => dispath => {
    Axios.get('/api/Market/homePage',)
    .then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_INDEX_LIST,
                data:response.data.data,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const Homepagesearch = (pop,value) => dispath => {
    pop.history.push(`/stockNews?key=${value}`)
}


export const getHotWord = () =>dispath=>{
    Axios.get('/api/Info/showSerchHistory').then(
        function(response){
            dispath({
                type:GET_HOT_WORD,
                data:response.data.data
            })
        }
    )
}