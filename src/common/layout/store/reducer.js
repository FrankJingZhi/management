/*
 * @Author: Frank
 * @LastEditors: Do not edit
 * @description: 图书馆管理员的笔记本--
 * @since: 2019-04-18 17:36:48
 * @lastTime: 2019-04-29 12:02:58
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
	headerItem:[
		{id:'header_1',name:'训练'},
		{id:'header_2',name:'测试'},
		{id:'header_3',name:'管理'}
	],
	// 头部个人中心
	dropDownMenu:[
		{id:'dropDown_1',name:'个人中心',url:''},
		{id:'dropDown_2',name:'退出',url:''},
	],
	siderMenu:[
		{id:'sider_1',name:'用户管理'},
		{id:'sider_2',name:'试卷管理'},
		{id:'sider_3',name:'题目管理'},
	]
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-18 17:36:48
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		
		default:
			return state;
	}
};
