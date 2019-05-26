import React, { PureComponent } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { UpdateWrapper } from '../style';

class UpdateForm extends PureComponent {

	componentDidMount(){
		const userName = window.sessionStorage.getItem('userName');
		this.props.getUserInfo(userName);
	}

	handleSubmit = (e) => {
		const {
			handlePersonForm,
			openNotificationWithIcon,
			changeInputEdit
		} = this.props;
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('表单输入的值: ', values);
				handlePersonForm(values, (data) => {
					if (data.status === 'success') {
						openNotificationWithIcon('success');
						changeInputEdit();
					} else {
						openNotificationWithIcon('error');
					}
				});
			}
		});
	};

	render() {
		// console.log('updataForm:');
		const { getFieldDecorator } = this.props.form;
		const { changeInputEdit, DisableInput, showModal, VisibleModal } = this.props;

		const formItemLayout = {
			labelCol: {
				md: {
					span: 2,
					offset: 6
				}
			},
			wrapperCol: {
				md: { span: 9 }
			}
		};
		const tailItemLayout = {
			wrapperCol: {
				md: {
					span: 8,
					offset: 8
				}
			}
		};
		const {userInfo} = this.props;
		const userName = window.sessionStorage.getItem('userName');
		const userPermission = window.sessionStorage.getItem('userPermission');
		const usergroup = userInfo.get('usergroup');
		let permission = '';
		if(userPermission === 'a'){
			permission = '超级管理员'
		}else if(userPermission === 'b'){
			permission = '组管理员'
		}else{
			permission = '普通用户'
		}
		return (
			<UpdateWrapper>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="用户名">
						{getFieldDecorator('name',{
							initialValue: userName,
						})(<Input disabled={true} />)}
					</Form.Item>
					<Form.Item label="用户类型">
						{getFieldDecorator('permission',{
							initialValue: permission,
						})(<Input disabled={true} style={{ width: '100%' }} />)}
					</Form.Item>
					<Form.Item label="用户组">
						{getFieldDecorator('usergroup', {
							initialValue: usergroup,
						})(<Input disabled={true} />)}
					</Form.Item>
					<Form.Item label="手机号">
						{getFieldDecorator('phone', {
							rules: [
								{
									message: '请输入正确的手机号！',
									pattern: /^1[34578]\d{9}$/
								}
							]
						})(<Input disabled={DisableInput} />)}
					</Form.Item>
					<Form.Item label="学号">
						{getFieldDecorator('studentid', {
							rules: [
								{
									message: '请输入你的学号',
									pattern: /^\d{4}4070\d{4}$/,
									whitespace: true
								}
							]
						})(<Input disabled={DisableInput} />)}
					</Form.Item>
					<Form.Item {...tailItemLayout} className={DisableInput ? 'showBtn' : null}>
						<Row>
							<Col span={8} offset={5}>
								<Button type="primary" htmlType="submit">
									确定
								</Button>
							</Col>
							<Col span={5}>
								<Button type="primary" onClick={() => changeInputEdit()}>
									取消
								</Button>
							</Col>
						</Row>
					</Form.Item>
					<Form.Item {...tailItemLayout} className={DisableInput ? null : 'showBtn'}>
						<Row>
							<Col span={8} offset={5}>
								<Button type="primary" onClick={() => changeInputEdit(DisableInput)}>
									修改个人信息
								</Button>
							</Col>
							<Col span={5}>
								<Button type="primary" onClick={() => showModal(VisibleModal)}>
									修改密码
								</Button>
							</Col>
						</Row>
					</Form.Item>
				</Form>
			</UpdateWrapper>
		);
	}
}

const WrappedUpdateForm = Form.create({ name: 'register' })(UpdateForm);

const mapStateToProps = (state) => ({
	DisableInput: state.getIn([ 'person', 'disableInput' ]),
	VisibleModal: state.getIn([ 'person', 'visibleModal' ]),
	userInfo: state.getIn(['person','userInfo']),
});

const mapDispatchToProps = (dispatch) => ({
	changeInputEdit(DisableInput) {
		dispatch(actionCreators.changeInputEdit(DisableInput));
	},
	showModal(VisibleModal) {
		dispatch(actionCreators.showModal(VisibleModal));
	},
	handlePersonForm(values, RouterPath, callback) {
		dispatch(actionCreators.handlePersonForm(values, RouterPath, callback));
	},
	getTableInfo(data, name) {
		dispatch(actionCreators.getTableInfo(data, name));
	},
	getUserInfo(data){
		dispatch(actionCreators.getUserInfo(data))
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedUpdateForm));
