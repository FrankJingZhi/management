import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonGroup from './components/buttonGroup';
import TableUI from './components/table';
import UserModal from './components/userModal';

class SelfManage extends PureComponent {
	render() {
		console.log('selfManage:', this);
		const { history } = this.props;
		const { userGroup } = history.location.query;

		return (
			<Fragment>
				<ButtonGroup history={history} />
				<TableUI userGroup={userGroup} />
				<UserModal />
			</Fragment>
		);
	}
}

export default withRouter(SelfManage);
