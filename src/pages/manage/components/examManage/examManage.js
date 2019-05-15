import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';
import UserModal from '../components/userModal';

class ExamManage extends PureComponent {
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

export default ExamManage;
