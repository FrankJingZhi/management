/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-05-22 15:32:25
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

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
		})
			.then((res) => {
				console.log('login:', res);
				let userInfo = {};
				const data = res.data;
				if (data.status) {
					window.sessionStorage.setItem('userName',values.name)
					window.sessionStorage.setItem('userPermission',data.data)
					userInfo = {
						name: values.name,
						status: 1,
						permission: data.data,
						msg: data.msg
					};
				} else {
					userInfo = {
						name: '',
						status: 0,
						permission: '',
						msg: data.msg
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
