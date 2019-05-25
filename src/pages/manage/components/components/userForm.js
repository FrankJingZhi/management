import React, { PureComponent } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../../store';

class UserForm extends PureComponent {
	state = {
		confirmDirty: false
	};

	handleSubmit = (e) => {
		const {
			handleUserForm,
			RouterPath,
			closeAddHandleClick,
			openNotificationWithIcon,
			getTableInfo,
			name
		} = this.props;
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('表单输入的值: ', values);
				handleUserForm(values, RouterPath, (data) => {
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

	handleConfirmBlur = (e) => {
		const value = e.target.value;
		this.setState({ confirmDirty: this.state.confirmDirty || !!value });
	};

	compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue('password')) {
			callback('两次输入的密码不一致');
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
		const { RouterPath } = this.props;

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

		return (
			<Form {...formItemLayout} onSubmit={this.handleSubmit}>
				<Form.Item label="用户组名">
					{getFieldDecorator('groupname', {
						rules: [ { required: true, message: '请输入用户组名！', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
				{RouterPath.includes('userManage') && !RouterPath.includes('selfManage') ? (
					<Form.Item label="组管理员名">
						{getFieldDecorator('name', {
							rules: [ { required: true, message: '请输入组管理员名！', whitespace: true } ]
						})(<Input />)}
					</Form.Item>
				) : (
					<Form.Item label="用户">
						{getFieldDecorator('name', {
							rules: [ { required: true, message: '请输入用户名！', whitespace: true } ]
						})(<Input />)}
					</Form.Item>
				)}

				<Form.Item label="密码">
					{getFieldDecorator('password', {
						rules: [
							{
								required: true,
								message: '请输入密码！'
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
								message: '请再次输入密码！'
							},
							{
								validator: this.compareToFirstPassword
							}
						]
					})(<Input type="password" onBlur={this.handleConfirmBlur} />)}
				</Form.Item>
				<Form.Item label="手机号">
					{getFieldDecorator('phone', {
						rules: [ { required: true, message: '请输入手机号！' } ]
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

const WrappedUserForm = Form.create({ name: 'register' })(UserForm);

const mapStateToProps = (state) => ({
	addUserInfo: state.getIn([ 'manage', 'addUserInfo' ]) //添加用户是否成功
});

const mapDispatchToProps = (dispatch) => ({
	handleUserForm(values, RouterPath, callback) {
		dispatch(actionCreators.handleUserForm(values, RouterPath, callback));
	},
	getTableInfo(data, name) {
		dispatch(actionCreators.getTableInfo(data, name));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(WrappedUserForm);
