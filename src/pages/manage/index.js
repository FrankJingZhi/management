import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import HeaderUI from '../../common/layout/header'; //引入公共头部布局组件
import FooterUI from '../../common/layout/footer'; //引入公共底部布局组件
import BreadCrumbUI from '../../common/layout/breadcrumb'; //引入公共面包屑布局组件
import SiderContentUI from '../../common/layout/siderContentUI'; //引入公共侧边栏布局组件
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Manage extends PureComponent {
	componentDidMount() {}
	render() {
		return (
			<Layout>
				<HeaderUI />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0', background: '#fff' }}>
						<SiderContentUI/>
						<Content style={{ padding: '0 24px', minHeight: 280 }} />
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
