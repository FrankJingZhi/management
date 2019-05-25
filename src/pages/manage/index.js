import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom'; //react路由
import SiderContentUI from '../../common/layout/components/siderContentUI'; //引入公共侧边栏布局组件
import UserManage from './components/userManage/userManage'; //用户组管理组件
import SelfManage from './components/userManage/selfManage'; //用户管理组件
import ExamBind from './components/examManage/examBind'; //试卷绑定组件
import ExamManage from './components/examManage/examManage'; //试卷管理组件
import EditExam from './components/examManage/editExam'; //编辑试卷管理组件
import QuestionManage from './components/questionManage/questionManage'; //题目管理组件
import EditQues from './components/questionManage/editQues'; //编辑题目管理组件


const { Content } = Layout;

class Manage extends PureComponent {
	render() {
		// console.log('manage:',this)
		const { match } = this.props;
		return (
			<Layout style={{ padding: '24px 0', background: '#fff' }}>
				<SiderContentUI />
				<Content style={{ padding: '0 24px', minHeight: 280 }}>
					{/* 渲染用户、试卷、题目子路由 */}
					<Switch>
						<Route path={`${match.url}/userManage`} exact component={UserManage} />
						<Route path={`${match.url}/userManage/selfManage`} exact component={SelfManage} />
						<Route path={`${match.url}/userManage/examBind`} exact component={ExamBind} />
						<Route path={`${match.url}/examManage`} exact component={ExamManage} />
						<Route path={`${match.url}/examManage/editExam`} exact component={EditExam} />
						<Route path={`${match.url}/questionManage`} exact component={QuestionManage} />
						<Route path={`${match.url}/questionManage/editQues`} exact component={EditQues} />
					</Switch>
				</Content>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	deleteInfo: state.getIn(['manage','deleteInfo']),	//删除
})

const mapDispatchToProps = (dispatch) => ({
	
})

export default connect(mapStateToProps,mapDispatchToProps)(Manage);