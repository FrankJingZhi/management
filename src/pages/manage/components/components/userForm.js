import React, { PureComponent } from 'react';
import { Form, Input, Button, notification } from 'antd';
import {connect} from 'react-redux';
import { actionCreators } from '../../store';

class RegistrationForm extends PureComponent {
	state = {
		confirmDirty: false
	};

	componentDidMount(){
		// const {addUserInfo,closeAddHandleClick} = this.props;
		// if(addUserInfo){
		// 	if(addUserInfo.get('status') === 'success'){
		// 		this.openNotificationWithIcon('success');
		// 		closeAddHandleClick();
		// 	}else{
		// 		this.openNotificationWithIcon('error');
		// 	}
		// }
	}

	openNotificationWithIcon = (type) => {
		if(type === 'error'){
			notification[type]({
				message: '报错提示',
				description:
					'抱歉，用户添加失败，请重试...'
			});
		}else{
			notification[type]({
				message: '成功提示',
				description:
					'用户添加成功！'
			});
		}
	};

	handleSubmit = (e) => {
		const {handleUserForm,RouterPath,addUserInfo,closeAddHandleClick} = this.props;
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('表单输入的值: ', values);
				handleUserForm(values,RouterPath,(res)=>{
					console.log('res:',res)
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
				<Form.Item label="组管理员名">
					{getFieldDecorator('name', {
						rules: [ { required: true, message: '请输入组管理员名！', whitespace: true } ]
					})(<Input />)}
				</Form.Item>
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

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

const mapStateToProps = (state) => ({
	addUserInfo: state.getIn(['manage','addUserInfo']),	//添加用户是否成功	
})

const mapDispatchToProps = (dispatch) => ({
	handleUserForm(values,RouterPath,callback){
		dispatch(actionCreators.handleUserForm(values,RouterPath,callback))
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(WrappedRegistrationForm);
