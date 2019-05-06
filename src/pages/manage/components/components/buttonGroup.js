import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'antd';
import { BtnGroupWrapper } from '../../style';
import * as actionCreators from '../../store';
import {Redirect} from 'react-router-dom';

class ButtonGroup extends PureComponent {
	checkSize(type,rows) {
		if (rows.size === 1) {
            const rowsJS = rows.toJS();
            console.log(rowsJS)
            // type ===  'team' ? 
            // <Redirect to={`/userManage/selfManage?${rowsJS[0].userGroup}`}/>:
            // <Redirect to={`/userManage/selfManage?${rowsJS[0].userGroup}`}/>
		}else {
            Modal.warning({
				title: '警告',
				content: '请选择一条数据！'
			});
        }
	}

	render() {
		const { selectedRowKeys,selectedRows } = this.props;
		return (
			<BtnGroupWrapper>
				<Button type="primary" className="btn" >
					添加用户组
				</Button>
				<Button type="primary" className="btn" onClick={()=>this.checkSize('team',selectedRows)}>
					查看组员
				</Button>
				<Button type="primary" className="btn" onClick={()=>this.checkSize('exam',selectedRows)}>
					绑定试卷
				</Button>
				<Button type="danger" className="btn" onClick={this.start}>
					删除
				</Button>
			</BtnGroupWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	selectedRowKeys: state.getIn([ 'userManage', 'selectedRowKeys' ]),
	selectedRows: state.getIn([ 'userManage', 'selectedRows' ]),
});

const mapDispatchToProps = (dispatch) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);
