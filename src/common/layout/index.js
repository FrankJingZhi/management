import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Layout, Table } from 'antd';
import HeaderUI from './components/header'; //引入公共头部布局组件
import FooterUI from './components/footer'; //引入公共底部布局组件
import BreadCrumbUI from './components/breadcrumb'; //引入公共面包屑布局组件
import Training from '../../pages/training/index';  //
import Test from '../../pages/test/index';  //
import Manage from '../../pages/userManage/index';  //

const { Content } = Layout;

class LayoutUI extends Component {
	
	render() {
		// console.log('props,', this);
		const {location,RouterPath} = this.props;
		return (
			<Layout>
				<HeaderUI pathname={location.pathname} />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0', background: '#fff' }}>
						{/* 需要加载的路由组件 */}
						{
							RouterPath === 'training' && <Route path={`${location.pathname}`} component={Training} /> 
						}
						{
							RouterPath === 'test' && <Route path={`${location.pathname}`} component={Test} /> 
						}
						{
							RouterPath === 'manage' && <Route path={`${location.pathname}`} component={Manage} /> 
						}
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}
const mapStateToProps = (state) => ({
	RouterPath:state.getIn(['common','routerPath'])
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutUI);
