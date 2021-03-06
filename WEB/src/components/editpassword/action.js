import Axios from 'axios';
import qs from 'qs';
import { openNotification } from '../errcode/index';

// import Uuid from 'uuid';
// export const GET_SHOW_MODAL = 'GET_SHOW_MODAL';
// export const GET_HIDE_MODAL = 'GET_HIDE_MODAL';
// export const GET_NEXT_STEP_ONE = 'GET_NEXT_STEP_ONE';
// export const GET_NEXT_STEP_TWO = 'GET_NEXT_STEP_TWO';
// export const GET_NEXT_STEP_TRE = 'GET_NEXT_STEP_TRE';

// export const GET_EMAIL_CODE = 'GET_EMAIL_CODE';

export const GET_EDIT_PASSWORD = 'GET_EDIT_PASSWORD';
export const GET_EDIT_PASSWORD_HIDE = 'GET_EDIT_PASSWORD_HIDE';
// export const ERR_CODE_EDITPASSWORD = 'ERR_CODE_EDITPASSWORD';

// export const EDIT_PASSWORD_SAVE = 'EDIT_PASSWORD_SAVE';


// export const showModal = () => dispath => {
//     const uuid = Uuid.v4();
//     Axios.post('/User/checkPicture',qs.stringify({uuid:uuid})
//         ,{
//             headers: {
//             'Content-Type':'application/x-www-form-urlencoded'
//             }
//         }
//         )
//         .then(function (response) {
//             dispath({
//                 type:GET_SHOW_MODAL,
//                 visible: true,
//                 imgSrc:response.data,
//                 uuid:uuid,
//                 nextStep: 'one',
//             })
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

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
// export const nextStepTwo = (uuid,code) => dispath => {
//     Axios.post('/User/checkCode',qs.stringify({
//             uuid:uuid,
//             yanzheng:code,
//             userAccount:localStorage.getItem("userName")
//         })
//         ,{
//             headers: {
//             'Content-Type':'application/x-www-form-urlencoded'
//             }
//         }
//     )
//     .then(function (response) {
//         dispath({
//             type:GET_NEXT_STEP_TWO,
//             nextStep: 'two',
//             visible: true,
//             email:response.data.data
//         })
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// }

// export const getEmailCode = (email) => dispath => {
//     const userName = localStorage.getItem("userName");
//     Axios.post('/User/getCode',qs.stringify({
//         userAccount:userName
//     }))
//     .then(function(response){
//         console.log(response);
//         dispath({
//             type:GET_EMAIL_CODE,
//         })
//     })
// }

// export const nextStepTre = () => dispath => {
//     dispath({
//         type:GET_NEXT_STEP_TRE,
//         nextStep: 'tre',
//     })
// }



export const editPassword = () => dispath => {
    dispath({
        type:GET_EDIT_PASSWORD,
        visible: true,
    })
}
export const editPasswordHide = () => dispath => {
    dispath({
        type:GET_EDIT_PASSWORD_HIDE,
        visible: false,
    })
}

export const editPasswordSave = (userPassword,newPassword,userName,newPasswordAgain) => dispath => {
    if(newPasswordAgain===''){
        alert('不能为空');
        return false;
    }else if(newPassword !==newPasswordAgain){
        alert('两次输入密码不同');
        return false;
    }

    Axios.post('/api/User/updatePassword',qs.stringify({
        userPassword : userPassword,
        newPassword  : newPassword,
        userAccount  : userName
    })).then(function (response) {
        if(response.data.code === 1){
            dispath({
                type:GET_EDIT_PASSWORD_HIDE,
                visible: false,
            })
            alert("修改成功")
        }else{
            openNotification(response.data.code)
            // dispath({
            //     type:ERR_CODE_EDITPASSWORD,
            //     errcode:response.data.code
            // })
        }
    })
    .then(function (err) {
        console.log(err);
    })


}

