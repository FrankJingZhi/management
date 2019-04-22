import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Common from '../../common/layout/index';	//引入公共布局组件
// import { actionCreators } from './store'; //从store文件夹引入actionCreators模块

class Training extends PureComponent {
	render() {
		const training = (
			<div>这是training页面</div>
		);
		return (
			<Common 
				content = {training}
			/>
			// <div>这是training页面</div>
		);
	}
}

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
