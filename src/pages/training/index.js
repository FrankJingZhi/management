import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import PaginationUI from '../../common/layout/components/pagination';
import List from './components/list';

const { Content } = Layout;

class Training extends PureComponent {
	componentDidMount() {
		const { Tips, Difficult, currentPage, difCurrentIndex, tipCurrentIndex, getList, getTips } = this.props;
		getTips();
		getList(difCurrentIndex, Tips, Difficult, tipCurrentIndex, currentPage, null);
	}
	render() {
		// console.log('training,', this);
		const {
			Tips,
			Type,
			Difficult,
			location,
			trainingExam,
			getList,
			tipCurrentIndex,
			totalPage,
			linkToPage,
			getTotalPage,
			currentPage,
			difCurrentIndex
		} = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<Tags getList={getList} tips={Tips} otherTips={Difficult} type={Type.get('0')} />
				<Tags getList={getList} tips={Difficult} otherTips={Tips} type={Type.get('1')} />
				<List exam={trainingExam} pathname={location.pathname} />
				<PaginationUI
					getList={getList}
					currentPage={currentPage}
					Tips={Tips}
					Difficult={Difficult}
					difCurrentIndex={difCurrentIndex}
					tipCurrentIndex={tipCurrentIndex}
					totalPage={totalPage}
					linkToPage={linkToPage}
					getTotalPage={getTotalPage}
				/>
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	Tips: state.getIn([ 'training', 'tips' ]), // 获取类型信息
	Type: state.getIn([ 'training', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'training', 'difficult' ]), //获取试题难度
	trainingExam: state.getIn([ 'training', 'trainingExam' ]), //获取训练试卷信息
	currentPage: state.getIn([ 'training', 'currentPage' ]), //分页器页码
	difCurrentIndex: state.getIn([ 'training', 'difCurrentIndex' ]), //目前点击的是哪个标签
	tipCurrentIndex: state.getIn([ 'training', 'tipCurrentIndex' ]), //目前点击的是哪个标签
	totalPage: state.getIn([ 'training', 'totalPage' ]) //总条数
});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	},
	getList(index, tips, otherTips, currentIndex, currentPage, type) {
		if (type === '类型') {
			dispatch(actionCreators.getList(currentPage, tips.get(index), otherTips.get(currentIndex)));
		} else if (type === '难度') {
			dispatch(actionCreators.getList(currentPage, otherTips.get(currentIndex), tips.get(index)));
		} else {
			dispatch(actionCreators.getList(currentPage, otherTips.get(index), tips.get(index)));
		}
	},
	linkToPage(e) {
		dispatch(actionCreators.linkToPage(e));
	},
	getTotalPage() {
		dispatch(actionCreators.getTotalPage());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
