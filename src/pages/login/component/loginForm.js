import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreators } from '../store';
import { Form, Icon, Input, Button } from 'antd';

class LoginForm extends PureComponent {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
                console.log('表单信息: ', values);
                this.props.loginClick(values);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					{getFieldDecorator('name', {
						rules: [ { required: true, message: '请输入用户名！' } ]
					})(
						<Input
							prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            className="textSize"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('password', {
						rules: [ { required: true, message: '请输入密码！' } ]
					})(
						<Input.Password
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
                            placeholder="密码"
                            className="textSize"
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button type="primary" htmlType="submit" className="textSize login-form-button">
						登录
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	// // 登录按钮点击回调
	loginClick(values) {
		dispatch(actionCreators.loginClick(values));
	}
});

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default withRouter(connect(null, mapDispatchToProps)(WrappedLoginForm));
