import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TagWrapper, TagTitle, TagTips, TagTipsLi, TagTipsText } from '../style';
import { actionCreators } from '../store'; //从store文件夹引入actionCreators模块

class Tags extends PureComponent {
	componentDidMount() {
		const { tips, otherTips, tipCurrentIndex, difCurrentIndex, getList, currentPage,type } = this.props;
		getList(tipCurrentIndex, tips, otherTips, difCurrentIndex, currentPage,type);
	}

	handleTipClick(index, tips, otherTips, difCurrentIndex, currentPage){
		const {handleTipClick,getList,type} = this.props;
		handleTipClick(index);
		getList(index,tips, otherTips, difCurrentIndex, currentPage,type)
	}
	handleDifClick(index, tips, otherTips, difCurrentIndex, currentPage){
		const {handleDifClick,getList,type} = this.props;
		handleDifClick(index);
		getList(index,tips, otherTips, difCurrentIndex, currentPage,type)
	}

	render() {
		const {
			tips,
			otherTips,
			tipCurrentIndex,
			type,
			difCurrentIndex,
			currentPage
		} = this.props;
		return (
			<TagWrapper>
				<TagTitle>{type}</TagTitle>
				<TagTips>
					{tips.map((item, index) => {
						if (type === '类型') {
							return (
								<TagTipsLi key={index} className={`${index === tipCurrentIndex ? 'active' : null}`}>
									<TagTipsText
										onClick={() =>
											this.handleTipClick(index, tips, otherTips, difCurrentIndex, currentPage,type)}
									>
										{item}
									</TagTipsText>
								</TagTipsLi>
							);
						} else {
							return (
								<TagTipsLi key={index} className={`${index === difCurrentIndex ? 'active' : null}`}>
									<TagTipsText
										onClick={() =>
											this.handleDifClick(index, tips, otherTips, tipCurrentIndex, currentPage,type)}
									>
										{item}
									</TagTipsText>
								</TagTipsLi>
							);
						}
					})}
				</TagTips>
			</TagWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	difCurrentIndex: state.getIn([ 'training', 'difCurrentIndex' ]), //目前点击的是哪个标签
	tipCurrentIndex: state.getIn([ 'training', 'tipCurrentIndex' ]), //目前点击的是哪个标签
	currentPage: state.getIn([ 'training', 'currentPage' ]) //分页器页码
});

const mapDispatchToProps = (dispatch) => ({
	// 派发
	handleTipClick(index) {
		dispatch(actionCreators.handleTipClick(index));
	},
	handleDifClick(index) {
		dispatch(actionCreators.changeDif(index));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
