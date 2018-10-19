import Axios from 'axios';
import qs from 'qs';

import { openNotification } from '../errcode/index';

export const LOGIN_USER_INTER = 'LOGIN_USER_INTER';

export const GET_USER_REGISTER = 'GET_USER_REGISTER';
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS';
export const GET_BACK_TAB = 'GET_BACK_TAB';
export const GET_USER_PREV_STEP = 'GET_USER_PREV_STEP';

// export const ERR_CODE_LOGIN = 'ERR_CODE_LOGIN';


export const nextStep = (userName,userPassword,passwordAgain)=> dispath => {

    if(userName===''||userPassword===''||passwordAgain===''){
        alert(' 不能为空');
        return false
    }else if(userPassword !== passwordAgain){
        alert(' 两次输入密码不一致');
        return false
    }
	Axios.get(`/api/User/accountCheck?userAccount=${userName}`).then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_USER_REGISTER,
                show:true
            })
        }else{
            openNotification(response.data.code)
            // dispath({
            //     type:ERR_CODE_LOGIN,
            //     errcode:response.data.code
            // })
        }
    })
    .then(function (err) {
        console.log(err);
    })
}

export const prvStep = ()=> dispath => {
    dispath({
        type:GET_USER_PREV_STEP,
        show:false,
        loginTabKey:'1'
    })
}

export const registerSuccess = (userPassword,email ,code,uuid,userName,self) => dispath => {
    Axios.post('/api/User/userRegister',qs.stringify({
        userPassword : userPassword,
        userEmail    : email,
        yz           : code,
        uuid         : uuid,
        userAccount  : userName
    })).then(function (response) {
        if(response.data.code === 1){
            self.history.push('/login?id=1');
            dispath({
                type:GET_BACK_TAB,
                tabNub:1,
            })
            alert("注册成功")
        }else{
            openNotification(response.data.code)
            // dispath({
            //     type:ERR_CODE_LOGIN,
            //     errcode:response.data.code
            // })
        }
    })
    .then(function (err) {
        console.log(err);
    })
}