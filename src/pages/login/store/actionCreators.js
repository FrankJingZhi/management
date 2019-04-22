/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-04-16 17:56:33
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

export const changeTextValue = (type,value) => {
    if(type === 'userName'){
        return{
            type:containts.CHANGE_USER_NAME,
            data:fromJS(value)
        }
    }else if(type === 'password'){
        return{
            type:containts.CHANGE_USER_PWD,
            data:fromJS(value)
        } 
    }
}

/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 登录api
 * @since: 2019-04-16 10:47:01
 */
export const loginClick = (userName, password) => {
	return (dispatch) => {
        axios.get('/api/login/login.json')
		// axios({
		// 	method: 'post',
		// 	url: '/api/login/login.json',
		// 	data: {
        // 		userName,
        //      password
		// 	}
		// })
			.then((res) => {
                let userInfo = {};
                const data = res.data;
				if (data.status) {
					userInfo = {
						name: userName,
						status: 1,
						permission: data.data.permission
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
