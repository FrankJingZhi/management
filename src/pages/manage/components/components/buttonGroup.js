import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { BtnGroupWrapper } from '../../style';
import { actionCreators } from '../../store';

class ButtonGroup extends PureComponent {
	componentDidMount() {
		const { RouterPath, changeAddBtnName, showBtnGroup } = this.props;
		changeAddBtnName(RouterPath);
	}

	//查看组员or编辑试卷--通过判断是否选中一条数据来做不同的操作
	checkMembers(type, rows) {
		const {deleteClick} = this.props;
		if (rows.size === 1) {
			const rowsJS = rows.toJS();
			// 路由跳转
			if (type === 'editExam') {
				window.sessionStorage.setItem('examName', rowsJS[0].examName);
				this.props.history.push({
					pathname: `/layout/manage/examManage/editExam`
				});
			} else if (type === 'checkMembers') {
				window.sessionStorage.setItem('name', rowsJS[0].name);
				this.props.history.push({
					pathname: `/layout/manage/userManage/selfManage`
				});
			}else if(type === 'bind'){
				// window.sessionStorage.setItem('exam', rowsJS[0].name);
			}else if(type === 'delete'){
				deleteClick(rowsJS[0].usergroup);
			}
		} else {
			Modal.warning({
				title: '警告',
				content: '请选择一条数据！'
			});
		}
	}

	//绑定试卷
	bindExam(type, rows) {
		if (rows.size >= 1) {
			const rowsJS = rows.toJS();
			// console.log('bindExam:',rowsJS);
			// 路由跳转
			// 后续操作需要补充
			if (type === 'group') {
			} else if (type === 'self') {
			}
			this.props.history.push({
				pathname: `/layout/manage/userManage/examBind`
			});
		} else {
			Modal.warning({
				title: '警告',
				content: '请至少选择一条数据！'
			});
		}
	}

	render() {
		console.log('btnGroup:', this);
		const { SelectedRowKeys, SelectedRows, showAddHandleClick, AddBtnName, RouterPath } = this.props;
		return (
			<BtnGroupWrapper>
				{/* userManage路由下 */}
				{RouterPath.includes('userManage') &&
				!RouterPath.includes('selfManage') &&
				!RouterPath.includes('examBind') ? (
					<Fragment>
						<Button type="primary" className="btn" onClick={() => showAddHandleClick()}>
							{AddBtnName}
						</Button>
						<Button
							type="primary"
							className="btn"
							onClick={() => this.checkMembers('checkMembers', SelectedRows)}
						>
							查看组员
						</Button>
						<Button type="primary" className="btn" onClick={() => this.bindExam('group', SelectedRows)}>
							绑定试卷
						</Button>
					</Fragment>
				) : (
					''
				)}
				{/* selfManage路由下 */}
				{RouterPath.includes('selfManage') ? (
					<Fragment>
						<Button type="primary" className="btn" onClick={() => showAddHandleClick()}>
							{AddBtnName}
						</Button>
						<Button type="primary" className="btn">
							编辑
						</Button>
						<Button type="primary" className="btn">
							统计信息
						</Button>
						<Button type="primary" className="btn" onClick={() => this.bindExam('self', SelectedRows)}>
							绑定试卷
						</Button>
					</Fragment>
				) : (
					''
				)}
				{/* examBind路由下 */}
				{RouterPath.includes('examBind') ? (
					<Fragment>
						<Button type="primary" className="btn" onClick={() => this.checkMembers('bind',SelectedRows)}>
							{AddBtnName}
						</Button>
						<Button type="primary" className="btn">
							修改
						</Button>
					</Fragment>
				) : (
					''
				)}
				{/* examManage路由下 */}
				{RouterPath.includes('examManage') && !RouterPath.includes('editExam') ? (
					<Fragment>
						<Button type="primary" className="btn" onClick={() => showAddHandleClick()}>
							{AddBtnName}
						</Button>
						<Button
							type="primary"
							className="btn"
							onClick={() => this.checkMembers('editExam', SelectedRows)}
						>
							编辑试卷
						</Button>
					</Fragment>
				) : (
					''
				)}
				{/* questionManage路由下 */}
				{RouterPath.includes('questionManage') ? (
					<Fragment>
						<Button type="primary" className="btn" onClick={() => showAddHandleClick()}>
							{AddBtnName}
						</Button>
						<Button type="primary" className="btn">
							编辑
						</Button>
					</Fragment>
				) : (
					''
				)}
				<Button type="danger" className="btn" onClick={()=> this.checkMembers('delete',SelectedRows)}>
					删除
				</Button>
			</BtnGroupWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	SelectedRowKeys: state.getIn([ 'manage', 'selectedRowKeys' ]),
	SelectedRows: state.getIn([ 'manage', 'selectedRows' ]),
	RouterPath: state.getIn([ 'common', 'routerPath' ]),
	AddBtnName: state.getIn([ 'manage', 'addBtnName' ])
});

const mapDispatchToProps = (dispatch) => ({
	showAddHandleClick() {
		dispatch(actionCreators.showAddHandleClick());
	},
	changeAddBtnName(RouterPath) {
		dispatch(actionCreators.changeAddBtnName(RouterPath));
	},
	deleteClick(usergroup){
		dispatch(actionCreators.deleteClick(usergroup));
	}
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonGroup));
