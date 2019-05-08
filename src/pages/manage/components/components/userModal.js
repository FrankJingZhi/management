import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import { Modal } from 'antd';
import { actionCreators } from '../../store';
import WrappedRegistrationForm from './userForm';

class UserModal extends PureComponent {

  render() {
    const {ShowUserAddModal,closeAddHandleClick,AddBtnName} = this.props;
    return (
        <Modal
          title={AddBtnName}
          visible={ShowUserAddModal}
          onCancel={closeAddHandleClick}
          okText="确定"
          cancelText="取消"
        >
          <WrappedRegistrationForm/>
        </Modal>
    );
  }
}

const mapStateToState = (state) => ({
    ShowUserAddModal: state.getIn(['manage','showUserAddModal']),
	AddBtnName: state.getIn(['manage','addBtnName'])
})

const mapDispatchToState = (dispatch) => ({
    closeAddHandleClick(){
        dispatch(actionCreators.closeAddHandleClick())
    }
})

export default connect(mapStateToState,mapDispatchToState)(UserModal);