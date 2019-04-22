/*
 * @Author: Frank
 * @LastEditors: Do not edit
 * @description: 图书馆管理员的笔记本--
 * @since: 2019-04-18 17:36:48
 * @lastTime: 2019-04-19 10:20:10
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
		{id:'headerItem1',name:'训练'},
		{id:'headerItem2',name:'测试'},
		{id:'headerItem3',name:'管理'}
	],
	// 头部个人中心
	dropDownMenu:[
		{id:'dropDownMenu1',name:'个人中心',url:''},
		{id:'dropDownMenu2',name:'退出',url:''},
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
