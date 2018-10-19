// import { notification } from 'antd';

export const openNotification = (code) => {
   errCode(code);
};

export const errCode=(val)=>{
	switch(val) {
		case -1:
			alert ('未知错误');
			break;
		case -2:
			alert ( '参数错误');
			break;
		case 2:
			alert ( '新增失败');
			break;
		case 3:
			alert ( 'redis数据清空失败');
			break;
        case 50:
			alert ('账号或者密码错误');
			break;
		case 51:
			alert ( '账号已被使用');
			break;
		case 52:
			alert ( '注册失败');
			break;
		case 53:
			alert ( '信息修改失败');
			break;
		case 54:
			alert ( '没有查询到用户信息');
			break;
		case 55:
			alert ( '用户账号不存在');
			break;
		case 56:
			alert ( '邮箱账号跟注册时不一致');
			break;
		case 57:
			alert ( '密码修改失败');
			break;
		case 58:
			alert ( '邮箱格式错误');
			break;
		case 59:
			alert ( '验证码不能为空');
			break;
		case 60:
			alert ( '验证码输入有误');
			break;
		case 61:
			alert ( '原密码有误');
			break;
		case 62:
			alert ( '验证码已过期');
			break;
		case 63:
			alert ( '没有取到验证码');
			break;
		case 100:
			alert ( '评论或回复内容 不能为空');
			break;
		case 120:
			alert ( '没有公司公告');
			break;
		case 800:
			alert ( 'ES查询错误');
			break;
		default:
			return null
	}
}


  

//   <Button type="primary" onClick={openNotification}>Open the notification box</Button>,