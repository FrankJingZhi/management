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
 * @lastTime: 2019-05-22 18:37:36
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
export const getList = (currentPage,tip,difficullt) => {
	// console.log('getList:',currentPage,10*(currentPage-1)+1,currentPage*10,tip,difficullt)
	return(dispatch)=>{
		axios({
			url:'/textNet-SSM/testRecord/findTest',
			method:'post',
			data:{
				userid:window.sessionStorage.getItem('userName'),
				start:10*(currentPage-1)+1,
				size:currentPage*10,
				type:tip,
				difficullty:difficullt
			}
		}).then((res)=>{
			// console.log('list:',res)
			const data = res.data;
			dispatch(getListAction(data))
		})
	}
}

export const getListAction = (data) =>({
	type:containts.GET_LIST_ACTION,
	data: fromJS(data)
})

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 分页器跳页
 * @since: 2019-05-20 16:29:47
 */
export const linkToPage = (page) => ({
	type:containts.LINK_TO_PAGE,
	data: fromJS(page)
})

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 获取列表总数
 * @since: 2019-05-21 15:02:47
 */
export const getTotalPage = () => {
	return (dispatch)=>{
		axios({
			method:'post',
			url:'/textNet-SSM/test/getCount',
		}).then((res)=>{
			const data = res.data;
			dispatch(getTotalPageAction(data))
		})
	}
}

const getTotalPageAction = (data) =>({
	type: containts.GET_TOTAL_PAGE,
	data: fromJS(data)
}) 