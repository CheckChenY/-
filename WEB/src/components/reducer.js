import { combineReducers } from 'redux';

import update from 'react-addons-update';
import createHistory from 'history/createBrowserHistory';



import {
	LOGIN_INDEX,
} from './action'


import {
	GET_LANGUAGE,
} from './header/action'

import {
	GET_LANGUAGE_INIT,
} from '../action'

import {
	GET_USER_REGISTER,
	GET_REGISTER_SUCCESS,
	GET_BACK_TAB,
	GET_USER_PREV_STEP,
} from './login/action'

import {
	GET_EDIT_PASSWORD,
	GET_EDIT_PASSWORD_HIDE,
} from './editpassword/action'

import {
	SAVE_USER_CODE,
	GET_LOADING_INT,
	GET_MESSAGE_LIST,
	GET_LOADING_BOOL,
} from './personal/action'

import {
	GET_INDEX_LIST,
	GET_HOT_WORD,
} from './home/action'

import {
	GET_HK_NEWS,
	GET_HK_FIRST_NEWS,
	GET_HK_NEWS_NONE,
	GET_HK_NEWS_NEW_ADD_LIST,
	GET_HK_HOT_NEW_ADD_LIST,
	GET_HOT_HK_NEWS,
	GET_HOT_HK_FIRST_NEWS,
	GET_HK_NEWS_START_LOADING,
	GET_HK_HOT_NEWS_NONE,
	SET_TITLE_INDEX_NEWS,
} from './stockNews/action'

import {
	GET_HK_DETAIL_NEWS,
	GET_HK_DETAIL_ISSEU,
	GET_HK_DETAIL_COMMENT,
	// GET_HK_DETAIL_COMMENT_SUBMIT,
	// GET_HK_THUMBS_UP,
	// GET_HK_THUMBS_UP_ISSEU,
	// GET_HK_REPLY_TO_COMMENT,
} from './detail/action'

import {
	GET_HK_BACK_LIST,
	GET_HK_MARKET_LIST,
	GET_HK_MARKET_LIST_SELF,
	GET_HK_MARKET_LIST_DETAIL,
	GET_HK_STOCK_CODE_LIST,
	GET_HK_STOCK_CODE_PROFITS,
	GET_HK_GET_YEAR,
	GET_HK_GET_VALUATION_LIST,
	GET_HK_GET_GROW_LIST,
	GET_HK_SLCAPITAL_LIST,
	GET_HK_SELF_CODE_VIEW,
	GET_HK_STOCK_LIST,
	GET_HK_STOCK_IMG_LIST,
} from './hkmarket/action'

import {
	GET_IMG_CODE,
	GET_HIDE_MODAL,
	GET_NEXT_STEP_ONE,
	GET_NEXT_STEP_TWO,
	GET_NEXT_STEP_TRE,
} from './backPassword/action'

