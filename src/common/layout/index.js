/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 公共的页面布局，顶部-侧边布局
 * @since: 2019-04-18 15:32:38
 * @lastTime: 2019-04-20 18:24:37
 */
import React, { PureComponent } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { connect } from 'react-redux';
import './style.less';
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

class Common extends PureComponent {
	render() {
		console.log(this.props)
		const { content, headerItem, dropDownMenu,children } = this.props;
		return (
			<Layout>
				{this.props.children}
				<Header className="header">
					<div className="logo">
						<Icon type="form" />
						<p>课业U管理</p>
					</div>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} className="headerItem">
						{headerItem.map((item) => {
							return <Menu.Item key={item.get('id')}>{item.get('name')}</Menu.Item>;
						})}
						<SubMenu
							title={
								<span className="submenu-title-wrapper">
									<Icon type="user" />用户名
								</span>
							}
						>
							{dropDownMenu.map((item) => {
								return <Menu.Item key={item.get('id')}>{item.get('name')}</Menu.Item>;
							})}
						</SubMenu>
					</Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
				</Content>
				{/* Layout组件 */}
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	headerItem: state.getIn([ 'common', 'headerItem' ]), //头部标签
	dropDownMenu: state.getIn([ 'common', 'dropDownMenu' ]), //头部个人中心
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Common);
