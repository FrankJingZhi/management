import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Modal,notification } from 'antd';
import { actionCreators } from '../../store';
import WrappedUserForm from './userForm';
import WrappedExamForm from './examForm';
import WrapperQuesForm from './quesForm';

class AddModal extends PureComponent {

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
        RouterPath.includes('userManage') && !RouterPath.includes('examBindInfo') && !RouterPath.includes('examBind')
				? <WrappedUserForm
						closeAddHandleClick={closeAddHandleClick}
						RouterPath={RouterPath}	
						openNotificationWithIcon={this.openNotificationWithIcon}
					/>
        : ''
      }
      {/* examBindInfo路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('examBindInfo') && !RouterPath.includes('examBind')
				? <WrappedUserForm
						closeAddHandleClick={closeAddHandleClick}
						RouterPath={RouterPath}	
						openNotificationWithIcon={this.openNotificationWithIcon}
					/>
        : ''
      }
      {/* examBind路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('examBind')
				? <WrappedUserForm
						closeAddHandleClick={closeAddHandleClick}
						RouterPath={RouterPath}	
						openNotificationWithIcon={this.openNotificationWithIcon}
					/>
        : ''
      }
      {/* userManage路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('userManage') && !RouterPath.includes('examBindInfo') && !RouterPath.includes('examBind')
				? <WrappedUserForm
						closeAddHandleClick={closeAddHandleClick}
						RouterPath={RouterPath}	
						openNotificationWithIcon={this.openNotificationWithIcon}
					/>
        : ''
      }
      {/* examManage路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('examManage') && !RouterPath.includes('editExam')
        ? <WrappedExamForm 
					closeAddHandleClick={closeAddHandleClick}
					RouterPath={RouterPath}	
					openNotificationWithIcon={this.openNotificationWithIcon}
				/>
        : ''
      }
      {/* editExam路由下添加按钮弹框表单 */}
      {
        RouterPath.includes('editExam') 
        ? <WrapperQuesForm 
					closeAddHandleClick={closeAddHandleClick}
					RouterPath={RouterPath}	
					openNotificationWithIcon={this.openNotificationWithIcon}
				/>
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

export default connect(mapStateToState, mapDispatchToState)(AddModal);
