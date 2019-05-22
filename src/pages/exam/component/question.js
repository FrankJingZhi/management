import React, { PureComponent } from 'react';
import { Radio } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ProblemWrapper, ProblemTitle } from '../style';

const RadioGroup = Radio.Group;

class QuestionUI extends PureComponent {
	changeOptions(e,quesNum){
		const {answer,changeOptions} = this.props;
		// console.log(e.target.value,quesNum)
		let newAnswer = answer.toJS();
		newAnswer[quesNum] = e.target.value;
		// console.log('answer:',newAnswer)
		changeOptions(newAnswer)
	}
	render() {
		const { question,quesNum } = this.props;
		const options = question.get('options');
		// console.log('questionUI:',question.toJS())
		const radioStyle = {
			display: 'block',
			height: '30px',
			lineHeight: '30px'
		};
		return (
			<ProblemWrapper>
				<ProblemTitle>{`${quesNum+1}.${question.get('title')}`}</ProblemTitle>
				<RadioGroup className="radioGroup" onChange={(e)=>this.changeOptions(e,quesNum)} >
					{options.map((item,index)=>{
						return (<Radio key={index} style={radioStyle} value={item.get('option')}>
							{`${item.get('option')}.${item.get('content')}`}
						</Radio>)
                    })}
				</RadioGroup>
			</ProblemWrapper>
		);
	}
}
const mapStateToProps = (state) => ({
	answer: state.getIn([ 'exam', 'answer' ]), //用户选择的答案
});

const mapDispatchToProps = (dispatch) => ({
	changeOptions(newAnswer) {
		dispatch(actionCreators.changeOptions(newAnswer));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionUI);
