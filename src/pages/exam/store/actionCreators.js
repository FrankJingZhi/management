/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-25 18:58:02
 * @lastTime: 2019-04-25 18:59:10
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

/**
 * @Author: Frank
 * @lastTime: 2019-04-28 17:27:48
 * @LastAuthor: Do not edit
 * @description: 获取题目
 * @since: 2019-04-28 10:21:34
 */
export const getQuestion = ()=>{
    return (dispatch) => {
        axios.get('/api/exam/problem.json')
        .then((res)=>{
            const data = res.data.data;
            dispatch(getQuestionAction(data));
        })
    }
}

const getQuestionAction = (data)=>({
    type: containts.GET_QUESTION,
    data: fromJS(data)
})

// export const changeOptions = (data)=>({
//     type: containts.CHANGE_OPTIONS,
//     data: fromJS(data)
// })