import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import HeaderUI from '../../common/layout/header'; //引入公共布局组件
import FooterUI from '../../common/layout/footer'; //引入公共布局组件
import BreadCrumbUI from '../../common/layout/breadcrumb'; //引入公共布局组件
// import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

const { Content } = Layout;

class Training extends PureComponent {
	render() {
		return (
			<Layout>
				<HeaderUI />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0', background: '#fff' }}>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							
						</Content>
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
