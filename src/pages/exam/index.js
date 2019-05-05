import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import QuestionUI from './component/question';
import { ExamWrapper } from './style';
import { Pagination, Layout, Button, Modal } from 'antd';
import { actionCreators } from './store';
import Timer from './component/timer';
import { Redirect } from 'react-router-dom'; //引入Redirect组件用于js上的页面跳转

const { Content } = Layout;
const confirm = Modal.confirm;

class Exam extends PureComponent {
	componentDidMount() {
		this.props.getQuestion();
	}

	showConfirm() {
		Modal.confirm({
			title: '提示',
			content: '你确定要提交试卷吗？',
			okText: '确认',
			cancelText: '取消',
			onOk() {
				console.log('确定', window.localStorage);
				confirm({
					title: '提示',
					content: '你所得的分数是：',
					okText: '确认',
					cancelText: '取消',
					onOk() {
						return <Redirect to="/training" />;
					},
					onCancel() {
						console.log('取消');
					}
				});
			},
			onCancel() {
				console.log('取消');
			}
		});
	}

	render() {
		console.log('exam,',this)
		const { Question } = this.props;
		return (
			<Content style={{ padding: '0 24px', minHeight: 280 }}>
				<Timer />
				<ExamWrapper>
					{Question.map((item, index) => {
						return <QuestionUI key={index} question={item} />;
					})}
					<div className="justifyDiv">
						<Pagination defaultCurrent={1} total={50} />
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
	Question: state.getIn([ 'exam', 'question' ])
});

const mapDispatchToProps = (dispatch) => ({
	getQuestion() {
		dispatch(actionCreators.getQuestion());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
