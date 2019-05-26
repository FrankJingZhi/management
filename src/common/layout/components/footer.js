/*
 * @Author: Frank
 * @LastAuthor: Do not edit
 * @description: 页面底部
 * @since: 2019-04-22 14:50:53
 * @lastTime: 2019-05-26 14:05:08
 */
import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import '../style.less';
const { Footer } = Layout;

class FooterUI extends PureComponent {
	render() {
		return (
			<Footer style={{ textAlign: 'center' }}>Course Management ©2019 Created by The Best</Footer>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(FooterUI);
