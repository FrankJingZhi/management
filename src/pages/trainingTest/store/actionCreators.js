/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-16 10:47:01
 * @lastTime: 2019-04-22 17:44:26
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

/**
 * @Author: Frank
 * @lastTime: 2019-04-23 17:15:18
 * @LastAuthor: Do not edit
 * @description: 获取标签信息
 * @since: 2019-04-22 18:19:43
 */
export const getTips = () => {
	return (dispatch) => {
		axios
			.get('/api/training/tags.json')
			.then((res) => {
				const data = res.data.data;
				dispatch(getTipsAction(data));
			})
			.catch(() => {
				console.log('tags通讯失败...');
			});
	};
};

const getTipsAction = (data) => ({
	type: containts.GET_TIPS,
	data: fromJS(data)
});

export const handleTipClick = (index) => {
	return (dispatch) => {
        dispatch(changeTip(index))
    };
};

const changeTip = (data) =>({
    type: containts.CHANGE_TIP,
    data: fromJS(data)
})

export const changeDif = (data) =>({
    type: containts.CHANGE_DIFFICULT,
	data: fromJS(data)
})