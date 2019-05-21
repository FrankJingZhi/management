import React, { PureComponent } from 'react';
import {withRouter} from 'react-router-dom';
import { Pagination } from 'antd';

class PaginationUI extends PureComponent {

	componentDidMount(){
		this.props.getTotalPage();
	}

	linkToPage(e){
		const {linkToPage,Tips,Difficult,difCurrentIndex,tipCurrentIndex,getList} = this.props;
		linkToPage(e);
		getList(difCurrentIndex,Tips,Difficult,tipCurrentIndex,e,null);
	}

	render() {
		const {currentPage,totalPage} = this.props;
		return (
			<div className="PaginationWrapper">
				<Pagination onChange={(e)=>this.linkToPage(e)} current={currentPage} total={totalPage} />
			</div>
		)
	}
}
export default withRouter(PaginationUI)