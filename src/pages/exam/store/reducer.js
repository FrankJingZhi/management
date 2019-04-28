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
	
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-25 18:58:02
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		
		default:
			return state;
	}
};
