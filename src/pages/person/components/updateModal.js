import React, { PureComponent } from 'react';
import { Modal, Form, Input, Radio } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
	// eslint-disable-next-line
	class extends PureComponent {

		validateToOldPassword = (rule, value, callback) => {
			const form = this.props.form;
			if (value && this.props.ConfirmDirty) {
				form.validateFields([ 'confirm' ], { force: true });
			}
			callback();
		};

		compareToFirstPassword = (rule, value, callback) => {
			const form = this.props.form;
			if (value && value !== form.getFieldValue('new_password')) {
				callback('两次输入的密码不一致！');
			} else {
				callback();
			}
		};

		render() {
			const { onCancel, onCreate, form, visible, handleConfirmBlur, ConfirmDirty } = this.props;
			console.log('modal:', this);
			const { getFieldDecorator } = form;
			const formItemLayout = {
				labelCol: {
					md: { span: 4 }
				},
				wrapperCol: {
					md: { span: 18 }
				}
			};
			return (
				<Modal
					visible={visible}
					title="修改密码"
					okText="确定"
					cancelText="取消"
					onCancel={onCancel}
					onOk={onCreate}
				>
					<Form layout="vertical" {...formItemLayout}>
						<Form.Item label="旧密码" hasFeedback>
							{getFieldDecorator('old_password', {
								rules: [
									{
										required: true,
										message: '请输入正确的旧密码！'
									},
									{
										validator: this.validateToOldPassword
									}
								]
							})(<Input.Password />)}
						</Form.Item>
						<Form.Item label="新密码" hasFeedback>
							{getFieldDecorator('new_password', {
								rules: [
									{
										required: true,
										message: '请输入新密码！'
									},
									{
										validator: this.validateToNewPassword
									}
								]
							})(<Input.Password />)}
						</Form.Item>
						<Form.Item label="确认密码" hasFeedback>
							{getFieldDecorator('confirm', {
								rules: [
									{
										required: true,
										message: '请再次输入新密码！'
									},
									{
										validator: this.compareToFirstPassword
									}
								]
							})(<Input.Password onBlur={(e)=>handleConfirmBlur(e.target.value,ConfirmDirty)} />)}
						</Form.Item>
					</Form>
				</Modal>
			);
		}
	}
);

class UpdateModal extends PureComponent {
	handleCreate = () => {
		const form = this.formRef.props.form;
		const { VisibleModal, showModal } = this.props;
		form.validateFields((err, values) => {
			if (err) {
				return;
			}

			console.log('Received values of form: ', values);
			form.resetFields();
			showModal(VisibleModal);
		});
	};

	saveFormRef = (formRef) => {
		this.formRef = formRef;
	};

	render() {
		const { VisibleModal, showModal,handleConfirmBlur } = this.props;
		return (
			<CollectionCreateForm
				wrappedComponentRef={this.saveFormRef}
				visible={VisibleModal}
				onCancel={() => showModal(VisibleModal)}
				onCreate={this.handleCreate}
				handleConfirmBlur={handleConfirmBlur}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	VisibleModal: state.getIn([ 'person', 'visibleModal' ])
});

const mapDispatchToProps = (dispatch) => ({
	showModal(VisibleModal) {
		dispatch(actionCreators.showModal(VisibleModal));
	},
	handleConfirmBlur(value,ConfirmDirty){
		dispatch(actionCreators.handleConfirmBlur(ConfirmDirty || !!value))
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateModal));
