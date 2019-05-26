import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';
import AddModal from '../components/addModal';

class ExamBindInfo extends PureComponent {
	render() {
		console.log('ExamBindInfo:', this);
		const { history } = this.props;

		return (
			<Fragment>
				<ButtonGroup history={history} />
				<TableUI />
				<AddModal />
			</Fragment>
		);
	}
}

export default withRouter(ExamBindInfo);
