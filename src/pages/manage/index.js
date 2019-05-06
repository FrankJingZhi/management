import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'; //react路由
import SiderContentUI from '../../common/layout/components/siderContentUI'; //引入公共侧边栏布局组件
import UserManage from './components/userManage'; //用户管理组件

const { Content } = Layout;

class Manage extends PureComponent {
	render() {
		// console.log('manage:',this)
		const { RouterPath, location, match } = this.props;
		return (
			<Layout style={{ padding: '24px 0', background: '#fff' }}>
				<SiderContentUI />
				<Content style={{ padding: '0 24px', minHeight: 280 }}>
					{/* 渲染用户、试卷、题目子路由 */}
					{/* {
						RouterPath.includes('userManage') && <Route path={`${location.pathname}`} component={UserManage}/>
					} */}
					<Switch>
						<Route path={`${match.url}/userManage`} exact component={UserManage} />
					</Switch>
				</Content>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	RouterPath: state.getIn([ 'common', 'routerPath' ])
});

export default connect(mapStateToProps, null)(Manage);
