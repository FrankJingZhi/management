import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, notification } from 'antd';
import UpdateForm from './components/updateForm';
import UpdateModal from './components/updateModal';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

const { Content } = Layout;

class Person extends PureComponent {
	openNotificationWithIcon = (type) => {
		if (type === 'error') {
			notification[type]({
				message: '报错提示',
				description: '抱歉，数据丢失，请重试...'
			});
		} else {
			notification[type]({
				message: '成功提示',
				description: '操作成功！'
			});
		}
	};

	render() {
		const {RouterPath} = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<UpdateForm
					RouterPath={RouterPath}
					openNotificationWithIcon={this.openNotificationWithIcon}
				/>
				<UpdateModal />
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	RouterPath: state.getIn(['common','routerPath'])
});


export default connect(mapStateToProps, null)(Person);
