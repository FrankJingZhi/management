import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import UpdateForm from './components/updateForm';
import UpdateModal from './components/updateModal';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

const { Content } = Layout;

class Person extends PureComponent {
	
	render() {
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<UpdateForm />
				<UpdateModal />
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Person);
