import Axios from 'axios';
// import qs from 'qs';
// import Uuid from 'uuid';
export const SAVE_USER_CODE = 'SAVE_USER_CODE';
export const GET_LOADING_INT = 'GET_LOADING_INT';
export const GET_LOADING_BOOL = 'GET_LOADING_BOOL';
export const GET_MESSAGE_LIST = 'GET_MESSAGE_LIST';

export const userInfoUpdate = (self,userAccount,userNickname,) => dispath => {
    console.log(self.userEmail);
    console.log(self.userAddress);
    debugger;
    Axios.post('/api/User/userInfoUpdate',{
            userAccount:userAccount,
            userEmail:self.userEmail.input.value,
            userNickname:self.userNickname.input.value,
            userAddress:self.userAddress.input.value,
            userSlogan:self.userSlogan.textAreaRef.value,
        }
    )
    .then(function (response) {
        
        if(response.data.code === 1){
            alert("保存成功")
            dispath({
                type:SAVE_USER_CODE,
                show:false,
                userAccount:userAccount,
                userEmail:self.userEmail.input.value,
                userNickname:self.userNickname.input.value,
                userAddress:self.userAddress.input.value,
                userSlogan:self.userSlogan.textAreaRef.textContent,
            })
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}


export const getLoading = (userId) => dispath => {
    console.log(userId);
    Axios.get(`/api/User/getComment?userId=${userId}`).then(function(response){
        if(response.data.code === 1){
            dispath({
                type:GET_LOADING_INT,
                data:response.data.data,
            })
        }
    })
}
//获取我的消息
export const getMessage = (userId) => dispath => {
    console.log(userId);
    Axios.get(`/api/User/getMessage?userId=${userId}`).then(function(response){
        if(response.data.code === 1){
            dispath({
                type:GET_MESSAGE_LIST,
                data:response.data.data,
            })
        }
    })
}

export const getLoadingBool = (userId) => dispath => {
    dispath({
        type:GET_LOADING_BOOL,
        tabBol:true,
    })
}


