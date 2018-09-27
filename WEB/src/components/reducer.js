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
	GET_HK_NEWS
} from './shareDetails/action'

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
  };


const checkReducer = (state = initState, action) => {

	const newState = update(state, {
		action: { $set: action.type }, // Required: for native event
	});
	switch (action.type) {
		// case GET_UPDATA_LOCATION_USER:
		// 	// return action.loadingTxt
		// 	return update(newState, {
		// 		user:{ $set: action.user }
		// 	});
		// case HOME_PLUS_TEXT:
		// 	return update(newState, {
		// 		homePlusTxt: { $set: action.homePlusTxt },
		// 		num: { $set: newState.num + 1},
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
			return update(newState, {
				infoList : { $set: action.data},
			});
		default:
			return state
	}
}
  
export default combineReducers({
	checkReducer
})