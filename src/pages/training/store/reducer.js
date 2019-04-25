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
	tips:[],
	difCurrentIndex:0,
	tipCurrentIndex:0,
	type:['类型','难度'],
	difficult:[
		{id:'dif_0',name:'全部'},
		{id:'dif_1',name:'简单'},
		{id:'dif_2',name:'普通'},
		{id:'dif_3',name:'困难'},
	],
	trainingExam:[
		{id:'tr_img_1',name:'第一次测试'},
		{id:'tr_img_2',name:'第二次测试'},
		{id:'tr_img_3',name:'第三次测试'},
		{id:'tr_img_4',name:'第四次测试'},
		{id:'tr_img_5',name:'第五次测试'},
		{id:'tr_img_6',name:'第六次测试'},
	]
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
			return state.set('tips', action.data);
		// 监听并修改当前选中的标签
		case containts.CHANGE_TIP:
			return state.set('tipCurrentIndex', action.data);
		// 监听并修改当前选中的难度
		case containts.CHANGE_DIFFICULT:
			return state.set('difCurrentIndex', action.data);
		default:
			return state;
	}
};
