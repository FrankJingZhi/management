/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-05-17 17:58:34
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

export const changeTextValue = (type, value) => {
	if (type === 'userName') {
		return {
			type: containts.CHANGE_USER_NAME,
			data: fromJS(value)
		};
	} else if (type === 'password') {
		return {
			type: containts.CHANGE_USER_PWD,
			data: fromJS(value)
		};
	}
};

/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 登录api
 * @since: 2019-04-16 10:47:01
 */
export const loginClick = (values) => {
	// console.log('loginClick:',JSON.stringify(values))
	return (dispatch) => {
		axios({
			method: 'post',
			url: '/textNet-SSM/user/check',
			data: values,
			// contentType : 'application/json;charset=utf-8',
			// dataType:'json'
		})
			.then((res) => {
				console.log('login:', res);
				let userInfo = {};
				const data = res.data;
				if (data.status) {
					userInfo = {
						name: values.name,
						status: 1,
						permission: data.data
					};
				} else {
					userInfo = {
						name: '',
						status: 0,
						permission: ''
					};
				}
				dispatch(changeUserInfo(userInfo));
			})
			.catch(() => {
				console.log('服务器繁忙，请稍后...');
			});
	};
};

export const changeUserInfo = (data) => ({
	type: containts.CHANGE_USER_INFO,
	data: fromJS(data)
});
