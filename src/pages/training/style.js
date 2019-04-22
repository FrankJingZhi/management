import styled from 'styled-components';

export const TagWrapper = styled.div`
	display: flex;
	min-height: 70px;
`;

export const TagTitle = styled.h5`
	width: 10%;
	text-align: center;
	color: #808080;
`;

export const TagTips = styled.ul`
	display: flex;
	margin-left: 3%;
	width: 90%;
	flex-wrap: wrap;
	.TagTipsLi {
		margin: 0 2%;
	}
	.TagTipsText {
		cursor: pointer;
	}
`;
