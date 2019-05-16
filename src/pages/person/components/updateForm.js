import React, { PureComponent } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { UpdateWrapper } from '../style';

class UpdateForm extends PureComponent {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('表单输入的值: ', values);
			}
		});
	};

	handleConfirmBlur = (e) => {
		const { ConfirmDirty } = this.props;
		const value = e.target.value;
		this.setState({ confirmDirty: ConfirmDirty || !!value });
	};

	render() {
		console.log('updataForm:');
		const { getFieldDecorator } = this.props.form;
		const { changeInputEdit, DisableInput } = this.props;

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

		return (
			<UpdateWrapper>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="用户名">
						{getFieldDecorator('user_name', {
							rules: [ { required: true, message: '请输入用户名！' } ]
						})(<Input disabled={DisableInput} />)}
					</Form.Item>
					<Form.Item label="用户类型">
						<Input disabled={true} style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item label="班级">
						{getFieldDecorator('class', {
							rules: [ { required: true, message: '请输入你的班级！', whitespace: true } ]
						})(<Input disabled={DisableInput} />)}
					</Form.Item>
					<Form.Item label="手机号">
						{getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: '请输入正确的手机号！',
									pattern: /^1[34578]\d{9}$/
								}
							]
						})(<Input disabled={DisableInput} />)}
					</Form.Item>
					<Form.Item label="学号">
						{getFieldDecorator('stu_number', {
							rules: [
								{
									required: true,
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
								<Button type="primary">修改密码</Button>
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
	ConfirmDirty: state.getIn([ 'person', 'confirmDirty' ]),
	DisableInput: state.getIn([ 'person', 'disableInput' ])
});

const mapDispatchToProps = (dispatch) => ({
	changeInputEdit(DisableInput) {
		dispatch(actionCreators.changeInputEdit(DisableInput));
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WrappedUpdateForm));
