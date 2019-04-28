import styled from 'styled-components';

// 考试页面
export const ExamWrapper = styled.div`
	width: 100%;
	height: 100%;
	.justifyDiv {
		display: flex;
		justify-content: space-between;
	}
`;

// 试题组件
export const ProblemWrapper = styled.div`
	width: 100%;
	height: 100%;
	.radioGroup {
		margin: 16px;
	}
`;
export const ProblemTitle = styled.h4`
	color: #2c3e50;
	font-weight: 600;
`;
