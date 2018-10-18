import Axios from 'axios';

export const LOGIN_INDEX = 'LOGIN_INDEX'
// export const HOME_PLUS_TEXT = 'HOME_PLUS_TEXT'

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
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      });

    // Axios.post('/api/User/userLogin', {
    //     userAccount: pop.userName.input.input.value,
    //     userPassword: pop.userPassword.input.input.value,
    // })
    // .then(function (response) {
    //     if(response.data.code === 1){
    //         localStorage.setItem('userAccount', response.data.data.userAccount);
    //         localStorage.setItem('userAddress', response.data.data.userAddress);
    //         localStorage.setItem('userEmail', response.data.data.userEmail);
    //         localStorage.setItem('userId', response.data.data.userId);
    //         localStorage.setItem('userNickname', response.data.data.userNickname);
    //         localStorage.setItem('userSlogan', response.data.data.userSlogan);
    //         dispath({
    //             type:LOGIN_INDEX,
    //         })
    //         pop.history.push('/index');
    //     }
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
}


// export const homePlus = ()=> dispath => {
// 	dispath({
// 		type:HOME_PLUS_TEXT,
// 		homePlusTxt:"我是第二个reduce人",
// 		num:1,
// 	})
// }


