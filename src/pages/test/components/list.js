import React, { PureComponent } from 'react';
import { ListWrapper, ItemWrapper, ItemWrapperTop, ItemImg, ItemWrapperMid, ItemInfo, ItemTitle } from '../style';
import imgSrc from '../../../statics/item1.jpg';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { exam, pathname } = this.props;
		return (
			<ListWrapper>
				{exam.map((item) => {
					return (
						<ItemWrapper key={item.get('id')}>
							<Link to={`${pathname}/exam/${item.get('name')}`}>
								<ItemWrapperTop>
									<ItemImg src={imgSrc} />
									<ItemTitle>{item.get('name')}</ItemTitle>
								</ItemWrapperTop>
								<ItemWrapperMid>
									<ItemInfo>{item.get('type')}</ItemInfo>
									<ItemInfo>{item.get('difficullty')}</ItemInfo>
								</ItemWrapperMid>
							</Link>
						</ItemWrapper>
					);
				})}
			</ListWrapper>
		);
	}
}
export default List;
