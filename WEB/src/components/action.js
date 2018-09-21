import Axios from 'axios';

export const LOAD_POSTS = 'LOAD_POSTS'
export const HOME_PLUS_TEXT = 'HOME_PLUS_TEXT'

export const LOGIN_USER_INTER = 'LOGIN_USER_INTER'



export const loading = ()=> dispath => {
	Axios.get('https://jsonplaceholder.typicode.com/posts').then(
		res => {
			dispath({
				type:LOAD_POSTS,
				loadingTxt:res.data,
			})
		}
	)
}


export const homePlus = ()=> dispath => {
	dispath({
		type:HOME_PLUS_TEXT,
		homePlusTxt:"我是第二个reduce人",
		num:1,
	})
}


