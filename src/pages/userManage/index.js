import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Table } from 'antd';
import HeaderUI from '../../common/layout/header'; //引入公共头部布局组件
import FooterUI from '../../common/layout/footer'; //引入公共底部布局组件
import BreadCrumbUI from '../../common/layout/breadcrumb'; //引入公共面包屑布局组件
import SiderContentUI from '../../common/layout/siderContentUI'; //引入公共侧边栏布局组件
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class UserManage extends PureComponent {
	componentDidMount() {}

	render() {
		const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
				console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			getCheckboxProps: (record) => ({
				disabled: record.name === 'Disabled User', // Column configuration not to be checked
				name: record.name
			})
		};
		const { columns, data } = this.props;
		const columnsJS = columns.toJS();
		const dataJS = data.toJS();
		return (
			<Layout>
				<HeaderUI />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0', background: '#fff' }}>
						<SiderContentUI />
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							<Table rowSelection={rowSelection} columns={columnsJS} dataSource={dataJS} />
						</Content>
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	columns: state.getIn([ 'manage', 'columns' ]),
	data: state.getIn([ 'manage', 'data' ])
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
