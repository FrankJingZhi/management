import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TagWrapper, TagTitle, TagTips, TagTipsLi, TagTipsText } from '../style';
import { actionCreators } from '../store'; //从store文件夹引入actionCreators模块

class Tags extends PureComponent {
	render() {
		const { tips, handleTipClick, tipCurrentIndex, type, handleDifClick, difCurrentIndex } = this.props;
		return (
			<TagWrapper>
				<TagTitle>{type}</TagTitle>
				<TagTips>
					{tips.map((item, index) => {
						if (type === '类型') {
							return (
								<TagTipsLi
									key={index}
									className={`${index === tipCurrentIndex ? 'active' : null}`}
								>
									<TagTipsText onClick={() => handleTipClick(index)}>{item}</TagTipsText>
								</TagTipsLi>
							);
						} else {
							return (
								<TagTipsLi
									key={item.get('id')}
									className={`${index === difCurrentIndex ? 'active' : null}`}
								>
									<TagTipsText onClick={() => handleDifClick(index)}>{item.get('name')}</TagTipsText>
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
	tipCurrentIndex: state.getIn([ 'training', 'tipCurrentIndex' ]) //目前点击的是哪个标签
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
