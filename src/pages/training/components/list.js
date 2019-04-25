import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ItemWrapper, ItemWrapperTop, ItemImg, ItemWrapperMid,ItemInfo,ItemTitle } from '../style';
import imgSrc from '../../../statics/item1.jpg';

class List extends PureComponent {
	render() {
		const { exam } = this.props;
		return (
			<ListWrapper>
				{exam.map((item) => {
					return (
						<ItemWrapper key={item.get('id')}>
							<ItemWrapperTop>
								<ItemImg src={imgSrc} />
								<ItemTitle>{item.get('name')}</ItemTitle>
							</ItemWrapperTop>
							<ItemWrapperMid>
								<ItemInfo>HTML</ItemInfo>
								<ItemInfo>简单</ItemInfo>
							</ItemWrapperMid>
						</ItemWrapper>
					);
				})}
			</ListWrapper>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(List);
