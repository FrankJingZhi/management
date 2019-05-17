/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 15:45:00
 * @param {*} 图书馆管理员的笔记本--
 */
import { fromJS } from 'immutable';
import * as containts from './containts';

/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 16:04:11
 * @param {} 将默认数据转化为immutable对象
 */
const defaultState = fromJS({
	//	登录页导航栏标签
	headerList: [
		{ id: 1, name: '优科技官网', url: '#' },
		{ id: 2, name: '技术博客', url: '#' },
		{ id: 3, name: '关于我们', url: '' }
	],
	//	登录用户信息
	userInfo: {
		name: '',	//用户名
		status: 0,	//登陆状态
		permission: '',	//用户权限
	}
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 16:01:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		// 监听并修改用户信息
		case containts.CHANGE_USER_INFO:
			return state.set('userInfo', action.data);
		// 监听并修改用户名
		case containts.CHANGE_USER_NAME:
			return state.setIn(['userInfo','name'], action.data);
		// 监听并修改密码
		case containts.CHANGE_USER_PWD:
			return state.setIn(['userInfo','password'], action.data);
		default:
			return state;
	}
};
