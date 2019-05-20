/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-04-22 17:44:26
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

/**
 * @Author: Frank
 * @lastTime: 2019-05-20 15:54:30
 * @LastAuthor: Do not edit
 * @description: 获取标签信息
 * @since: 2019-04-22 18:19:43
 */
export const getTips = () => {
	return (dispatch) => {
		axios({
			url:'/textNet-SSM/test/findType',
			method:'post'
		})
			.then((res) => {
				const data = res.data;
				dispatch(getTipsAction(data));
			})
			.catch(() => {
				console.log('tags通讯失败...');
			});
	};
};

const getTipsAction = (data) => ({
	type: containts.GET_TIPS,
	data: fromJS(data)
});

export const handleTipClick = (index) => {
	return (dispatch) => {
        dispatch(changeTip(index))
    };
};

const changeTip = (data) =>({
    type: containts.CHANGE_TIP,
    data: fromJS(data)
})

export const changeDif = (data) =>({
    type: containts.CHANGE_DIFFICULT,
	data: fromJS(data)
})

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 获取训练列表的数据
 * @since: 2019-05-18 17:29:56
 */
export const getList = (tip,difficullt) => {
	console.log('getList:',tip,difficullt)
	return(dispatch)=>{
		axios({
			url:'/textNet-SSM/training/findTrainingByTypeAndDifficullty',
			method:'post',
			data:{
				start:1,
				size:3,
				type:tip,
				difficullty:difficullt
			}
		}).then((res)=>{
			console.log('list:',res)
			const data = res.data;
			dispatch(getListAction(data))
		})
	}
}

export const getListAction = (data) =>({
	type:containts.GET_LIST_ACTION,
	data: fromJS(data)
})