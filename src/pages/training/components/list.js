import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ItemWrapper, ItemWrapperTop, ItemImg, ItemWrapperMid, ItemWrapperBtm } from '../style';
import img from '../../../statics/item1.jpg'

class List extends PureComponent {
	render() {
		return (
            <ListWrapper>
				<ItemWrapper>
					<ItemWrapperTop>
						<ItemImg imgUrl={img}/>
					</ItemWrapperTop>
					<ItemWrapperMid></ItemWrapperMid>
					<ItemWrapperBtm></ItemWrapperBtm>
				</ItemWrapper>
			</ListWrapper>
        )
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
