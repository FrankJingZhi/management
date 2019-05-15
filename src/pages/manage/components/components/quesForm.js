import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, InputNumber, Select } from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

class QuesForm extends PureComponent {
	state = {
		confirmDirty: false
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	};

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};
	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				md: { span: 3 }
			},
			wrapperCol: {
				md: { span: 18 }
			}
		};
		const tailFormItemLayout = {
			wrapperCol: {
				md: {
					span: 3
				}
			}
		};

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="类型">
					<InputGroup compact>
						<Select defaultValue="radio">
							<Option value="radio">单选</Option>
							<Option value="judge">判断</Option>
						</Select>
					</InputGroup>
				</Form.Item>
				<Form.Item label="标签">
					<InputGroup compact>
						<Select defaultValue="radio">
							<Option value="radio">单选</Option>
							<Option value="judge">判断</Option>
						</Select>
					</InputGroup>
				</Form.Item>
				<Form.Item label="分数">
					{getFieldDecorator('score', {
						rules: [ { required: true, whitespace: true } ]
					})(<InputNumber />)}
				</Form.Item>

				<Form.Item label="题目">
					{getFieldDecorator('question', {
						rules: [ { required: true, message: 'Please input your question!' } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="选项A">
					{getFieldDecorator('selection_A', {
						rules: [ { required: true, message: 'Please input your selection_A!' } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="选项B">
					{getFieldDecorator('selection_B', {
						rules: [ { required: true, message: 'Please input your selection_B!' } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="选项C">
					{getFieldDecorator('selection_C', {
						rules: [ { required: true, message: 'Please input your selection_C!' } ]
					})(<Input htmlFor="类型" />)}
				</Form.Item>
				<Form.Item label="选项D">
					{getFieldDecorator('selection_D', {
						rules: [ { required: true, message: 'Please input your selection_D!' } ]
					})(<Input />)}
				</Form.Item>

				<Form.Item {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">
						确定
					</Button>
					<Button type="primary">
						取消
					</Button>
				</Form.Item>
			</Form>
		);
	}
}
const QuesFormWrapper = Form.create({ name: 'register' })(QuesForm);

export default withRouter(QuesFormWrapper);
