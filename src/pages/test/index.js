import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import PaginationUI from '../../common/layout/components/pagination';
import List from './components/list';

const { Content } = Layout;

class Test extends PureComponent {
	componentDidMount() {
		const { Tips, Difficult, currentPage, difCurrentIndex, tipCurrentIndex, getList, getTips } = this.props;
		getTips();
		getList(difCurrentIndex, Tips, Difficult, tipCurrentIndex, currentPage, null);
	}
	render() {
		// console.log('test,', this);
		const {
			Tips,
			Type,
			Difficult,
			location,
			Exam,
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
				<List exam={Exam} pathname={location.pathname} />
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
	Tips: state.getIn([ 'test', 'tips' ]), //获取类型信息
	Type: state.getIn([ 'test', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'test', 'difficult' ]), //获取试题难度
	currentPage: state.getIn([ 'test', 'currentPage' ]), //分页器页码
	difCurrentIndex: state.getIn([ 'test', 'difCurrentIndex' ]), //目前点击的是哪个标签
	tipCurrentIndex: state.getIn([ 'test', 'tipCurrentIndex' ]), //目前点击的是哪个标签
	Exam: state.getIn([ 'test', 'testExam' ]), //获取训练试卷信息
	totalPage: state.getIn([ 'training', 'totalPage' ]) //总条数

});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	},
	getList(index, tips, otherTips, currentIndex, currentPage, type) {
		console.log('getList:', index, tips, otherTips, currentIndex, currentPage, type);
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

export default connect(mapStateToProps, mapDispatchToProps)(Test);
