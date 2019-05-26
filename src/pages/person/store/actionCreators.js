/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-05-26 23:47:05
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

export const changeInputEdit = (DisableInput) => ({
	type: containts.CHANGE_INPUT_EDIT,
	data: fromJS(!DisableInput)
});

export const showModal = (VisibleModal) => ({
	type: containts.SHOW_MODAL,
	data: fromJS(!VisibleModal)
});

export const handleConfirmBlur = (ConfirmDirty) => ({
	type:containts.HANDLE_CONFIRM_BLUR,
	data: fromJS(ConfirmDirty)
})

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 个人信息表提交
 * @since: 2019-05-26 23:29:15
 */
export const handlePersonForm = (data,callback)=>{
	return()=>{
		axios({
			url:'/textNet-SSM/user/update',
			method:'post',
			data
		}).then((res)=>{
			const data = res.data;
			callback(data);
		})
	}
}

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 根据用户名查找用户信息
 * @since: 2019-05-26 23:46:40
 */
export const getUserInfo = (data) =>{
	return(dispatch)=>{
		axios({
			url:'/textNet-SSM/user/findByName',
			method:'post',
			data:{
				name:data
			}
		}).then((res)=>{
			const data = res.data;
			dispatch(getUserInfoAction(data))
		})
	}
}

const getUserInfoAction = (data) =>({
	type:containts.GET_USER_INFO,
	data: fromJS(data)
})