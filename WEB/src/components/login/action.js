import Axios from 'axios';
import qs from 'qs';
export const LOGIN_USER_INTER = 'LOGIN_USER_INTER'

export const GET_USER_REGISTER = 'GET_USER_REGISTER'
export const GET_REGISTER_SUCCESS = 'GET_REGISTER_SUCCESS'

export const nextStep = (userName)=> dispath => {
    console.log(userName);

	Axios.get(`/User/accountCheck?userAccount=${userName}`).then(function (response) {

        dispath({
            type:GET_USER_REGISTER,
            show:true
        })
        // if(response.code === '1'){
        // }
    })
    .then(function (err) {
        console.log(err);
    })
}

export const registerSuccess = (userPassword,email ,code,uuid,userName) => dispath => {

    Axios.post('/User/userRegister',qs.stringify({
        userPassword : userPassword,
        userEmail    : email,
        yz           : code,
        uuid         : uuid,
        userAccount  : userName
    })).then(function (response) {

        
        // dispath({
        //     type:GET_REGISTER_SUCCESS,
        //     values:"values",
        // })
        if(response.data.code === '1'){
            alert("注册成功")
        }
    })
    .then(function (err) {
        console.log(err);
    })
}