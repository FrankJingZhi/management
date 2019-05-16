/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 页面头部
 * @since: 2019-04-22 14:46:49
 * @lastTime: 2019-05-15 17:01:48
 */
import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store'; //从store文件夹引入actionCreators模块
import '../style.less';

const { SubMenu } = Menu;
const { Header } = Layout;

class HeaderUI extends PureComponent {
	componentDidMount() {
		this.props.checkRouter(this.props.pathname);
	}
	render() {
		const { headerItem, dropDownMenu, checkRouter, pathname } = this.props;
		return (
			<Header className="header">
				<div className="logo">
					<Icon type="form" />
					<p>课业U管理</p>
				</div>
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={[ '1' ]} className="headerItem">
					{headerItem.map((item) => {
						return (
							<Menu.Item key={item.get('id')} onClick={checkRouter(pathname)}>
								<Link to={item.get('url')}>{item.get('name')}</Link>
							</Menu.Item>
						);
					})}
					<SubMenu
						title={
							<span className="submenu-title-wrapper">
								<Icon type="user" />用户名
							</span>
						}
					>
						{dropDownMenu.map((item) => {
							return (
								<Menu.Item key={item.get('id')}>
									<Link to={item.get('url')}>{item.get('name')}</Link>
								</Menu.Item>
							);
						})}
					</SubMenu>
				</Menu>
			</Header>
		);
	}
}

const mapStateToProps = (state) => ({
	headerItem: state.getIn([ 'common', 'headerItem' ]), //头部标签
	dropDownMenu: state.getIn([ 'common', 'dropDownMenu' ]) //头部个人中心
});

const mapDispatchToProps = (dispatch) => ({
	checkRouter(pathname) {
		dispatch(actionCreators.checkRouter(pathname));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUI);
