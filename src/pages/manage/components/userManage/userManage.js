import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';
import UserModal from '../components/userModal';

class UserManage extends PureComponent {
	render() {
		return (
			<Fragment>
				<ButtonGroup />
				<TableUI />
				<UserModal />
			</Fragment>
		);
	}
}

export default UserManage;
