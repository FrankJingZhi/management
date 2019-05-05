import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import PaginationUI from './components/pagination';
import { Route } from 'react-router-dom';
import List from './components/list';

const { Content } = Layout;

class Test extends PureComponent {
	componentDidMount() {
		this.props.getTips();
	}
	render() {
		// console.log('test,', this);
		const { Tips, Type, Difficult, location,Exam } = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<Tags tips={Tips} type={Type.get('0')} />
				<Tags tips={Difficult} type={Type.get('1')} />
		 		<List exam={Exam} pathname={location.pathname}/>
				<PaginationUI />
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	Tips: state.getIn([ 'test', 'tips' ]), // 获取类型信息
	Type: state.getIn([ 'test', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'test', 'difficult' ]), //获取试题难度
	Exam: state.getIn([ 'test', 'testExam' ]) //获取训练试卷信息
});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
