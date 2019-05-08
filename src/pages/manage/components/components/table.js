import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { actionCreators } from '../../store'; //从store文件夹引入actionCreators模块


class TableUI extends PureComponent {
	componentDidMount() {
        const {RouterPath} = this.props;
		this.props.getTableInfo(RouterPath);
		this.props.getColumnsInfo(RouterPath);
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
				<Table rowSelection={rowSelection} columns={columnsJS} dataSource={dataSourceJS} />
		);
	}
}

const mapStateToProps = (state) => ({
	columns: state.getIn([ 'manage', 'columns' ]),
    dataSource: state.getIn([ 'manage', 'dataSource' ]),
	RouterPath: state.getIn([ 'common', 'routerPath' ]),
});

const mapDispatchToProps = (dispatch) => ({
	changeSelectedRowKeys(rowKeys) {
		dispatch(actionCreators.changeSelectedRowKeys(rowKeys));
	},
	changeSelectedRows(rows) {
		dispatch(actionCreators.changeSelectedRows(rows));
	},
	getTableInfo(data) {
		dispatch(actionCreators.getTableInfo(data));
    },
    getColumnsInfo(data){
        dispatch(actionCreators.getColumnsInfo(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TableUI);
