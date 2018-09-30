
import Axios from 'axios';
import Tools from '../corn/tools';
export const GET_HK_DETAIL_NEWS = 'GET_HK_DETAIL_NEWS';
export const GET_HK_DETAIL_ISSEU = 'GET_HK_DETAIL_ISSEU';
export const GET_HK_DETAIL_COMMENT = 'GET_HK_DETAIL_COMMENT';//议题全部评论
export const GET_HK_DETAIL_COMMENT_SUBMIT = 'GET_HK_DETAIL_COMMENT_SUBMIT';//发表评论
export const GET_HK_THUMBS_UP = 'GET_HK_THUMBS_UP';//点赞
export const GET_HK_THUMBS_UP_ISSEU = 'GET_HK_THUMBS_UP_ISSEU';//议题点赞
export const GET_HK_REPLY_TO_COMMENT = 'GET_HK_REPLY_TO_COMMENT';//回复评论

export const getHKDetail = (id) => dispath => {

    // alert(id)
    // const detail = 'detail';
    // pop.history.push(`/HKDetail?keyValue=${detail}&id=${id}`)

    Axios.get(`/api/Info/infoDetail?infoId=${id}`).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_DETAIL_NEWS,
                data:res.data,
                
            })
        }
    })
}

export const getHKDetailIssue = (id) => dispath => {
    Axios.get(`/api/Issue/issueDetail?issueId=${id}`).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_DETAIL_ISSEU,
                data:res.data,
            })
        }
    })
}

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
            })
        }
    })
}


export const subCommentContent = (userId,content) => dispath => {
    const id = Tools.getFromUrlParam('id') || '';
    const key = Tools.getFromUrlParam('key') || '';
    Axios.post('/api/Info/addComment',{
        topicId  : id,
        topicType: key ,
        fromUid   : userId,
        content :content,
    }).then(function(res){
        if(res.data.code === 1){
            alert('发表成功')
            dispath({
                type:GET_HK_DETAIL_COMMENT_SUBMIT,
                loading:true
            })
        }
    })
}

export const thumbsUp = (userId,loading) => dispath => {
    const id = Tools.getFromUrlParam('id') || '';
    Axios.post('/api/Info/likeToInformation',{
        topicId  : id,
        fromUid   : userId,
    }).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_THUMBS_UP,
                loading:!loading,
            })
        }
    })
}
export const thumbsUpIsseu = (userId,loading) => dispath => {
    const id = Tools.getFromUrlParam('id') || '';
    Axios.post('/api/Info/likeToIssue',{
        topicId  : id,
        fromUid   : userId,
    }).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_THUMBS_UP_ISSEU,
                loading:!loading,
            })
        }
    })
}


export const replyToComment = (commentId,toUid,fromUid,content) => dispath => {
    // const id = Tools.getFromUrlParam('id') || '';
    Axios.post('/api/Info/replyToComment',{
        commentId       : commentId,
        toUid           : toUid,
        replyId         : commentId,
        fromUid         : fromUid,
        content         : content,
        replyType       : 0
    }).then(function(res){
        if(res.data.code === 1){
            dispath({
                type:GET_HK_REPLY_TO_COMMENT,
                loading:true,
            })
        }
    })
}