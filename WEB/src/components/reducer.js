import { combineReducers } from 'redux';

import update from 'react-addons-update';


// import {
// 	GET_UPDATA_LOCATION_USER,
// } from './home/action'

import {
	GET_USER_REGISTER,
	GET_REGISTER_SUCCESS,
} from './login/action'

import {
	GET_EDIT_PASSWORD,
	GET_EDIT_PASSWORD_HIDE,
} from './editpassword/action'

import {
	SAVE_USER_CODE,
	GET_LOADING_INT,
	GET_LOADING_BOOL,
} from './personal/action'

// import {
// 	GET_HOME_SEARCH_TEXT,
// } from './home/action'

import {
	GET_HK_NEWS,
	// STOP_GET_HK_NEWS,
	GET_HOT_HK_NEWS,
	GET_HK_NEWS_START_LOADING
} from './stockNews/action'

import {
	GET_HK_DETAIL_NEWS,
	GET_HK_DETAIL_ISSEU,
	GET_HK_DETAIL_COMMENT,
	GET_HK_DETAIL_COMMENT_SUBMIT,
	GET_HK_THUMBS_UP,
	GET_HK_THUMBS_UP_ISSEU,
	GET_HK_REPLY_TO_COMMENT,
} from './detail/action'

import {
	GET_IMG_CODE,
	GET_HIDE_MODAL,
	GET_NEXT_STEP_ONE,
	GET_NEXT_STEP_TWO,
	GET_NEXT_STEP_TRE,
} from './backPassword/action'

const initState = {
		user:JSON.parse(localStorage.getItem('user')),
		nextStep:'one',
		userName:'123',
		Bool:true,//我的信息判断显示
		loading:false,
		newsListArry:[],
		// stop:true,//没有信息停止刷新
  };


const checkReducer = (state = initState, action) => {

	const newState = update(state, {
		action: { $set: action.type }, // Required: for native event
	});
	switch (action.type) {
		case GET_HK_NEWS_START_LOADING:
			return update(newState, {
				loading:{ $set: action.loading }
			});
		// case STOP_GET_HK_NEWS:
		// 	return update(newState, {
		// 		stop: { $set: action.stop },
		// 	});
		case GET_IMG_CODE:
			return update(newState, {
				imgSrc: 	{ $set: action.imgSrc },
				visible: 	{ $set: action.visible },
				uuid:		{ $set: action.uuid },
				nextStep: 	{ $set: newState.nextStep },
			});
		case GET_HIDE_MODAL:
			return update(newState, {
				visible: { $set: action.visible },
			});
		case GET_NEXT_STEP_ONE:
			return update(newState, {
				nextStep: { $set: action.nextStep },
			});
		case GET_NEXT_STEP_TWO:
			return update(newState, {
				nextStep: 	{ $set: action.nextStep },
				email:		{ $set: action.email }
			});
		case GET_NEXT_STEP_TRE:
			return update(newState, {
				nextStep: { $set: action.nextStep },
			});
		case GET_USER_REGISTER:
			return update(newState, {
				show: { $set: action.show },
			});
		case GET_REGISTER_SUCCESS:
			return update(newState, {
				data: { $set: "action.data" },
			});
		case GET_EDIT_PASSWORD:
			return update(newState, {
				visible: { $set: action.visible},
			});
		case GET_EDIT_PASSWORD_HIDE:
			return update(newState, {
				visible: { $set: action.visible},
			});
		case SAVE_USER_CODE:
			return update(newState, {
				show : { $set: action.show},
				userAccount:{ $set: action.userAccount},
				userEmail:{ $set: action.userEmail},
				userNickname:{ $set: action.userNickname},
				userAddress:{ $set: action.userAddress},
				userSlogan:{ $set: action.userSlogan},
			});
		case GET_LOADING_INT:
			return update(newState, {
				comment : { $set: action.data},
				Bool : { $set: action.Bool},
			});
		case GET_LOADING_BOOL:
			return update(newState, {
				Bool : { $set: action.Bool},
			});
		case GET_HK_NEWS:
		// newState.newsListArry = [];
			if(action.firstBlood){
				newState.newsListArry = action.list.data
				// if(action.currentPage === 1){
				// 	newState.stop = true
				// }
			}else{
				// const arry1 = action.list.data.filter(item=>item.info_id === newState.newsListArry.info_id);
				const arry = action.list.data.filter(item=>item.info_id !== newState.newsListArry.info_id);
				
				// console.log(arry1);
				// console.log(arry2);


				// if(action.list.data.info_id === newState.newsListArry.info_id){
				// }else{
				// }

				arry.map((show)=>(
					newState.newsListArry.push(show)
				))
				debugger;
			}
			
			return update(newState, {
				infoListData : { $set: action.list.data},
				infoListPage : { $set: action.list.page},
				currentPage	 : { $set: action.currentPage},
				numPage		 : { $set: action.numPage },
				loading		 : { $set: action.loading },
				// newsListArry : { $set: action.list.data },
			});
		case GET_HOT_HK_NEWS:
			return update(newState, {
				infoListHotData 	: { $set: action.list.data},
				currentPageIsseu 	: { $set: action.currentPageIsseu},
				numPageIsseu	 	: { $set: action.numPageIsseu},
				loading		 		: { $set: action.loading },
			});
		case GET_HK_DETAIL_NEWS:
			return update(newState, {
				infoListHotDetail : { $set: action.data.data},
			});
		case GET_HK_DETAIL_ISSEU:
			return update(newState, {
				infoListHotIsseu : { $set: action.data.data},
			});
		case GET_HK_DETAIL_COMMENT://议题全部评论
			return update(newState, {
				infoListHotComment : { $set: action.data},
			});
		case GET_HK_DETAIL_COMMENT_SUBMIT://发表评论
			return update(newState, {
				locading : { $set: action.loading},
			});
		case GET_HK_THUMBS_UP://给资讯详情点赞
			return update(newState, {
				loading : { $set: action.loading},
			});
		case GET_HK_THUMBS_UP_ISSEU://给议题详情点赞
			return update(newState, {
				loading : { $set: action.loading},
			});
		case GET_HK_REPLY_TO_COMMENT://评论回复功能
			return update(newState, {
				loading : { $set: action.loading},
			});
		default:
			return state
	}
}
  
export default combineReducers({
	checkReducer
})