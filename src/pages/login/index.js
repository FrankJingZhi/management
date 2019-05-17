import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LoginHeader, LoginHeaderDiv, LoginWrapper, LoginContent, LoginContentLeft, LoginContentRight } from './style';
import { Icon } from 'antd'; //antd按需加载需要的组件
import { Redirect } from 'react-router-dom'; //引入Redirect组件用于js上的页面跳转
import LoginForm from './component/loginForm'; //登陆表单组件

class Login extends PureComponent {
	render() {
		const { headerList, status } = this.props;
		if(status) return <Redirect to="/layout/training"/>;
		return (
			<LoginWrapper>
				{/* 登录页面头部--开始 */}
				<LoginHeader>
					<LoginHeaderDiv>
						<Icon type="form" className="titleIcon" />
						<p className="titleName">课业U管理</p>
					</LoginHeaderDiv>
					<LoginHeaderDiv>
						{headerList.map((item) => {
							return (
								<a key={item.get('id')} href={item.get('url')} className="loginHeaderLink">
									{item.get('name')}
								</a>
							);
						})}
					</LoginHeaderDiv>
				</LoginHeader>
				{/* 登陆页面头部--结束 */}
				{/* 登录页面主体--开始 */}
				<LoginContent>
					<LoginContentLeft>
						<li className="loginTopic">
							<p className="loginTopicZh">优科技</p>
							<p className="loginTopicZh">课业U管理平台</p>
							<p className="loginTopicEn">Welcome To Course Management Platform</p>
						</li>
					</LoginContentLeft>
					<LoginContentRight>
						<LoginForm />
					</LoginContentRight>
				</LoginContent>
				{/* 登录页面主体--结束 */}
			</LoginWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	headerList: state.getIn([ 'login', 'headerList' ]), //将登录页头部数据传给props
	userName: state.getIn([ 'login', 'userInfo', 'name' ]), //将state里的userInfo传给props
	status: state.getIn([ 'login', 'userInfo', 'status' ]) //将state里的status传给props
});

export default withRouter(connect(mapStateToProps, null)(Login));
