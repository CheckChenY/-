import { combineReducers } from 'redux';

import update from 'react-addons-update';


import {
	LOAD_POSTS,
	HOME_PLUS_TEXT,
} from './action'

import {
	GET_USER_REGISTER,
	GET_REGISTER_SUCCESS,
} from './login/action'

import {
	GET_EDIT_PASSWORD,
	GET_EDIT_PASSWORD_HIDE,
} from './editpassword/action'

import {
	GET_IMG_CODE,
	GET_HIDE_MODAL,
	GET_NEXT_STEP_ONE,
	GET_NEXT_STEP_TWO,
	GET_NEXT_STEP_TRE,
} from './backPassword/action'

const initState = {
		num: 0,
		user:localStorage.getItem('user'),
		nextStep:'one',
		userName:'123'
  };


const checkReducer = (state = initState, action) => {

	const newState = update(state, {
		action: { $set: action.type }, // Required: for native event
	});
	switch (action.type) {
		case LOAD_POSTS:
			// return action.loadingTxt
			return update(newState, {
				loadingTxt: { $set: action.loadingTxt },
				user:{ $set: action.loadingTxt }
			});
		case HOME_PLUS_TEXT:
			return update(newState, {
				homePlusTxt: { $set: action.homePlusTxt },
				num: { $set: newState.num + 1},
			});
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
		default:
			return state
	}
}
  
export default combineReducers({
	checkReducer
})