const history = createHistory();
const initState = {
		// user:JSON.parse(localStorage.getItem('user')),
		userAccount:localStorage.getItem('userAccount'),
		userAddress:localStorage.getItem('userAddress'),
		userEmail:localStorage.getItem('userEmail'),
		userId:localStorage.getItem('userId'),
		userNickname:localStorage.getItem('userNickname'),
		userSlogan:localStorage.getItem('userSlogan'),
		nextStep:'one',
		userName:'123',
		none:true,
		Bool:true,//我的信息判断显示
		loading:false,
		newsListArry:[],
		newsHotListArry:[],//议题列表
		setCodeArry:[],//添加自选股
		dataListDetail:true,//股票列表详情不显示
		Language:'zh-CN',
		history:history
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
		case LOGIN_INDEX:
			return update(newState, {
				loading:{ $set: action.loading },
				userAccount:{ $set:localStorage.getItem('userAccount') },
				userAddress:{ $set:localStorage.getItem('userAddress') },
				userEmail:{ $set:localStorage.getItem('userEmail') },
				userId:{ $set:localStorage.getItem('userId') },
				userNickname:{ $set:localStorage.getItem('userNickname') },
				userSlogan:{ $set:localStorage.getItem('userSlogan') },
			});
		case GET_LANGUAGE:
			// newState.Language = action.Language;
			return update(newState, {
				// Language: { $set: newState.Language },
			});
		case GET_INDEX_LIST://获取首页数据
			let IndexOne = [],IndexTwo = [],IndexTre = [];

			for(var i=0;i<action.data.length;i++){
				if(action.data[i].style === 0){
					IndexOne.push(action.data[i])
				}else if(action.data[i].style === 1){
					IndexTwo.push(action.data[i])
				}else if(action.data[i].style === 2){
					IndexTre.push(action.data[i])
				}
			}

			return update(newState, {
				IndexOne: { $set: IndexOne },
				IndexTwo: { $set: IndexTwo },
				IndexTre: { $set: IndexTre },
			});
		case GET_HOT_WORD:
			return update(newState, {
				hotWordList: { $set: action.data },
			});
		case GET_LANGUAGE_INIT:
			newState.Language = action.Language;
			return update(newState, {
				loading: { $set: action.loading },
				Language:{ $set: action.Language },
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
		case GET_BACK_TAB:
			return update(newState, {
				tabNub:{ $set: action.tabNub }
			});
		case GET_USER_PREV_STEP:
			return update(newState, {
				show:{ $set: action.show },
				loginTabKey:{ $set: action.loginTabKey },
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
			newState.userAccount = action.userAccount
			localStorage.setItem('userAccount',action.userAccount)
			newState.userEmail = action.userEmail
			localStorage.setItem('userEmail',action.userEmail)
			newState.userNickname = action.userNickname
			localStorage.setItem('userNickname',action.userNickname)
			newState.userAddress = action.userAddress
			localStorage.setItem('userAddress',action.userAddress)
			newState.userSlogan = action.userSlogan
			localStorage.setItem('userSlogan',action.userSlogan)
			return update(newState, {
				show : { $set: action.show},
				userAccount:{ $set: newState.userAccount},
				userEmail:{ $set: newState.userEmail},
				userNickname:{ $set: newState.userNickname},
				userAddress:{ $set: newState.userAddress},
				userSlogan:{ $set: newState.userSlogan},
				tabBol	:	{ $set: action.tabBol},
			});
		case GET_LOADING_INT:
			return update(newState, {
				comment : { $set: action.data},
				Bool : { $set: action.Bool},
			});
		case GET_MESSAGE_LIST:
			return update(newState, {
				myMessageList : { $set: action.data},
			});
		case GET_LOADING_BOOL:
			return update(newState, {
				tabBol : { $set: action.tabBol},
			});
		case GET_HK_NEWS_NONE://查询列表为空
			return update(newState, {
				none : { $set: action.none},
				infoListPage : { $set: action.list.page},
			});
		case SET_TITLE_INDEX_NEWS://查询议题列表为空
			return update(newState, {
				dataListDetail : { $set: action.dataListDetail},
				title : { $set: action.title},
			});
		case GET_HK_HOT_NEWS_NONE://查询议题列表为空
			return update(newState, {
				issuerNone 			: { $set: action.issuerNone},
				numPageIsseuTotal 	: { $set: action.numPageIsseuTotal},
				loading		 		: { $set: action.loading },
				isseuLoading		: { $set: action.isseuLoading },
			});
		case GET_HK_FIRST_NEWS://首次加载港股资讯列表
			newState.newsListArry = [];

			action.list.data.map((show)=>(
				newState.newsListArry.push(show)
			))
			return update(newState, {
				infoListData : { $set: action.list.data},
				infoListPage : { $set: action.list.page},
				currentPage	 : { $set: action.currentPage},
				numPage		 : { $set: action.numPage },
				loading		 : { $set: action.loading },
				none		 : { $set: action.none },
			});
		case GET_HK_NEWS://非首次添加港股资讯列表
			if(action.list.data.length === 0){
				newState.newsHotListArry = []
			}else{
				action.list.data.map((show)=>(
					newState.newsListArry.push(show)
				))
			}
			return update(newState, {
				infoListData : { $set: newState.newsListArry },
				infoListPage : { $set: action.list.page},
				currentPage	 : { $set: action.currentPage},
				numPage		 : { $set: action.numPage },
				loading		 : { $set: action.loading },
				none		 : { $set: action.none },
			});
		case GET_HK_NEWS_NEW_ADD_LIST:
			newState.newsListArry = [];
			// newState.newsHotListArry = [];
			return update(newState, {
				newsListArry 	: { $set: newState.newsListArry},
			});
		case GET_HK_HOT_NEW_ADD_LIST:
			newState.newsHotListArry = [];
			return update(newState, {
				infoListHotData 	: { $set: newState.newsHotListArry},
			});
		case GET_HOT_HK_FIRST_NEWS://首次加载港股议题列表
			newState.newsHotListArry = [];

			action.list.data.map((show)=>(
				newState.newsHotListArry.push(show)
			))
			return update(newState, {
				infoListHotData 	: { $set: action.list.data },
				currentPageIsseu 	: { $set: action.currentPageIsseu},
				numPageIsseu	 	: { $set: action.numPageIsseu},
				numPageIsseuTotal	: { $set: action.numPageIsseuTotal},
				loading		 		: { $set: action.loading },
				isseuLoading		: { $set: action.isseuLoading },
				issuesNone		 	: { $set: action.issuesNone },
				day		 			: { $set: action.day },
			});
		case GET_HOT_HK_NEWS://非首次加载港股议题列表
			if(action.list.data.length === 0){
				newState.newsHotListArry = []
			}else{
				action.list.data.map((show)=>(
					newState.newsHotListArry.push(show)
				))
			}
			return update(newState, {
				infoListHotData 	: { $set: newState.newsHotListArry},
				currentPageIsseu 	: { $set: action.currentPageIsseu},
				numPageIsseu	 	: { $set: action.numPageIsseu},
				numPageIsseuTotal	: { $set: action.numPageIsseuTotal},
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
				infoListHotComment 	: 	{ $set: action.data },
				clearTxt			: 	{ $set: action.clearTxt }
			});
		// case GET_HK_DETAIL_COMMENT_SUBMIT://发表评论
		// 	return update(newState, {
		// 		locading : { $set: action.loading},
		// 	});
		// case GET_HK_THUMBS_UP://给资讯详情点赞
		// 	return update(newState, {
		// 		loading : { $set: action.loading},
		// 	});
		// case GET_HK_THUMBS_UP_ISSEU://给议题详情点赞
		// 	return update(newState, {
		// 		loading : { $set: action.loading},
		// 	});
		// case GET_HK_REPLY_TO_COMMENT://评论回复功能
		// 	return update(newState, {
		// 		loading : { $set: action.loading},
		// 	});
		case GET_HK_MARKET_LIST://港股列表
			return update(newState, {
				hkmarketstocklist : 	{ $set: action.data},
				hkmarketstocklistPageSize : { $set: action.page.pageSize},
				hkmarketstocklistTotal: { $set: action.page.total},
				current:{ $set: action.current},
				loading:{ $set: action.loading},
			});
		case GET_HK_MARKET_LIST_SELF://我的自选股列表
			return update(newState, {
				hkmarketstocklistSelf : 	{ $set: action.data},
				hkmarketstocklistPageSizeSelf : { $set: action.page.pageSize},
				hkmarketstocklistTotalSelf: { $set: action.page.total},
				loading:{ $set: action.loading }
			});
		// case GET_HK_SET_SELF_CODE://添加我的自选股

		// 	newState.setCodeArry.push(action.code);
			
		// 	return update(newState, {
		// 		loading : 	{ $set: action.data},
		// 		code	:	{ $set:newState.setCodeArry },
		// 	});
		case GET_HK_MARKET_LIST_DETAIL://港股列表详情
			return update(newState, {
				dataListDetail 	: 	{ $set: action.detail },
				stockCodeList 		:	{ $set: action.data }
			});
		case GET_HK_STOCK_LIST://股票总揽
			return update(newState, {
				getStockList 		:	{ $set: action.data }
			});
		case GET_HK_SELF_CODE_VIEW://股票总揽添加我的自选
			return update(newState, {
				code 		:	{ $set: action.code }
			});
		case GET_HK_STOCK_IMG_LIST://股票总揽k县图片
			return update(newState, {
				getStockImg		:	{ $set: action.data }
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
				tabKey:{ $set: action.key },
			});
		default:
			return state
	}
}

export default combineReducers({
	checkReducer
})