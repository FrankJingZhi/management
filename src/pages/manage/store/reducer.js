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
	dataSource:[],	//表格数据
	selectedRowKeys: [],	//被选中行
	selectedRows: [],	//被选中行
	addFlag:false,	//判断是否弹出添加组员的对话框
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-28 18:29:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		case containts.GET_TABLE_INFO:
			return state.set('dataSource',action.data); //返回表格数据
		case containts.GET_COLUMNS_INFO:
			return state.set('columns',action.data); //返回表格数据
		case containts.CHANGE_SELECTED_ROW_KEYS:
			return state.set('selectedRowKeys',action.data); 
		case containts.CHANGE_SELECTED_ROWS:
			return state.set('selectedRows',action.data); 
		case containts.ADD_HANDLE_CLICK:
			return state.set('addFlag',action.data); 
		default:
			return state;
	}
};
