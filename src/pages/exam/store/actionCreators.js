/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 需要派发的action
 * @since: 2019-04-25 18:58:02
 * @lastTime: 2019-04-25 18:59:10
 */
import axios from 'axios';
import * as containts from './containts';
import { fromJS } from 'immutable'; //

/**
 * @Author: Frank
 * @lastTime: 2019-05-22 17:58:04
 * @LastAuthor: Do not edit
 * @description: 获取题目
 * @since: 2019-04-28 10:21:34
 */
export const getQuestion = (exam_id,type) => {
	return (dispatch) => {
        let url = '';
        if(type === 'test'){
            url = '/textNet-SSM/test/findTestByID'
        }else{
            url = '/textNet-SSM/training/findTrainingByID'
        }
		axios({
			url,
			method: 'post',
			data: {
				id: exam_id
			}
		}).then((res) => {
			const data = res.data;
			// console.log('question:',data)
            let new_data = [];
            let correct_answer = [];
			for (let i = 0; i < data.length; i++) {
                if (Object.keys(data[i]).length === 8) {
                    correct_answer.push(data[i].istrue)
					new_data.push({
						id: data[i].id,
						title: data[i].name,
						type: data[i].type,
						options: [
                            {option:'A',content:data[i].a},
                            {option:'B',content:data[i].b},
                            {option:'C',content:data[i].c},
                            {option:'D',content:data[i].d},
                        ]
					});
				} else {
                    if(data[i].istrue === 'true'){
                        correct_answer.push('A')
                    }else{
                        correct_answer.push('B')
                    }
					new_data.push({
						id: data[i].id,
						title: data[i].name,
						type: data[i].type,
						options: [
                            {option:'A',content:'true'},
                            {option:'B',content:'false'},
                        ]
					});
				}
			}
            // console.log('new_data:', new_data,correct_answer);
            dispatch(getQuestionAction(new_data));
            dispatch(getCorrectAnswer(correct_answer));
		});
	};
};

const getQuestionAction = (data) => ({
	type: containts.GET_QUESTION,
	data: fromJS(data)
});

const getCorrectAnswer = (data) =>({
    type: containts.GET_CORRECT_ANSWER,
    data: fromJS(data)
})

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 保存用户所选答案
 * @since: 2019-05-22 10:48:32
 */
export const changeOptions = (data) => ({
	type: containts.CHANGE_OPTIONS,
	data: fromJS(data)
});

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 向后台传用户所得分数
 * @since: 2019-05-22 10:50:50
 */
export const getScore = (score,exam_id,type) =>{
    return(dispatch)=>{
        axios({
            url:`/textNet-SSM/${type}Record/update`,
            method:'post',
            data:{
                userid:window.sessionStorage.getItem('userName'),
                testid:exam_id,
                score
            }
        }).then((res)=>{
            const data = res.data;
            if(data.code){
                dispatch(getScoreAction(data.code))
            }
        })
    }
}

const getScoreAction = (data) =>({
    type:containts.GET_SCORE,
    data: fromJS(data)
})