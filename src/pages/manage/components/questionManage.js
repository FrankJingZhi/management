import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from './components/buttonGroup';
import TableUI from './components/table';

class QuestionManage extends PureComponent {
	render() {
		const { RouterPath } = this.props;
		return (
			<Fragment>
				<ButtonGroup />
				<TableUI RouterPath={RouterPath} />
			</Fragment>
		);
	}
}

export default QuestionManage;
