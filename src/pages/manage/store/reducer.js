/**
 * @LastEditors: Frank
 * @Date: 2019-04-28 18:29:11
 * @param {*} 图书馆管理员的笔记本--
 */
import { fromJS } from 'immutable';
import * as containts from './containts';

/**
 * @LastEditors: Frank
 * @Date: 2019-04-28 18:29:11
 * @param {} 将默认数据转化为immutable对象
 */
const defaultState = fromJS({
	// table表格
	columns: [],
	dataSource: [], //表格数据
	selectedRowKeys: [], //被选中行
	selectedRows: [], //被选中行
	showUserAddModal: false, //判断是否弹出添加组员的对话框
	addBtnName: '' //添加按钮的名字
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-28 18:29:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		//返回表格数据
		case containts.GET_TABLE_INFO:
			return state.set('dataSource', action.data);
		//返回表格数据
		case containts.GET_COLUMNS_INFO:
			return state.set('columns', action.data);
		//被选中行key值
		case containts.CHANGE_SELECTED_ROW_KEYS:
			return state.set('selectedRowKeys', action.data);
		//被选中行数据
		case containts.CHANGE_SELECTED_ROWS:
			return state.set('selectedRows', action.data);
		//展示userModal
		case containts.SHOW_ADD_HANDLE_CLICK:
			return state.set('showUserAddModal', action.data);
		//隐藏userModal
		case containts.CLOSE_ADD_HANDLE_CLICK:
			return state.set('showUserAddModal', action.data);
		//改变添加按钮名字
		case containts.CHANGE_ADD_BTN_NAME:
			return state.set('addBtnName', action.data);
		default:
			return state;
	}
};
