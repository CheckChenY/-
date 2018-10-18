import Axios from 'axios';
import qs from 'qs';
import Uuid from 'uuid';
export const GET_IMG_CODE = 'GET_IMG_CODE';
export const GET_HIDE_MODAL = 'GET_HIDE_MODAL';
export const GET_NEXT_STEP_ONE = 'GET_NEXT_STEP_ONE';
export const GET_NEXT_STEP_TWO = 'GET_NEXT_STEP_TWO';
export const GET_NEXT_STEP_TRE = 'GET_NEXT_STEP_TRE';


export const getImgCode = () => dispath => {
    const uuid = Uuid.v4();
    Axios.post('/api/User/checkPicture',qs.stringify({uuid:uuid})
        ,{
            headers: {
            'Content-Type':'application/x-www-form-urlencoded'
            }
        }
        )
        .then(function (response) {
            dispath({
                type:GET_IMG_CODE,
                imgSrc:response.data,
                uuid:uuid,
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

// export const hideModal = () => dispath => {
//     dispath({
//         type:GET_HIDE_MODAL,
//         visible: false,
//     })
// }

// export const nextStepOne = (state) => dispath => {

//     dispath({
//         type:GET_NEXT_STEP_ONE,
//         nextStep: 'one',
//     })
// }
export const nextStepTwo = (uuid,code,userName) => dispath => {
    if(code===''||userName===''){
        alert('不能为空');
        return false;
    }
    Axios.post('/api/User/checkCode',qs.stringify({
            uuid:uuid,
            yanzheng:code,
            userAccount:userName
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

export const getEmailCode = (userName) => dispath => {
    Axios.post('/api/User/sendEmailCode',qs.stringify({
        userAccount:userName
    }))
}

export const nextStepTre = (userName,email,password,emailCode,againPassword) => dispath => {

    if(password === againPassword ){
        Axios.post('/api/User/findPassword',qs.stringify({
                userAccount  :  userName,
                userEmail    :  email,
                userPassword :  password,
                str          :  emailCode
            })
            ,{
                headers: {
                'Content-Type':'application/x-www-form-urlencoded'
                }
            }
        )
        .then(function (response) {
            dispath({
                type:GET_NEXT_STEP_TRE,
                nextStep: 'tre',
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }else{
        alert("密码不一致")
    }
}