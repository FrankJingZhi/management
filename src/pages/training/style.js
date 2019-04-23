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
	min-height:400px;
`;

export const ItemWrapperTop = styled.div`
	height: 70%;
`;
export const ItemImg = styled.img`
	width: 100%;
	&::after{
		content:'应急响应随堂测';
	}
`;
export const ItemWrapperMid = styled.div`
	height: 15%;
`;
export const ItemWrapperBtm = styled.div`
	height:15%;
`;