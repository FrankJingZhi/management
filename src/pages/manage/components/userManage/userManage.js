import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';
import AddModal from '../components/addModal';

class UserManage extends PureComponent {
	render() {
		return (
			<Fragment>
				<ButtonGroup />
				<TableUI />
				<AddModal />
			</Fragment>
		);
	}
}

export default UserManage;
