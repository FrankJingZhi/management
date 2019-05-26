import React, { PureComponent } from 'react';
import { Form, Input, Radio, Button, notification,Cascader } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

const RadioGroup = Radio.Group;

class ExamForm extends PureComponent {
	state = {
		value: 1
	};

	handleSubmit = (e) => {
		const { closeAddHandleClick,handleExamForm,getTableInfo,RouterPath,openNotificationWithIcon } = this.props;
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('表单输入的值: ', values);
				handleExamForm(values, RouterPath, (data) => {
					if (data.status === 'success') {
						openNotificationWithIcon('success');
						closeAddHandleClick();
						getTableInfo(RouterPath);
					} else {
						openNotificationWithIcon('error');
					}
				});
			}
		});
	};

	openNotificationWithIcon = (type) => {
		if (type === 'error') {
			notification[type]({
				message: '报错提示',
				description: '抱歉，数据丢失，请重试...'
			});
		} else {
			notification[type]({
				message: '成功提示',
				description: '操作成功！'
			});
		}
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				md: { span: 6 }
			},
			wrapperCol: {
				md: { span: 15 }
			}
		};

		const tailItemLayout = {
			wrapperCol: {
				md: {
					span: 3,
					offset: 11
				}
			}
		};

		const tip = [
			{
				value: 'PHP',
				label: 'PHP'
			},
			{
				value: 'Javascript',
				label: 'Javascript'
			},
			{
				value: 'HTML',
				label: 'HTML'
			},
			{
				value: 'JAVA',
				label: 'JAVA'
			},
			{
				value: 'Andriod',
				label: 'Andriod'
			},
			{
				value: 'Phython',
				label: 'Phython'
			}
		];

		const type = [
			{
				value: 'test',
				label: '测试'
			},
			{
				value: 'training',
				label: '训练'
			},
		]

		const difficult = [
			{
				value: '简单',
				label: '简单'
			},
			{
				value: '普通',
				label: '普通'
			},
			{
				value: '困难',
				label: '困难'
			},
		]

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="难度">
					{getFieldDecorator('difficult', {
						rules: [ { type: 'array', required: true, message: '请输入试卷难度！' } ]
					})(<Cascader options={difficult} />)}
				</Form.Item>
				<Form.Item label="类型">
					{getFieldDecorator('type', {
						rules: [ { type: 'array', required: true, message: '请输入试卷类型！' } ]
					})(<Cascader options={type} />)}
				</Form.Item>
				<Form.Item label="标签">
					{getFieldDecorator('tip', {
						rules: [ { type: 'array', required: true, message: '请输入试卷标签！' } ]
					})(<Cascader options={tip} />)}
				</Form.Item>
				<Form.Item label="试卷名">
					{getFieldDecorator('examName', {
						rules: [ { required: true, message: '请输入试卷名！', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item {...tailItemLayout}>
					<Button type="primary" htmlType="submit">
						确定
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
const WrappedExamForm = Form.create({ name: 'registerExam' })(ExamForm);

const mapDispatchToProps = (dispatch) => ({
	handleExamForm(values, RouterPath, callback) {
		dispatch(actionCreators.handleExamForm(values, RouterPath, callback));
	},
	getTableInfo(data, name) {
		dispatch(actionCreators.getTableInfo(data, name));
	}
});

export default connect(null,mapDispatchToProps)(WrappedExamForm);
