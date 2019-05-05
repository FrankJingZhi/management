import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import PaginationUI from './components/pagination';
import { Route } from 'react-router-dom';
import Training from '../training/index'; //训练
import Test from '../test/index'; //测试

const { Content } = Layout;

class TrainingTest extends PureComponent {
	componentDidMount() {
		this.props.getTips();
	}
	render() {
		// console.log('test,', this);
		const { Tips, Type, Difficult, RouterPath, location } = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<Tags tips={Tips} type={Type.get('0')} />
				<Tags tips={Difficult} type={Type.get('1')} />
				{RouterPath === 'training' && <Route path={`${location.pathname}`} component={Training} />}
				{RouterPath === 'test' && <Route path={`${location.pathname}`} component={Test} />}
				<PaginationUI />
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	Tips: state.getIn([ 'trainingTest', 'tips' ]), // 获取类型信息
	Type: state.getIn([ 'trainingTest', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'trainingTest', 'difficult' ]), //获取试题难度
	RouterPath: state.getIn([ 'common', 'routerPath' ]) //路由路径
});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTest);
