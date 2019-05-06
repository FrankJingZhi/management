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
	columns: [
		{
			title: '用户组',
			dataIndex: 'userGroup'
		},
		{
			title: '组管理员',
			dataIndex: 'groupManager'
		},
		{
			title: '组员',
			dataIndex: 'groupMember'
		},
		{
			title: '绑定情况',
			dataIndex: 'bingding'
		}
	],
	dataSource:[],	//表格数据
	selectedRowKeys: [],	//被选中行
	selectedRows: [],	//被选中行
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
		case containts.CHANGE_SELECTED_ROW_KEYS:
			return state.set('selectedRowKeys',action.data); 
		case containts.CHANGE_SELECTED_ROWS:
			return state.set('selectedRows',action.data); 
		default:
			return state;
	}
};
