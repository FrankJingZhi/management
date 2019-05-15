import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';

class EditExam extends PureComponent {
	render() {
		const { history } = this.props;
		const examName = window.sessionStorage.getItem('examName');

		return (
			<Fragment>
				<ButtonGroup history={history} />
				<TableUI examName={examName} />
			</Fragment>
		);
	}
}

export default withRouter(EditExam);
