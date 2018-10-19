
import Axios from 'axios';
// import qs from 'qs';
import Tools from '../corn/tools';
import { openNotification } from '../errcode/index';

export const GET_HK_DETAIL_NEWS = 'GET_HK_DETAIL_NEWS';
export const GET_HK_DETAIL_ISSEU = 'GET_HK_DETAIL_ISSEU';
export const GET_HK_DETAIL_COMMENT = 'GET_HK_DETAIL_COMMENT';//议题全部评论
// export const GET_HK_DETAIL_COMMENT_SUBMIT = 'GET_HK_DETAIL_COMMENT_SUBMIT';//发表评论
// export const GET_HK_THUMBS_UP = 'GET_HK_THUMBS_UP';//点赞
// export const GET_HK_THUMBS_UP_ISSEU = 'GET_HK_THUMBS_UP_ISSEU';//议题点赞
// export const GET_HK_REPLY_TO_COMMENT = 'GET_HK_REPLY_TO_COMMENT';//回复评论
// export const ERR_CODE_DETAIL = 'ERR_CODE_DETAIL';

export const getHKDetail = (id,userId) => dispath => {
    Axios.get(`/api/Info/infoDetail?infoId=${id}&userId=${userId}`).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_DETAIL_NEWS,
                data:res.data,
            })
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_DETAIL,
            //     errcode:res.data.code
            // })
        }
    })
}

export const getHKDetailIssue = (id,userId) => dispath => {
    Axios.get(`/api/Issue/issueDetail?issueId=${id}&userId=${userId}`).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_DETAIL_ISSEU,
                data:res.data,
            })
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_DETAIL,
            //     errcode:res.data.code
            // })
        }
    })
}
//获取所有评论  type：1是资讯 2是议题
export const getHKDetailComment = (id,type) => dispath => {
    Axios.get('/api/Info/showComment',{
        params: {
            topicId: id,
            topicType:type,
        }
    }).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_DETAIL_COMMENT,
                data:res.data.data,
                clearTxt:false
            })
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_DETAIL,
            //     errcode:res.data.code
            // })
        }
    })
}

//发表评论
export const subCommentContent = (userId,content) => dispath => {
    if(content===''){
        alert("请填写内容");
        return false;
    }
    const id = Tools.getFromUrlParam('id') || '';
    const key = Tools.getFromUrlParam('key') || '';
    Axios.post('/api/Info/addComment',{
        topicId     : id,
        topicType   : key,
        fromUid     : userId,
        content     : content,
    }).then(function(res){
        if(res.data.code === 1){
            dispath(getHKDetailComment(id,key));
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_DETAIL,
            //     errcode:res.data.code
            // })
        }
    })
}

export const thumbsUp = (userId,loading) => dispath => {
    const id = Number(Tools.getFromUrlParam('id') || '');
    Axios.post('/api/Info/likeToInformation',{
        typeId  : id,
        fromUid : userId,
    }).then(function(res){
        if(res.data.code === 1){

            dispath(getHKDetail(id,userId))
        }else{
            openNotification(res.data.code)
        }
    })
}
export const thumbsUpIsseu = (userId,loading) => dispath => {
    const id = Number(Tools.getFromUrlParam('id') || '');
    Axios.post('/api/Info/likeToIssue',{
        typeId  : id,
        fromUid   : userId,
    }).then(function(res){
        if(res.data.code === 1){
            dispath(getHKDetailIssue(id,userId))
        }else{
            openNotification(res.data.code)
        }
    })
}


export const replyToComment = (commentId,toUid,fromUid,content) => dispath => {
    const id = Tools.getFromUrlParam('id') || '';
    const key = Tools.getFromUrlParam('key') || '';
    Axios.post('/api/Info/replyToComment',{
        commentId       : commentId,
        toUid           : toUid,
        replyId         : commentId,
        fromUid         : fromUid,
        content         : content,
        replyType       : 0
    }).then(function(res){
        if(res.data.code === 1){
            dispath(getHKDetailComment(id,key));
            // dispath({
            //     type:GET_HK_REPLY_TO_COMMENT,
            //     loading:true,
            // })
        }else{
            openNotification(res.data.code)
            // dispath({
            //     type:ERR_CODE_DETAIL,
            //     errcode:res.data.code
            // })
        }
    })
}