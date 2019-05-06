import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import ButtonGroup from './buttonGroup';
import { actionCreators } from '../store'; //从store文件夹引入actionCreators模块


class UserManage extends PureComponent {
	componentDidMount() {
		this.props.getTableInfo();
	}

	render() {
		const { columns, dataSource, changeSelectedRowKeys, changeSelectedRows } = this.props;
		const columnsJS = columns.toJS();
		const dataSourceJS = dataSource.toJS();

		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
				changeSelectedRowKeys(selectedRowKeys);
				changeSelectedRows(selectedRows);
			}
		};

		return (
			<Fragment>
				<ButtonGroup />
				<Table rowSelection={rowSelection} columns={columnsJS} dataSource={dataSourceJS} />
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
	changeSelectedRowKeys(rowKeys) {
		dispatch(actionCreators.changeSelectedRowKeys(rowKeys));
	},
	changeSelectedRows(rows) {
		dispatch(actionCreators.changeSelectedRows(rows));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
