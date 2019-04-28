import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderUI from '../../common/layout/header'; //引入公共布局组件
import FooterUI from '../../common/layout/footer'; //引入公共布局组件
import BreadCrumbUI from '../../common/layout/breadcrumb'; //引入公共布局组件
import QuestionUI from './component/question';
import { ExamWrapper } from './style';
import { Pagination, Layout,Button } from 'antd';
import { actionCreators } from './store';
import Timer from './component/timer'

const { Content } = Layout;

class Exam extends PureComponent {
	componentDidMount() {
		this.props.getQuestion();
	}
	render() {
		const { Question } = this.props;
		return (
			<Layout>
				<HeaderUI />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0px', background: '#fff', margin:'0 113px' }}>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							<Timer />
							<ExamWrapper>
								{Question.map((item,index) => {
									return <QuestionUI key={index} question={item} />;
								})}
								<div className="justifyDiv">
									<Pagination defaultCurrent={1} total={50} />
									<Button type="primary">交卷</Button>
								</div>
							</ExamWrapper>
						</Content>
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
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
