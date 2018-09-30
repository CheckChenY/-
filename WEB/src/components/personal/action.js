import Axios from 'axios';
// import qs from 'qs';
// import Uuid from 'uuid';
export const SAVE_USER_CODE = 'SAVE_USER_CODE';
export const GET_LOADING_INT = 'GET_LOADING_INT';
export const GET_LOADING_BOOL = 'GET_LOADING_BOOL';
// export const GET_UPDATA_LOCATION_USER = 'GET_UPDATA_LOCATION_USER';

export const userInfoUpdate = (userAccount,userEmail,userNickname,userAddress,userSlogan) => dispath => {
    Axios.post('/api/User/userInfoUpdate',{
            userAccount:userAccount,
            userEmail:userEmail,
            userNickname:userNickname,
            userAddress:userAddress,
            userSlogan:userSlogan,
        }
    )
    .then(function (response) {
        if(response.data.code === 1){
            alert("保存成功")
            dispath({
                type:SAVE_USER_CODE,
                show:false,
                userAccount:userAccount,
                userEmail:userEmail,
                userNickname:userNickname,
                userAddress:userAddress,
                userSlogan:userSlogan,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}
export const getLoading = (userId) => dispath => {
    // console.log(211111111111111111111111111111111111111)
    // if(Bool === true){
    //     dispath({
    //         type:GET_LOADING_INT,
    //         Bool:true,
    //     })
    // }else if(Bool === false){
    //     console.log(311111111111111111111111111111111111111)
        Axios.get(`/api/User/getComment?userId=${userId}`).then(function(response){
            if(response.data.code === 1){
                dispath({
                    type:GET_LOADING_INT,
                    Bool:true,
                    data:response.data.data,
                })
            }
        })
    // }
    // else if(Bool === 1){
    //     console.log(111111111111111111111111111111111111111)
    //     dispath({
    //         type:GET_LOADING_INT,
    //         Bool:false,
    //     })
    // }
}

export const getLoadingBool = (userId) => dispath => {
    dispath({
        type:GET_LOADING_BOOL,
        Bool:false,
    })
}


