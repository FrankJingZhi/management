import React, { PureComponent } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class SiderContentUI extends PureComponent {
	render() {
		return (
			<Layout style={{ padding: '24px 0', background: '#fff' }}>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
						mode="inline"
						defaultSelectedKeys={[ '1' ]}
						defaultOpenKeys={[ 'sub1' ]}
						style={{ height: '100%' }}
					>
						<SubMenu
							key="sub1"
							title={
								<span>
									<Icon type="user" />subnav 1
								</span>
							}
						>
							<Menu.Item key="1">option1</Menu.Item>
							<Menu.Item key="2">option2</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
			</Layout>
		);
	}
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SiderContentUI);
