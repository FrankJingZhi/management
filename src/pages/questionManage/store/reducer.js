/**
 * @LastEditors: Frank
 * @Date: 2019-04-28 18:29:11
 * @param {*} 图书馆管理员的笔记本--
 */
import React from 'react';
import { Divider } from 'antd';
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
		},
		{
			title: '操作',
			dataIndex: 'operation',
			render: () => (
				<span>
					<a href="javascript:;">查看组员</a>
					<Divider type="vertical" />
					<a href="javascript:;">绑定试卷</a>
					<Divider type="vertical" />
					<a href="javascript:;">删除</a>
				</span>
			)
		}
	],
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-28 18:29:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
