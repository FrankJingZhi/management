import React, { PureComponent,Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { BtnGroupWrapper } from '../../style';
import { actionCreators } from '../../store';

class ButtonGroup extends PureComponent {
	componentDidMount(){
		const {RouterPath,changeAddBtnName,showBtnGroup} = this.props;
		changeAddBtnName(RouterPath);
	}

	//通过判断是否选中一条数据来做不同的操作
	checkSize(type, rows) {
		if (rows.size === 1) {
			const rowsJS = rows.toJS();
			console.log(rowsJS);
			// 路由跳转
			this.props.history.push({
				pathname:'/layout/manage/userManage/selfManage',
				query:{
					userGroup:rowsJS[0].userGroup
				}
			})
		} else {
			Modal.warning({
				title: '警告',
				content: '请选择一条数据！'
			});
		}
	}

	render() {
		console.log('btnGroup:',this)
		const { SelectedRowKeys, SelectedRows, showAddHandleClick,AddBtnName, RouterPath } = this.props;
		return (
			<BtnGroupWrapper>
				<Button type="primary" className="btn" onClick={() => showAddHandleClick()}>
					{AddBtnName}
				</Button>
				{/* userManage路由下 */}
				{
					RouterPath.includes('userManage') && !RouterPath.includes('selfManage') 
					? (
					<Fragment>
						<Button type="primary" className="btn" onClick={() => this.checkSize('team', SelectedRows)}>查看组员</Button>
						<Button type="primary" className="btn" onClick={() => this.checkSize('exam', SelectedRows)}>绑定试卷</Button>
					</Fragment>
					) 
					: ''
				}
				{/* selfManage路由下 */}
				{
					RouterPath.includes('selfManage') 
					?(
						<Fragment>
							<Button type="primary" className="btn">编辑</Button>
							<Button type="primary" className="btn">统计信息</Button>
						</Fragment>
					)
					: ''
				}
				{/* examManage路由下 */}
				{
					RouterPath.includes('examManage')
					? <Button type="primary" className="btn">编辑试卷</Button>
					: ''
				}
				{/* questionManage路由下 */}
				{
					RouterPath.includes('questionManage')
					? <Button type="primary" className="btn">编辑</Button>
					: ''
				}
				<Button type="danger" className="btn">
					删除
				</Button>
			</BtnGroupWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	SelectedRowKeys: state.getIn([ 'manage', 'selectedRowKeys' ]),
	SelectedRows: state.getIn([ 'manage', 'selectedRows' ]),
	RouterPath: state.getIn(['common','routerPath']),
	AddBtnName: state.getIn(['manage','addBtnName'])
});

const mapDispatchToProps = (dispatch) => ({
	showAddHandleClick() {
		dispatch(actionCreators.showAddHandleClick());
	},
	changeAddBtnName(RouterPath){
		dispatch(actionCreators.changeAddBtnName(RouterPath));
	},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonGroup));
