import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import List from './components/list';

class Test extends PureComponent {
	render() {
		console.log('test,', this);
		const { Tips, Type, Difficult, Exam } = this.props;
		return <List exam={Exam} />;
	}
}

const mapStateToProps = (state) => ({
	Exam: state.getIn([ 'test', 'testExam' ]) //获取训练试卷信息
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
