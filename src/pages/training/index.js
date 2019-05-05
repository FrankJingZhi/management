import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import PaginationUI from './components/pagination';
import { Route } from 'react-router-dom';
import List from './components/list';
import Exam from '../exam/index'; //

const { Content } = Layout;

class Training extends PureComponent {
	componentDidMount() {
		this.props.getTips();
	}
	render() {
		console.log('training,', this);
		const { Tips, Type, Difficult, location, trainingExam, match,RouterPath } = this.props;
		return (
		// 	<Fragment>
		// 		{RouterPath.includes('exam') ? (
		// 			// <Route path={`${match.url}/exam/:id`} component={Exam} />
		// 			<div>123123</div>
		// 		) : (
					<Content style={{ padding: '0 24px', minHeight: 280 }}>
						<Tags tips={Tips} type={Type.get('0')} />
						<Tags tips={Difficult} type={Type.get('1')} />
						<List exam={trainingExam} pathname={location.pathname} />
						<PaginationUI />
					</Content>
			// 	)}
			// </Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	Tips: state.getIn([ 'training', 'tips' ]), // 获取类型信息
	Type: state.getIn([ 'training', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'training', 'difficult' ]), //获取试题难度
	trainingExam: state.getIn([ 'training', 'trainingExam' ]), //获取训练试卷信息
	RouterPath:state.getIn(['common','routerPath'])
});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
