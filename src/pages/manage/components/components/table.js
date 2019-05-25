import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { actionCreators } from '../../store'; //从store文件夹引入actionCreators模块


class TableUI extends PureComponent {
	componentDidMount() {
        const {RouterPath,getTableInfo,getColumnsInfo,name,clearSelectedRowsAndKeys} = this.props;
		name ? getTableInfo(RouterPath,name) : getTableInfo(RouterPath);
		getColumnsInfo(RouterPath);
		clearSelectedRowsAndKeys();
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
	getTableInfo(data,name) {
		dispatch(actionCreators.getTableInfo(data,name));
    },
    getColumnsInfo(data){
        dispatch(actionCreators.getColumnsInfo(data))
	},
	clearSelectedRowsAndKeys(){
		dispatch(actionCreators.clearSelectedRowsAndKeys())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(TableUI);
