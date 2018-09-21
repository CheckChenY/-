import Axios from 'axios';
import qs from 'qs';
import Uuid from 'uuid';
export const GET_SHOW_MODAL = 'GET_SHOW_MODAL';
export const GET_HIDE_MODAL = 'GET_HIDE_MODAL';
export const GET_NEXT_STEP_ONE = 'GET_NEXT_STEP_ONE';
export const GET_NEXT_STEP_TWO = 'GET_NEXT_STEP_TWO';
export const GET_NEXT_STEP_TRE = 'GET_NEXT_STEP_TRE';

export const GET_EMAIL_CODE = 'GET_EMAIL_CODE';


export const showModal = () => dispath => {
    const uuid = Uuid.v4();
    Axios.post('/User/checkPicture',qs.stringify({uuid:uuid})
        ,{
            headers: {
            'Content-Type':'application/x-www-form-urlencoded'
            }
        }
        )
        .then(function (response) {
            dispath({
                type:GET_SHOW_MODAL,
                visible: true,
                imgSrc:response.data,
                uuid:uuid,
                nextStep: 'one',
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const hideModal = () => dispath => {
    dispath({
        type:GET_HIDE_MODAL,
        visible: false,
    })
}

export const nextStepOne = (state) => dispath => {

    dispath({
        type:GET_NEXT_STEP_ONE,
        nextStep: 'one',
    })
}
export const nextStepTwo = (uuid,code) => dispath => {
    Axios.post('/User/checkCode',qs.stringify({
            uuid:uuid,
            yanzheng:code,
            userAccount:localStorage.getItem("userName")
        })
        ,{
            headers: {
            'Content-Type':'application/x-www-form-urlencoded'
            }
        }
    )
    .then(function (response) {
        dispath({
            type:GET_NEXT_STEP_TWO,
            nextStep: 'two',
            visible: true,
            email:response.data.data
        })
    })
    .catch(function (error) {
        console.log(error);
    });
}

export const getEmailCode = (email) => dispath => {
    const userName = localStorage.getItem("userName");
    Axios.post('/User/getCode',qs.stringify({
        userAccount:userName
    }))
    .then(function(response){
        console.log(response);
        dispath({
            type:GET_EMAIL_CODE,
        })
    })
}

export const nextStepTre = () => dispath => {
    dispath({
        type:GET_NEXT_STEP_TRE,
        nextStep: 'tre',
    })
}