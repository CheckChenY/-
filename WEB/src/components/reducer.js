import { combineReducers } from 'redux';

import update from 'react-addons-update';


import {
	GET_LANGUAGE,
} from './header/action'

import {
	GET_LANGUAGE_INIT,
} from '../action'

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
	GET_HK_BACK_LIST,
	GET_HK_MARKET_LIST,
	GET_HK_MARKET_LIST_DETAIL,
	GET_HK_STOCK_CODE_LIST,
	GET_HK_STOCK_CODE_PROFITS,
	GET_HK_GET_YEAR,
	GET_HK_GET_VALUATION_LIST,
	GET_HK_GET_GROW_LIST,
	GET_HK_SLCAPITAL_LIST,
} from './hkmarket/action'

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
		dataListDetail:true,//股票列表详情不显示
		Language:'zh-CN'
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
		case GET_LANGUAGE:
			newState.Language = action.Language;
			return update(newState, {
				Language: { $set: newState.Language },
			});
		case GET_LANGUAGE_INIT:
			return update(newState, {
				loading: { $set: action.loading },
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
		case GET_HK_MARKET_LIST://港股列表
			return update(newState, {
				hkmarketstocklist : 	{ $set: action.data},
				hkmarketstocklistPageSize : { $set: action.page.pageSize},
				hkmarketstocklistTotal: { $set: action.page.total},
			});
		case GET_HK_MARKET_LIST_DETAIL://港股列表详情
			return update(newState, {
				dataListDetail 	: 	{ $set: action.detail },
				stockCodeList 		:	{ $set: action.data }
			});
		case GET_HK_STOCK_CODE_LIST://港股基本资料
			return update(newState, {
				dataBasicDetail 	: 	{ $set: action.data },
			});
		case GET_HK_STOCK_CODE_PROFITS://港股利润表
			return update(newState, {
				dataProfitDetail 	: 	{ $set: action.data },
			});
		case GET_HK_GET_YEAR://港股分析获取年份
			return update(newState, {
				getYearList 	: 	{ $set: action.data },
			});
		case GET_HK_GET_VALUATION_LIST://港股分析获取数据
			return update(newState, {
				getValuationList 	: 	{ $set: action.data[0] },
			});
		case GET_HK_GET_GROW_LIST://成长能力获取数据
			return update(newState, {
				getGrowList 	: 	{ $set: action.data },
			});
		case GET_HK_SLCAPITAL_LIST://股本结构获取数据
			return update(newState, {
				getSlcapitalList 	: 	{ $set: action.data },
			});
		case GET_HK_BACK_LIST://返回股票行情列表
			return update(newState, {
				dataListDetail 	: 	{ $set: action.dataListDetail },
			});
		default:
			return state
	}
}
  
export default combineReducers({
	checkReducer
})