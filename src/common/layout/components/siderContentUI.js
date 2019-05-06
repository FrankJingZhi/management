import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

class SiderContentUI extends PureComponent {
	render() {
		const { SiderMenu } = this.props;
		return (
			<Sider width={200} style={{ background: '#fff' }}>
				<Menu mode="inline" defaultSelectedKeys={[ '0' ]} style={{ height: '100%' }}>
					{SiderMenu.map((item, index) => {
						return (
							<Menu.Item key={index}>
								<Link to={item.get('url')}>{item.get('name')}</Link>
							</Menu.Item>
						);
					})}
				</Menu>
			</Sider>
		);
	}
}
const mapStateToProps = (state) => ({
	SiderMenu: state.getIn([ 'common', 'siderMenu' ]) //侧边栏数据
});

export default connect(mapStateToProps, null)(SiderContentUI);
