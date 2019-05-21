import styled from 'styled-components';

export const TagWrapper = styled.div`
	display: flex;
	min-height: 70px;
`;

export const TagTitle = styled.h5`
	width: 10%;
	color: #808080;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TagTips = styled.ul`
	display: flex;
	margin-left: 3%;
	width: 90%;
	flex-wrap: wrap;
	align-items: center;
	.active {
		background-color: #001529;
		color: #fff;
	}
`;

export const TagTipsLi = styled.li`
	margin: 5px 2%;
	display: flex;
	align-items: center;
	background-color: #fff;
	color: #2c3e50;
	border-radius: 3px;
	width: 84px;
	height: 25px;
	justify-content: center;
`;

export const TagTipsText = styled.p`
	cursor: pointer;
	padding: 0 10px;
`;

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
