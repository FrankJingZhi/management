/**
 * @LastEditors: Frank
 * @Date: 2019-04-25 18:58:02
 * @param {*} 图书馆管理员的笔记本--
 */
import { fromJS } from 'immutable';
import * as containts from './containts';

/**
 * @LastEditors: Frank
 * @Date: 2019-04-25 18:58:02
 * @param {} 将默认数据转化为immutable对象
 */
const defaultState = fromJS({
	question: [], //题目
	answer: 1 //用户选择的答案
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-25 18:58:02
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		case containts.GET_QUESTION:
			return state.set('question', action.data);
		case containts.CHANGE_OPTIONS:
			return state.set('answer', action.data);
		default:
			return state;
	}
};
