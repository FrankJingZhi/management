import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';
import UserModal from '../components/userModal';

class ExamBind extends PureComponent {
	render() {
		console.log('ExamBind:', this);
		const { history } = this.props;

		return (
			<Fragment>
				<ButtonGroup history={history} />
				<TableUI />
				<UserModal />
			</Fragment>
		);
	}
}

export default withRouter(ExamBind);
