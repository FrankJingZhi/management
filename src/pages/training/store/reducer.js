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
	tips:[]
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 16:01:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		// 监听并修改用户信息
		case containts.GET_TIPS:
			return state.set('tips', action.data);
		default:
			return state;
	}
};
