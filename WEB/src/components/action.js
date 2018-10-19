import Axios from 'axios';

import { openNotification } from './errcode/index';
export const LOGIN_INDEX = 'LOGIN_INDEX';

// export const LOGIN_USER_INTER = 'LOGIN_USER_INTER'



export const handleSubmit = (pop)=> dispath => {

    pop.form.validateFields((err, values) => {
      if (!err) {
        Axios.post('/api/User/userLogin', {
          userAccount: values.userName,
          userPassword: values.password
        })
        .then(function (response) {
          if(response.data.code === 1){
              localStorage.setItem('userAccount', response.data.data.userAccount);
              localStorage.setItem('userAddress', response.data.data.userAddress);
              localStorage.setItem('userEmail', response.data.data.userEmail);
              localStorage.setItem('userId', response.data.data.userId);
              localStorage.setItem('userNickname', response.data.data.userNickname);
              localStorage.setItem('userSlogan', response.data.data.userSlogan);
              dispath({
                  type:LOGIN_INDEX,
              })
              pop.history.push('/index');
            }else{
              openNotification(response.data.code)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    });
}


