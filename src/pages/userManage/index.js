import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Button } from 'antd';
import SiderContentUI from '../../common/layout/components/siderContentUI'; //引入公共侧边栏布局组件
import ButtonGroup from './components/buttonGroup';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

const { Content } = Layout;

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
			<Layout style={{ padding: '24px 0', background: '#fff' }}>
				<SiderContentUI />
				<Content style={{ padding: '0 24px', minHeight: 280 }}>
					<ButtonGroup />
					<Table rowSelection={rowSelection} columns={columnsJS} dataSource={dataSourceJS} />
				</Content>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	columns: state.getIn([ 'userManage', 'columns' ]),
	dataSource: state.getIn([ 'userManage', 'dataSource' ])
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
