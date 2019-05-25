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
 * @lastTime: 2019-05-24 19:53:01
 * @LastAuthor: Do not edit
 * @description: 获取表格数据api
 * @since: 2019-04-30 13:59:26
 */
export const getTableInfo = (RouterPath, name) => {
	return (dispatch) => {
		if (
			RouterPath.includes('userManage') &&
			!RouterPath.includes('selfManage') &&
			!RouterPath.includes('examBind')
		) {
			//userManage 超级管理员
			axios({
				url: '/textNet-SSM/user/findBFromUser',
				method: 'post',
				data: {
					name: window.sessionStorage.getItem('userName'),
					start: 1,
					size: 5
				}
			}).then((res) => {
				let data = res.data;
				data.map((item, index) => {
					return (item.key = index + 1);
				});
				// console.log('userManage:',data);
				dispatch(getTableInfoAction(data));
			});
		} else if (RouterPath.includes('examManage')) {
			//examManage 试卷信息
			axios.get('/api/manage/examInfo.json').then((res) => {
				const data = res.data.data;
				dispatch(getTableInfoAction(data));
			});
		} else if (RouterPath.includes('questionManage')) {
			//questionManage 题目
			axios.get('/api/manage/questionInfo.json').then((res) => {
				const data = res.data.data;
				dispatch(getTableInfoAction(data));
			});
		} else if (RouterPath.includes('selfManage')) {
			//selfManage 组管理员
			axios({
				url: '/textNet-SSM/user/findCByGroup',
				method: 'post',
				data: {
					name,
					start: 1,
					size: 5
				}
			}).then((res) => {
				// console.log('res:', res);
				let data = res.data;
				data.map((item, index) => {
					let new_item = Object.assign(item, { key: index + 1, binding: '训练:2;测试3' });
					return (item = new_item);
				});
				dispatch(getTableInfoAction(data));
			});
		} else if (RouterPath.includes('examBind')) {
			//examBind 绑定试卷
			axios.get('/api/manage/examBindInfo.json').then((res) => {
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
	if (data.includes('userManage') && !data.includes('selfManage') && !data.includes('examBind')) {
		columns = [
			{
				title: '用户组',
				dataIndex: 'usergroup'
			},
			{
				title: '组管理员',
				dataIndex: 'name'
			},
			{
				title: '联系方式',
				dataIndex: 'phone'
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
	} else if (data.includes('selfManage')) {
		columns = [
			{
				title: '用户名',
				dataIndex: 'name'
			},
			{
				title: '班级',
				dataIndex: 'usergroup'
			},
			{
				title: '联系方式',
				dataIndex: 'phone'
			},
			{
				title: '绑定情况',
				dataIndex: 'binding'
			}
		];
	} else if (data.includes('examBind')) {
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
				title: '总分',
				dataIndex: 'totalScore'
			},
			{
				title: '测试时间',
				dataIndex: 'testTime'
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
	if (RouterPath.includes('userManage') && !RouterPath.includes('selfManage') && !RouterPath.includes('examBind')) {
		data = '添加用户组';
	} else if (RouterPath.includes('selfManage')) {
		data = '添加用户';
	} else if (RouterPath.includes('examManage')) {
		data = '添加试卷';
	} else if (RouterPath.includes('questionManage')) {
		data = '添加题目';
	} else if (RouterPath.includes('examBind')) {
		data = '绑定试卷';
	}
	return {
		type: containts.CHANGE_ADD_BTN_NAME,
		data: fromJS(data)
	};
};

export const clearSelectedRowsAndKeys = () => ({
	type: containts.CLEAR_ROWS_KEYS,
	data: fromJS([])
});

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: userForm表单提交
 * @since: 2019-05-24 15:40:45
 */
export const handleUserForm = (data,RouterPath,callback) => {
	let new_data = {
		name: data.name,
		password: data.password,
		usergroup: data.usergroup,
		phone: data.phone
	};
	if (RouterPath.includes('userManage') && !RouterPath.includes('selfManage')) {
		new_data = Object.assign(new_data,{permission:'b'});
	} else {
		new_data = Object.assign(new_data,{permission:'c'});
	}
	return (dispatch) => {
		axios({
			url: '/textNet-SSM/user/add',
			method: 'post',
			data: new_data
		}).then((res) => {
			const data = res.data;
			callback(data)
			// dispatch(handleUserFormAction(data));
		});
	};
};

const handleUserFormAction = (data)=>({
	type: containts.HANDLE_USER_FORM,
	data:fromJS(data)
})

export const deleteClick = (usergroup) => {
	return (dispatch) => {
		axios({
			url:'/textNet-SSM/user/removeByGroup',
			method:'post',
			data:{
				group:usergroup
			}
		}).then((res)=>{
			const data = res.data;
			dispatch(deleteClickAction(data))
		})
	}
}

const deleteClickAction = (data) => ({
	type:containts.DELETE_CLICK,
	data: fromJS(data)
})