import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from './buttonGroup';
import TableUI from './table';

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
