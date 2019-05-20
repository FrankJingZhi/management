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
	tips: [ '全部' ],
	difCurrentIndex: 0,
	tipCurrentIndex: 0,
	type: [ '类型', '难度' ],
	difficult: [ '全部', '简单', '普通', '困难' ],
	testExam: [],
	currentPage:1
});

/**
 * @LastEditors: Frank
 * @Date: 2019-04-11 16:01:11
 * @param {*} 
 */
export default (state = defaultState, action) => {
	switch (action.type) {
		// 监听并获取标签名
		case containts.GET_TIPS:
			const tips = action.data.unshift('全部');
			return state.set('tips', tips);
		// 监听并修改当前选中的标签
		case containts.CHANGE_TIP:
			return state.set('tipCurrentIndex', action.data);
		// 监听并修改当前选中的难度
		case containts.CHANGE_DIFFICULT:
			return state.set('difCurrentIndex', action.data);
		// 修改列表数据
		case containts.GET_LIST_ACTION:
			return state.set('testExam', action.data);
		// 分页器页码
		case containts.LINK_TO_PAGE:
			return state.set('currentPage', action.data);
		default:
			return state;
	}
};
