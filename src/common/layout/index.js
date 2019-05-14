import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import HeaderUI from './components/header'; //引入公共头部布局组件
import FooterUI from './components/footer'; //引入公共底部布局组件
import BreadCrumbUI from './components/breadcrumb'; //引入公共面包屑布局组件
import Training from '../../pages/training/index'; //
import Test from '../../pages/test/index'; //
import Manage from '../../pages/manage/index'; //
import Exam from '../../pages/exam/index'; //
import { Switch, Route } from 'react-router-dom'; //react路由

const { Content } = Layout;

class LayoutUI extends Component {
	render() {
		console.log('props,', this, this.props.match.url);
		const { location, RouterPath, match } = this.props;
		return (
			<Layout className="wrapper">
				<HeaderUI pathname={location.pathname} />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0', background: '#fff' }}>
						{/* 需要加载的路由组件 */}
						<Switch>
							<Route path={`${match.url}/training`} exact component={Training} />
							<Route path={`${match.url}/test`} exact component={Test} />
							<Route path={`${match.url}/training/exam`} component={Exam} />
							<Route path={`${match.url}/test/exam`} component={Exam} />
							<Route path={`${match.url}/manage`} component={Manage} />
						</Switch>
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}
const mapStateToProps = (state) => ({
	RouterPath: state.getIn([ 'common', 'routerPath' ])
});

export default connect(mapStateToProps, null)(LayoutUI);
