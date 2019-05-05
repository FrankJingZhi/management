/*
 * @Author: Frank
 * @LastEditors: Do not edit
 * @description: 图书馆管理员的笔记本--
 * @since: 2019-04-18 17:36:48
 * @lastTime: 2019-05-05 13:07:28
 */
import { fromJS } from 'immutable';
import * as containts from './containts';

/**
 * @LastAuthor: Do not edit
 * @Date: 2019-04-18 17:36:48
 * @param {} 将默认数据转化为immutable对象
 */
const defaultState = fromJS({
	// 头部标签
	headerItem: [
		{ id: 'header_1', name: '训练', url: '/layout/training' },
		{ id: 'header_2', name: '测试', url: '/layout/test' },
		{ id: 'header_3', name: '管理', url: '/layout/manage' }
	],
	// 头部个人中心
	dropDownMenu: [ { id: 'dropDown_1', name: '个人中心', url: '' }, { id: 'dropDown_2', name: '退出', url: '' } ],
	siderMenu: [
		{ id: 'sider_1', url: '/userManage', name: '用户管理' },
		{ id: 'sider_2', url: '/examManage', name: '试卷管理' },
		{ id: 'sider_3', url: '/questionManage', name: '题目管理' }
	],
	// 路由地址
	routerPath:''
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-18 17:36:48
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		case containts.CHECK_ROUTER:
			return state.set('routerPath',action.data);
		default:
			return state;
	}
};
