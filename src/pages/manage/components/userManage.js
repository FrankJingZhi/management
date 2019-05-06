import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import ButtonGroup from './buttonGroup';
import TableUI from './table';
import { actionCreators } from '../store'; //从store文件夹引入actionCreators模块


class UserManage extends PureComponent {
	componentDidMount() {
		this.props.getTableInfo();
	}

	render() {
		const { columns, dataSource} = this.props;

		return (
			<Fragment>
				<ButtonGroup />
				<TableUI columns={columns} dataSource={dataSource} />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	columns: state.getIn([ 'manage', 'columns' ]),
	dataSource: state.getIn([ 'manage', 'dataSource' ])
});

const mapDispatchToProps = (dispatch) => ({
	getTableInfo() {
		dispatch(actionCreators.getTableInfo());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
