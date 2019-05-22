import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import QuestionUI from './component/question';
import { ExamWrapper } from './style';
import { Layout, Button, Modal, notification } from 'antd';
import { actionCreators } from './store';
import Timer from './component/timer';

const { Content } = Layout;

class Exam extends PureComponent {
	componentDidMount() {
		const { getQuestion, match,routerPath } = this.props;
		getQuestion(match.params.exam_id,routerPath.get('2'));
	}

	openNotificationWithIcon = (type) => {
		if(type === 'error'){
			notification[type]({
				message: '报错提示',
				description:
					'抱歉，数据丢失了，请重试...'
			});
		}else{
			notification[type]({
				message: '成功提示',
				description:
					'试卷提交成功！'
			});
		}
	};

	showConfirm() {
		Modal.confirm({
			title: '提示',
			content: '你确定要提交试卷吗？',
			okText: '确认',
			cancelText: '取消',
			onOk: () => {
				const { answer, correctAnswer, getScore, match,routerPath } = this.props;
				console.log('answer:', answer.toJS(), correctAnswer.toJS());
				let score = 0;
				for (let i = 0; i < correctAnswer.size; i++) {
					if (answer.get(i) === correctAnswer.get(i)) {
						score++;
					}
				}
				getScore(score, match.params.exam_id,routerPath.get('2'));
				Modal.success({
					title: '提示',
					content: `你所得的分数是：${score}`,
					okText: '确认',
					onOk: () => {
						const { storeAnswer, match, history,routerPath } = this.props;
						if (storeAnswer) {
							this.openNotificationWithIcon('success')
							history.push({path:`/layout/${routerPath.get('2')}`})
						} else {
							history.push({ path: match.url });
							this.openNotificationWithIcon('error')
						}
					}
				});
			},
			onCancel() {
				console.log('取消');
			}
		});
	}

	render() {
		console.log('examName:', this);
		const { Question } = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<Timer />
				<ExamWrapper>
					{Question.map((item, index) => {
						return <QuestionUI key={index} question={item} quesNum={index} />;
					})}
					<div className="justifyDiv">
						<Button type="primary" onClick={() => this.showConfirm()}>
							交卷
						</Button>
					</div>
				</ExamWrapper>
			</Content>
		);
	}
}

const mapStateToProps = (state) => ({
	Question: state.getIn([ 'exam', 'question' ]),
	answer: state.getIn([ 'exam', 'answer' ]),
	correctAnswer: state.getIn([ 'exam', 'correctAnswer' ]), //正确答案数组
	storeAnswer: state.getIn([ 'exam', 'storeAnswer' ]), //
	routerPath:state.getIn(['common','routerPath'])
});

const mapDispatchToProps = (dispatch) => ({
	getQuestion(exam_id,type) {
		dispatch(actionCreators.getQuestion(exam_id,type));
	},
	getScore(score, exam_id,type) {
		dispatch(actionCreators.getScore(score, exam_id,type));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
