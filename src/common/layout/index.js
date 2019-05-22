import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderUI from './components/header'; //引入公共头部布局组件
import FooterUI from './components/footer'; //引入公共底部布局组件
import BreadCrumbUI from './components/breadcrumb'; //引入公共面包屑布局组件
import Training from '../../pages/training/index'; //
import Test from '../../pages/test/index'; //
import Manage from '../../pages/manage/index'; //
import Exam from '../../pages/exam/index'; //
import Person from '../../pages/person/index'; //
import { Switch, Route } from 'react-router-dom'; //react路由

const { Content } = Layout;

class LayoutUI extends Component {
	render() {
		// console.log('props,', this, this.props.match.url);
		const { location, match } = this.props;
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
							<Route path={`${match.url}/training/exam/:exam_id`} component={Exam} />
							<Route path={`${match.url}/test/exam/:exam_id`} component={Exam} />
							<Route path={`${match.url}/manage`} component={Manage} />
							<Route path={`${match.url}/person`} component={Person} />
						</Switch>
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}

export default withRouter(LayoutUI);
