import React, { PureComponent } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'react-redux';
const { Sider } = Layout;

class SiderContentUI extends PureComponent {
	render() {
		const {SiderMenu} = this.props;
		return (
			<Sider width={200} style={{ background: '#fff' }}>
				<Menu mode="inline" defaultSelectedKeys={[ '1' ]} style={{ height: '100%' }}>
					{SiderMenu.map((item,index)=>{
						return <Menu.Item key={index}>{item.get('name')}</Menu.Item>
					})}
				</Menu>
			</Sider>
		);
	}
}
const mapStateToProps = (state) => ({
	SiderMenu:state.getIn(['common','siderMenu']), //侧边栏数据
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SiderContentUI);
