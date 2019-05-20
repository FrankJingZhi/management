import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import {PaginationWrapper} from '../style';
import { actionCreators } from '../store';

class PaginationUI extends PureComponent {

	linkToPage(e){
		const {linkToPage,Tips,Difficult,currentPage,difCurrentIndex,tipCurrentIndex,getTrainingList} = this.props;
		linkToPage(e);
		getTrainingList(difCurrentIndex,Tips,Difficult,tipCurrentIndex,e,null);
	}

	render() {
		const {currentPage} = this.props;
		return (
			<PaginationWrapper>
				<Pagination onChange={(e)=>this.linkToPage(e)} current={currentPage} total={50} />
			</PaginationWrapper>
		)
	}
}
const mapStateToProps = (state) => ({
	currentPage: state.getIn(['training','currentPage']),	//分页器页码
	Tips: state.getIn([ 'training', 'tips' ]), // 获取类型信息
	Difficult: state.getIn([ 'training', 'difficult' ]), //获取试题难度
	difCurrentIndex: state.getIn([ 'training', 'difCurrentIndex' ]), //目前点击的是哪个标签
	tipCurrentIndex: state.getIn([ 'training', 'tipCurrentIndex' ]), //目前点击的是哪个标签
});

const mapDispatchToProps = (dispatch) => ({
	linkToPage(e){
		dispatch(actionCreators.linkToPage(e))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationUI);
