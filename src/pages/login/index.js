import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginHeader, LoginHeaderDiv, LoginWrapper, LoginContent, LoginContentLeft, LoginContentRight } from './style';
import { Button, Icon, Input } from 'antd'; //antd按需加载需要的组件
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import { Redirect } from 'react-router'; //引入Redirect组件用于js上的页面跳转

class Login extends PureComponent {
	render() {
		const { headerList, loginClick, changeTextValue, userName, password, status } = this.props;
		if(status) return <Redirect to="/training"/>;
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
						<Input
							className="textSize"
							type="info"
							placeholder="用户名"
							size="large"
							allowClear
							onChange={(e) => changeTextValue('userName', e)}
						/>
						<Input.Password
							className="textSize"
							type="info"
							placeholder="密码"
							size="large"
							onChange={(e) => changeTextValue('password', e)}
						/>
						<Button
							className="textSize"
							type="primary"
							size="large"
							block
							onClick={() => loginClick(userName, password)}
						>
							登录
						</Button>
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
	password: state.getIn([ 'login', 'userInfo', 'password' ]), //将state里的password传给props
	status: state.getIn([ 'login', 'userInfo', 'status' ]), //将state里的status传给props
});

const mapDispatchToProps = (dispatch) => ({
	// 监听用户名和密码
	changeTextValue(type, e) {
		dispatch(actionCreators.changeTextValue(type, e.target.value));
	},
	// 登录按钮点击回调
	loginClick(userName, password) {
		dispatch(actionCreators.loginClick(userName, password));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
