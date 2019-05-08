import React,{PureComponent} from 'react';
import { Form, Input,InputNumber , Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

class RegistrationForm extends PureComponent {
	state = {
		confirmDirty: false,
		autoCompleteResult: []
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

	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('Two passwords that you enter is inconsistent!');
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields([ 'confirm' ], { force: true });
		}
		callback();
	};


	render() {
		const { getFieldDecorator } = this.props.form;
		const { autoCompleteResult } = this.state;

		const formItemLayout = {
			labelCol: {
				md: { span: 6 }
			},
			wrapperCol: {
				md: { span: 15 }
			}
		};

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="用户组名">
					{getFieldDecorator('groupname', {
						rules: [ { required: true, message: 'Please input your nickname!', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="人数上限">
					{getFieldDecorator('uppermembers', {
						rules: [ { required: true, message: 'Please input your nickname!', whitespace: true } ]
					})(<InputNumber min={1} max={10} style={{ width: '100%' }}/>)}
				</Form.Item>
                <Form.Item label="组管理员名">
					{getFieldDecorator('nickname', {
						rules: [ { required: true, message: 'Please input your nickname!', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="密码">
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: 'Please input your password!'
							},
							{
								validator: this.validateToNextPassword
							}
						]
					})(<Input type="password" />)}
				</Form.Item>
				<Form.Item label="确认密码">
					{getFieldDecorator('confirm', {
						rules: [
							{
								required: true,
								message: 'Please confirm your password!'
							},
							{
								validator: this.compareToFirstPassword
							}
						]
					})(<Input type="password" onBlur={this.handleConfirmBlur} />)}
				</Form.Item>
				<Form.Item label="手机号">
					{getFieldDecorator('phone', {
						rules: [ { required: true, message: 'Please input your phone number!' } ]
					})(<Input />)}
				</Form.Item>
			</Form>
		);
	}
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
