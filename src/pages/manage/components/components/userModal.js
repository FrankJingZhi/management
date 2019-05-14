import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { actionCreators } from '../../store';
import WrappedRegistrationForm from './userForm';
import WrappedExamForm from './examForm';

class UserModal extends PureComponent {
	render() {
		const { ShowUserAddModal, closeAddHandleClick, AddBtnName, RouterPath } = this.props;
		return (
			<Modal
				title={AddBtnName}
				visible={ShowUserAddModal}
				onCancel={closeAddHandleClick}
			
				footer={null}
			>
      {/* userManage路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('userManage') 
        ? <WrappedRegistrationForm />
        : ''
      }
      {/* examManage路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('examManage') 
        ? <WrappedExamForm />
        : ''
      }
				
			</Modal>
		);
	}
}

const mapStateToState = (state) => ({
	ShowUserAddModal: state.getIn([ 'manage', 'showUserAddModal' ]),
  AddBtnName: state.getIn([ 'manage', 'addBtnName' ]),
  RouterPath: state.getIn([ 'common', 'routerPath' ]),
});

const mapDispatchToState = (dispatch) => ({
	closeAddHandleClick() {
		dispatch(actionCreators.closeAddHandleClick());
	}
});

export default connect(mapStateToState, mapDispatchToState)(UserModal);
