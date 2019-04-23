import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import HeaderUI from '../../common/layout/header'; //引入公共布局组件
import FooterUI from '../../common/layout/footer'; //引入公共布局组件
import BreadCrumbUI from '../../common/layout/breadcrumb'; //引入公共布局组件
import { actionCreators } from './store'; //从store文件夹引入actionCreators模块
import Tags from './components/tags';
import List from './components/list';

const { Content } = Layout;

class Training extends PureComponent {
	componentDidMount() {
		this.props.getTips();
	}
	render() {
		const { Tips, Type, Difficult } = this.props;
		return (
			<Layout>
				<HeaderUI />
				<Content style={{ padding: '0 50px' }}>
					<BreadCrumbUI />
					<Layout style={{ padding: '24px 0', background: '#fff' }}>
						<Content style={{ padding: '0 24px', minHeight: 280 }}>
							<Tags tips={Tips} type={Type.get('0')} />
							<Tags tips={Difficult} type={Type.get('1')} />
							<List />
						</Content>
					</Layout>
				</Content>
				<FooterUI />
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	Tips: state.getIn([ 'training', 'tips' ]), // 获取类型信息
	Type: state.getIn([ 'training', 'type' ]), //获取标签类型
	Difficult: state.getIn([ 'training', 'difficult' ])	//获取试题难度
});

const mapDispatchToProps = (dispatch) => ({
	getTips() {
		dispatch(actionCreators.getTips());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
