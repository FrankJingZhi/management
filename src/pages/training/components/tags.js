import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TagWrapper, TagTitle, TagTips } from '../style';
import { actionCreators } from '../store'; //从store文件夹引入actionCreators模块


class Tags extends PureComponent {
	render() {
		const { tips } = this.props;
		return (
			<TagWrapper>
				<TagTitle>类型</TagTitle>
				<TagTips>
					{tips.map((item,index) => {
						return (
							<li className="TagTipsLi" key={item.get('id')}>
                                <p className="TagTipsText" 
                                // onClick={handleTipClick(index)}
                                >{item.get('name')}</p>
							</li>
						);
					})}
				</TagTips>
			</TagWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    // 派发
    // handleTipClick(index){
    //     // dispatch(actionCreators.handleTipClick(index))
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);