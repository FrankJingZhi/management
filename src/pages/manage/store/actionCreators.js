/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-28 18:29:11
 * @lastTime: 2019-04-28 18:30:07
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable';

/**
 * @Author: Frank
 * @lastTime: 2019-05-09 13:01:23
 * @LastAuthor: Do not edit
 * @description: 获取表格数据api
 * @since: 2019-04-30 13:59:26
 */
export const getTableInfo = (RouterPath,userGroup) => {
	return (dispatch) => {
		if (RouterPath.includes('userManage') && !RouterPath.includes('selfManage')) {
			axios.get('/api/manage/groupInfo.json').then((res) => {
				const data = res.data.data;
				dispatch(getTableInfoAction(data));
			});
		} else if (RouterPath.includes('examManage')) {
			axios.get('/api/manage/examInfo.json').then((res) => {
				const data = res.data.data;
				dispatch(getTableInfoAction(data));
			});
		} else if (RouterPath.includes('questionManage')) {
			axios.get('/api/manage/questionInfo.json').then((res) => {
				const data = res.data.data;
				dispatch(getTableInfoAction(data));
			});
		}	else if (RouterPath.includes('selfManage')) {
			axios.get('/api/manage/userInfo.json').then((res) => {
				const data = res.data.data;
				dispatch(getTableInfoAction(data));
			});
		}
	};
};
const getTableInfoAction = (data) => ({
	type: containts.GET_TABLE_INFO,
	data: fromJS(data)
});

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 修改选中行数据
 * @since: 2019-04-30 18:20:19
 */
export const changeSelectedRowKeys = (data) => ({
	type: containts.CHANGE_SELECTED_ROW_KEYS,
	data: fromJS(data)
});
export const changeSelectedRows = (data) => ({
	type: containts.CHANGE_SELECTED_ROWS,
	data: fromJS(data)
});

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 获取用户、试卷、题目表头
 * @since: 2019-05-06 16:23:40
 */
export const getColumnsInfo = (data) => {
	let columns = [];
	if (data.includes('userManage') && !data.includes('selfManage')) {
		columns = [
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
		];
	} else if (data.includes('examManage')) {
		columns = [
			{
				title: '试卷名',
				dataIndex: 'examName'
			},
			{
				title: '类型',
				dataIndex: 'type'
			},
			{
				title: '难度',
				dataIndex: 'difficult'
			},
			{
				title: '题目数',
				dataIndex: 'questionNumbers'
			},
			{
				title: '修改时间',
				dataIndex: 'modifyTime'
			}
		];
	} else if (data.includes('questionManage')) {
		columns = [
			{
				title: '题目',
				dataIndex: 'question'
			},
			{
				title: '类型',
				dataIndex: 'type'
			},
			{
				title: '标签',
				dataIndex: 'tip'
			},
			{
				title: '修改时间',
				dataIndex: 'modifyTime'
			}
		];
	} else if(data.includes('selfManage')){
		columns = [
			{
				title: '用户名',
				dataIndex: 'userName'
			},
			{
				title: '班级',
				dataIndex: 'class'
			},
			{
				title: '修改时间',
				dataIndex: 'modifyTime'
			}
		];
	}
	return {
		type: containts.GET_COLUMNS_INFO,
		data: fromJS(columns)
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 用来判断是否弹出添加组员的对话框的flag
 * @since: 2019-05-08 10:29:54
 */
export const showAddHandleClick = () => ({
	type: containts.SHOW_ADD_HANDLE_CLICK,
	data: fromJS(true)
});
export const closeAddHandleClick = () => ({
	type: containts.CLOSE_ADD_HANDLE_CLICK,
	data: fromJS(false)
});

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 判断当前是在哪个页面下，以此来改变添加按钮的名字
 * @since: 2019-05-08 12:43:19
 */
export const changeAddBtnName = (RouterPath) => {
	let data = '';
	if (RouterPath.includes('userManage') && !RouterPath.includes('selfManage')) {
		data = '添加用户组';
	} else if (RouterPath.includes('selfManage')) {
		data = '添加用户';
	} else if (RouterPath.includes('examManage')) {
		data = '添加试卷';
	} else if (RouterPath.includes('questionManage')) {
		data = '添加题目';
	}
	return {
		type: containts.CHANGE_ADD_BTN_NAME,
		data: fromJS(data)
	};
};
