import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import {PaginationWrapper} from '../style';

class PaginationUI extends PureComponent {
	render() {
		return (
			<PaginationWrapper>
				<Pagination defaultCurrent={1} total={50} />
			</PaginationWrapper>
		)
	}
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationUI);
