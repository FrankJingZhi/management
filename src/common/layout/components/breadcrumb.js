/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 面包屑导航
 * @since: 2019-04-22 14:52:48
 * @lastTime: 2019-05-21 14:38:42
 */
import React, { PureComponent } from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import '../style.less';
import { Link } from 'react-router-dom';

class BreadCrumbUI extends PureComponent {
	render() {
		const routes = [
			{
				path: '/layout',
				breadcrumbName: '首页'
			},
			{
				path: '/layout/training',
				breadcrumbName: '训练列表'
			},
			{
				path: '/layout/test',
				breadcrumbName: '测试列表'
			},
			{
				path: '/layout/manage',
				breadcrumbName: '管理'
			}
		];

		function itemRender(route, params, routes, paths) {
			// const last = routes.indexOf(route) === routes.length - 1;
			// return last ? (
			// 	<span>{route.breadcrumbName}</span>
			// ) : (
			// 	<Link to={paths.join('/')}>{route.breadcrumbName}</Link>
			// );
			return (
				<span>{route.breadcrumbName}</span>
			)
		}

		return (
			<Breadcrumb 
				style={{ margin: '16px 0' }} 
				itemRender={itemRender} 
				routes={routes} 
			/>
		)
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumbUI);
