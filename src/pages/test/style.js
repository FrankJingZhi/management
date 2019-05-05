import styled from 'styled-components';

export const ListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
export const ItemWrapper = styled.div`
	width: 18%;
	height: auto;
	box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
	padding: 3px;
	margin: 1%;
	&:hover {
		box-shadow: 0 4px 5px 4px #b9b7b7;
		transition: all .5s;
	}
`;

export const ItemWrapperTop = styled.div`
	width: 100%;
	height: 180px;
	position: relative;
`;
export const ItemTitle = styled.span`
	height: 3%;
	background: rgba(0, 0, 0, .3);
	color: #fff;
	width: 100%;
	height: 40px;
	position: absolute;
	top: 140px;
	left: 0;
	font-weight: 600;
	text-align: center;
	line-height: 40px;
`;
export const ItemImg = styled.img`
	width: 100%;
	height: 180px;
`;
export const ItemWrapperMid = styled.div`
	height: 63px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
export const ItemInfo = styled.p`
	width: 72px;
	height: 30px;
	background: #1e90ff;
	color: #fff;
	line-height: 30px;
	text-align: center;
	border-radius: 18px;
	font-size: 13px;
`;
export const PaginationWrapper = styled.div`
	width: 100%;
	text-align: center;
    margin: 10px 0;
`