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
	trainingExam:[
		{id:'tr_img_1',name:'第一次训练'},
		{id:'tr_img_2',name:'第二次训练'},
		{id:'tr_img_3',name:'第三次训练'},
		{id:'tr_img_4',name:'第四次训练'},
		{id:'tr_img_5',name:'第五次训练'},
		{id:'tr_img_6',name:'第六次训练'},
	]
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 16:01:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
