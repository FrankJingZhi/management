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
	confirmDirty: false, //验证两次输入密码是否一致
	disableInput: true,
	visibleModal: false,
	userInfo:{},
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 16:01:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		case containts.CHANGE_INPUT_EDIT:
			return state.set('disableInput', action.data);
		case containts.SHOW_MODAL:
			return state.set('visibleModal', action.data);
		case containts.HANDLE_CONFIRM_BLUR:
			return state.set('confirmDirty', action.data);
		case containts.GET_USER_INFO:
			return state.set('userInfo', action.data);
		default:
			return state;
	}
};
