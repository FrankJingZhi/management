import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import PaginationUI from './components/pagination';
import List from './components/list';

const { Content } = Layout;

class Training extends PureComponent {
	componentDidMount() {
		const {Tips,Difficult,currentPage,difCurrentIndex,tipCurrentIndex,getTrainingList,getTips} = this.props;
		getTips();
		getTrainingList(difCurrentIndex,Tips,Difficult,tipCurrentIndex,currentPage,null);
	}
	render() {
		// console.log('training,', this);
		const { Tips, Type, Difficult, location, trainingExam,getTrainingList } = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<Tags getTrainingList={getTrainingList} tips={Tips} otherTips={Difficult} type={Type.get('0')} />
				<Tags getTrainingList={getTrainingList} tips={Difficult} otherTips={Tips} type={Type.get('1')} />
				<List exam={trainingExam} pathname={location.pathname} />
				<PaginationUI getTrainingList={getTrainingList} />
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	Tips: state.getIn([ 'training', 'tips' ]), // 获取类型信息
	Type: state.getIn([ 'training', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'training', 'difficult' ]), //获取试题难度
	trainingExam: state.getIn([ 'training', 'trainingExam' ]), //获取训练试卷信息
	currentPage: state.getIn(['training','currentPage']),	//分页器页码
	difCurrentIndex: state.getIn([ 'training', 'difCurrentIndex' ]), //目前点击的是哪个标签
	tipCurrentIndex: state.getIn([ 'training', 'tipCurrentIndex' ]), //目前点击的是哪个标签
});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	},
	getTrainingList(index,tips, otherTips, currentIndex, currentPage,type){
		if(type==='类型'){
			dispatch(actionCreators.getTrainingList(currentPage, tips.get(index), otherTips.get(currentIndex)));
		}else if(type==='难度'){
			dispatch(actionCreators.getTrainingList(currentPage, otherTips.get(currentIndex), tips.get(index)));
		}else{
			dispatch(actionCreators.getTrainingList(currentPage, otherTips.get(index), tips.get(index)));
		}
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
