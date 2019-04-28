import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ListWrapper, ItemWrapper, ItemWrapperTop, ItemImg, ItemWrapperMid, ItemInfo, ItemTitle } from '../style';
import imgSrc from '../../../statics/item1.jpg';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { exam } = this.props;
		return (
			<ListWrapper>
				{exam.map((item) => {
					return (
						<ItemWrapper key={item.get('id')}>
							<Link to={`/exam/${item.get('name')}`}>
								<ItemWrapperTop>
									<ItemImg src={imgSrc} />
									<ItemTitle>{item.get('name')}</ItemTitle>
								</ItemWrapperTop>
								<ItemWrapperMid>
									<ItemInfo>HTML</ItemInfo>
									<ItemInfo>简单</ItemInfo>
								</ItemWrapperMid>
							</Link>
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
