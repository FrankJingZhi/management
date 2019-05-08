import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from './components/buttonGroup';
import TableUI from './components/table';

class ExamManage extends PureComponent {
	render() {
		return (
			<Fragment>
				<ButtonGroup />
				<TableUI />
			</Fragment>
		);
	}
}

export default ExamManage;
