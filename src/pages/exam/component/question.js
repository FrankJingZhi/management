import React, { PureComponent } from 'react';
import { Radio } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { ProblemWrapper, ProblemTitle } from '../style';

const RadioGroup = Radio.Group;

class QuestionUI extends PureComponent {
	render() {
        const { question, Answer, changeOptions } = this.props;
        const options = question.get('options');
		const radioStyle = {
			display: 'block',
			height: '30px',
			lineHeight: '30px'
		};
		return (
			<ProblemWrapper>
				<ProblemTitle>{question.get('title')}</ProblemTitle>
				<RadioGroup className="radioGroup" onChange={(e)=>changeOptions(e)} value={Answer}>
					{options.map((item,index)=>{
                        return <Radio key={index} style={radioStyle} value={index}>{item}</Radio>
                    })}
				</RadioGroup>
			</ProblemWrapper>
		);
	}
}
const mapStateToProps = (state) => ({
	Answer: state.getIn([ 'exam', 'answer' ]) //用户选择的答案
});

const mapDispatchToProps = (dispatch) => ({
	changeOptions(e) {
		// console.log(e.target.value)
		dispatch(actionCreators.changeOptions(e.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionUI);
