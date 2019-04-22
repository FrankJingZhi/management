/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 页面底部
 * @since: 2019-04-22 14:50:53
 * @lastTime: 2019-04-22 14:52:00
 */
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import './style.less';
const { Footer } = Layout;

class FooterUI extends PureComponent {
	render() {
		return (
			<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FooterUI);
