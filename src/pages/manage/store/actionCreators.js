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
 * @lastTime: 2019-05-26 17:48:02
 * @LastAuthor: Do not edit
 * @description: 获取表格数据api
 * @since: 2019-04-30 13:59:26
 */
export const getTableInfo = (RouterPath, userid) => {
	return (dispatch) => {
		if (
			RouterPath.includes('userManage') &&
			!RouterPath.includes('selfManage') &&
			!RouterPath.includes('examBindInfo') &&
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
		} else if (
			(RouterPath.includes('examManage') && !RouterPath.includes('editExam')) ||
			RouterPath.includes('examBind')
		) {
			//examManage 试卷信息
			axios({
				url: '/textNet-SSM/test/findAll',
				method: 'post',
				data: {
					start: 1,
					size: 10
				}
			}).then((res) => {
				const test = res.data.Test;
				const training = res.data.Training;
				let examAll = [];
				test.map((item) => {
					return examAll.push({
						key: examAll.length + 1,
						id: item.id,
						tip: 'test',
						examName: item.name,
						type: item.type,
						difficult: item.difficullty,
						questionNumbers: `选择:${item.choicequestionid &&
							item.choicequestionid.split(',').length};判断:${item.tofquestionid &&
							item.tofquestionid.split(',').length}`,
						totalScore: 100,
						modifyTime: '2019-5-6 16:42:00'
					});
				});
				training.map((item) => {
					return examAll.push({
						key: examAll.length + 1,
						id: item.id,
						tip: 'training',
						examName: item.name,
						type: item.type,
						difficult: item.difficullty,
						questionNumbers: `选择:${item.choicequestionid &&
							item.choicequestionid.split(',').length};判断:${item.tofquestionid &&
							item.tofquestionid.split(',').length}`,
						totalScore: 100,
						modifyTime: '2019-5-6 16:42:00'
					});
				});
				dispatch(getTableInfoAction(examAll));
			});
		} else if (RouterPath.includes('questionManage')) {
			const getChoice = () => {
				return axios({
					url: '/textNet-SSM/choicequestion/query',
					method: 'post',
					data: {
						start: 1,
						size: 10,
						type: '全部'
					}
				});
			};
			const getTof = () => {
				return axios({
					url: '/textNet-SSM/tofquestion/query',
					method: 'post',
					data: {
						start: 1,
						size: 10,
						type: '全部'
					}
				});
			};
			axios.all([ getChoice(), getTof() ]).then(
				axios.spread(function(choice, tof) {
					const new_choice = choice.data;
					const new_tof = tof.data;
					let quesAll = [];
					// console.log('new_choice:',new_choice,new_tof)
					new_choice &&
						new_choice.map((item) => {
							return quesAll.push({
								key: quesAll.length + 1,
								id: item.id,
								question: item.name,
								tip: item.type,
								type: '选择',
								modifyTime: '2019-5-20 15:20'
							});
						});
					new_tof &&
						new_tof.map((item) => {
							return quesAll.push({
								key: quesAll.length + 1,
								id: item.id,
								question: item.name,
								tip: item.type,
								type: '判断',
								modifyTime: '2019-5-20 15:20'
							});
						});
					dispatch(getTableInfoAction(quesAll));
				})
			);
		} else if (RouterPath.includes('selfManage')) {
			//selfManage 组管理员
			axios({
				url: '/textNet-SSM/user/findCByGroup',
				method: 'post',
				data: {
					name: window.sessionStorage.getItem('userid'),
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
		} else if (RouterPath.includes('examBindInfo')) {
			const getTest = () => {
				return axios({
					url: '/textNet-SSM/testRecord/findTest',
					method: 'post',
					data: {
						userid: window.sessionStorage.getItem('userid'),
						start: 1,
						size: 5,
						type: '全部',
						difficullty: '全部'
					}
				});
			};
			const getTraining = () => {
				return axios({
					url: '/textNet-SSM/trainingRecord/findTraining',
					method: 'post',
					data: {
						userid: window.sessionStorage.getItem('userid'),
						start: 1,
						size: 5,
						type: '全部',
						difficullty: '全部'
					}
				});
			};
			axios.all([ getTraining(), getTest() ]).then(
				axios.spread(function(training, test) {
					const new_test = test.data;
					const new_training = training.data;
					let examAll = [];
					new_test &&
						new_test.map((item) => {
							return examAll.push({
								key: examAll.length + 1,
								id: item.id,
								examName: item.name,
								type: item.type,
								difficult: item.difficullty,
								questionNumbers: `选择:${item.choicequestionid.split(',')
									.length};判断:${item.tofquestionid.split(',').length}`,
								totalScore: 100,
								testTime: '2019-5-6 16:42:00~2019-5-10 16:42:00'
							});
						});
					new_training &&
						new_training.map((item) => {
							return examAll.push({
								key: examAll.length + 1,
								id: item.id,
								examName: item.name,
								type: item.type,
								difficult: item.difficullty,
								questionNumbers: `选择:${item.choicequestionid.split(',')
									.length};判断:${item.tofquestionid.split(',').length}`,
								totalScore: 100,
								testTime: ''
							});
						});
					dispatch(getTableInfoAction(examAll));
				})
			);
		} else if (RouterPath.includes('editExam')) {
			const tip = window.sessionStorage.getItem('tip');
			let url = '';
			if (tip === 'training') {
				url = `/textNet-SSM/training/findTrainingByID`;
			} else {
				url = `/textNet-SSM/test/findTestByID`;
			}
			axios({
				url,
				method: 'post',
				data: {
					id: window.sessionStorage.getItem('examid'),
					start: 1,
					size: 10
				}
			}).then((res) => {
				const data = res.data;
				let new_data = [];
				data &&
					data.map((item) => {
						let type = '';
						if (item.istrue === 'true' || item.istrue === 'false') {
							type = '判断';
						} else {
							type = '选择';
						}
						return new_data.push({
							key: new_data.length + 1,
							id: item.id,
							question: item.name,
							tip: item.type,
							type: type,
							modifyTime: '2019-5-10 16:42:00'
						});
					});
				dispatch(getTableInfoAction(new_data));
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
	if (
		data.includes('userManage') &&
		!data.includes('selfManage') &&
		!data.includes('examBindInfo') &&
		!data.includes('examBind')
	) {
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
	} else if ((data.includes('examManage') && !data.includes('editExam')) || data.includes('examBind')) {
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
	} else if (data.includes('examBindInfo')) {
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
	} else if (data.includes('editExam')) {
		columns = [
			{
				title: '题目',
				dataIndex: 'question'
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
	if (
		RouterPath.includes('userManage') &&
		!RouterPath.includes('selfManage') &&
		!RouterPath.includes('examBindInfo') &&
		!RouterPath.includes('examBind')
	) {
		data = '添加用户组';
	} else if (RouterPath.includes('selfManage')) {
		data = '添加用户';
	} else if (RouterPath.includes('examManage') && !RouterPath.includes('editExam')) {
		data = '添加试卷';
	} else if (RouterPath.includes('questionManage') && !RouterPath.includes('quesBind')) {
		data = '添加题目';
	} else if (RouterPath.includes('examBindInfo')) {
		data = '添加试卷';
	} else if (RouterPath.includes('examBind')) {
		data = '添加试卷';
	} else if (RouterPath.includes('editExam')) {
		data = '添加题目';
	} else if (RouterPath.includes('quesBind')) {
		data = '添加题目';
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
export const handleUserForm = (data, RouterPath, callback) => {
	let new_data = {
		name: data.name,
		password: data.password,
		usergroup: data.groupname,
		phone: data.phone
	};
	if (RouterPath.includes('userManage') && !RouterPath.includes('selfManage')) {
		new_data = Object.assign(new_data, { permission: 'b' });
	} else {
		new_data = Object.assign(new_data, { permission: 'c' });
	}
	return (dispatch) => {
		axios({
			url: '/textNet-SSM/user/add',
			method: 'post',
			data: new_data
		}).then((res) => {
			const data = res.data;
			callback(data);
		});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: examForm提交--新增试卷
 * @since: 2019-05-26 13:13:37
 */
export const handleExamForm = (data, RouterPath, callback) => {
	return () => {
		axios({
			url: `/textNet-SSM/${data.type[0]}/add`,
			method: 'post',
			data: {
				name: data.examName,
				type: data.tip[0],
				difficullty: data.difficult[0]
				// choicequestionid:,
				// tofquestionid:,
			}
		}).then((res) => {
			const data = res.data;
			callback(data);
		});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 删除用户组及名下所有用户
 * @since: 2019-05-25 14:21:24
 */
export const deleteClick = (usergroup, callback) => {
	return (dispatch) => {
		axios({
			url: '/textNet-SSM/user/removeByGroup',
			method: 'post',
			data: {
				group: usergroup
			}
		}).then((res) => {
			const data = res.data;
			callback(data);
		});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 删除普通用户，可批量删除
 * @since: 2019-05-25 17:26:35
 */
export const deleteSelfClick = (ids, callback) => {
	return (dispatch) => {
		axios({
			url: '/textNet-SSM/user/removeByID',
			method: 'post',
			data: ids
		}).then((res) => {
			const data = res.data;
			callback(data);
		});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 删除试卷记录，可批量删除
 * @since: 2019-05-25 19:03:46
 */
export const deleteExam = (data, callback) => {
	// console.log('deleteExam:',data);
	let trainingids = [];
	let testids = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i].testTime) {
			testids.push(data[i].id);
		} else {
			trainingids.push(data[i].id);
		}
	}
	// console.log('trainingids:',trainingids,testids)
	return () => {
		for (let i = 0; i < testids.length; i++) {
			axios({
				url: '/textNet-SSM/testRecord/remove',
				method: 'post',
				data: {
					userid: window.sessionStorage.getItem('userid'),
					ids: testids
				}
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
		}
		for (let i = 0; i < trainingids.length; i++) {
			axios({
				url: '/textNet-SSM/trainingRecord/remove',
				method: 'post',
				data: {
					userid: window.sessionStorage.getItem('userid'),
					ids: trainingids
				}
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
		}
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 给用户添加试卷
 * @since: 2019-05-26 11:56:17
 */
export const addExamToUser = (data, callback) => {
	return () => {
		for (let i = 0; i < data.length; i++) {
			console.log('data:', data, `/textNet-SSM/${data[i].tip}Record/add`);
			axios({
				url: `/textNet-SSM/${data[i].tip}Record/add`,
				method: 'post',
				data: {
					userid: window.sessionStorage.getItem('userid'),
					testid: data[i].id
				}
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
		}
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 批量删除某试卷下的题目
 * @since: 2019-05-26 16:43:33
 */
export const deleteQues = (data, callback) => {
	return () => {
		const tip = window.sessionStorage.getItem('tip');
		let choice = [];
		let tof = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].type === '选择') {
				choice.push(data[i].id);
			} else {
				tof.push(data[i].id);
			}
		}
		axios({
			url: `/textNet-SSM/${tip}/removeQuestion`,
			method: 'post',
			data: {
				id: 1,
				choicequestionid: choice.join(','),
				tofquestionid: tof.join(',')
			}
		}).then((res) => {
			const data = res.data;
			callback(data);
		});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 批量删除试卷
 * @since: 2019-05-26 16:45:20
 */
export const deleteExam1 = (data, callback) => {
	return () => {
		let trainingids = [];
		let testids = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i].tip === 'training') {
				trainingids.push(+data[i].id);
			} else {
				testids.push(+data[i].id);
			}
		}
		// console.log('reainingids:', trainingids, testids);
		trainingids != false &&
			axios({
				url: '/textNet-SSM/training/remove',
				method: 'post',
				data: trainingids
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
		testids != false &&
			axios({
				url: '/textNet-SSM/test/remove',
				method: 'post',
				data: testids
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 批量向试卷中绑定题目
 * @since: 2019-05-26 17:31:16
 */
export const quesBind = (data, callback) => {
	const tip = window.sessionStorage.getItem('tip');
	const examid = window.sessionStorage.getItem('examid');
	let choiceids = [];
	let tofids = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === '选择') {
			choiceids.push(+data[i].id);
		} else {
			tofids.push(+data[i].id);
		}
	}
	return () => {
		axios({
			url: `/textNet-SSM/${tip}/addQuestion`,
			method: 'post',
			data: {
				id: examid,
				choicequestionid: choiceids.join(','),
				tofquestionid: tofids.join(',')
			}
		}).then((res) => {
			const data = res.data;
			callback(data);
		});
	};
};

/**
 * @Author: Frank
 * @LastEditTime: Do not edit
 * @LastEditors: Do not edit
 * @description: 批量删除题目
 * @since: 2019-05-26 17:45:52
 */
export const deleteQues1 = (data, callback) => {
	let choiceids = [];
	let tofids = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === '选择') {
			choiceids.push(+data[i].id);
		} else {
			tofids.push(+data[i].id);
		}
	}
	return () => {
		choiceids != false &&
			axios({
				url: `/textNet-SSM/choicequestion/remove`,
				method: 'post',
				data: choiceids
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
		tofids != false &&
			axios({
				url: `/textNet-SSM/tofquestion/remove`,
				method: 'post',
				data: tofids
			}).then((res) => {
				const data = res.data;
				callback(data);
			});
	};
};
