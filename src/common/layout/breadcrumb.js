/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 面包屑导航
 * @since: 2019-04-22 14:52:48
 * @lastTime: 2019-04-22 15:03:47
 */
import React, { PureComponent } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import './style.less';
const { Content } = Layout;

class BreadCrumbUI extends PureComponent {
	render() {
		return (
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumbUI);
