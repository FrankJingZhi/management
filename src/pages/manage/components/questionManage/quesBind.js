import React, { PureComponent, Fragment } from 'react';
import ButtonGroup from '../components/buttonGroup';
import TableUI from '../components/table';

class QuesBind extends PureComponent {
	render() {
		return (
			<Fragment>
				<ButtonGroup />
				<TableUI />
			</Fragment>
		);
	}
}

export default QuesBind;
