import styled from 'styled-components';

export const LoginWrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 700px;
	background: url('https://reversi-demo.chaitin.cn/img/background.865b9e87.jpg');
	background-size: 100% 100%;
`;
export const LoginHeader = styled.div`
	width: 100%;
	height: 130px;
	display: flex;
`;

export const LoginHeaderDiv = styled.div`
	width: 50%;
	height: 130px;
	display: flex;
	justify-content: center;
    align-items: center;
	color: #fff;
	.titleIcon {
		font-size: 50px;
	}
	.titleName {
		font-size: 30px;
	}
	.loginHeaderLink {
        font-size: 19px;
        color: #fff;
		text-decoration: none;
        margin: 0 10px;
        &:hover{
            color:#18191b;
        }
	}
`;

export const LoginContent = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
`;
export const LoginContentLeft = styled.div`
	width: 50%;
	height: 100%;
    color: #fff;
    display: flex;
	justify-content: center;
	align-items: center;
	.loginTopic {
		display: flex;
        flex-direction: column;
        margin-left: 180px;
	}
	.loginTopicZh {
		display: inline;
        font-size: 55px;
        margin: 5px 0;
	}
	.loginTopicEn {
		display: inline;
        font-size: 20px;
        margin: 5px 0;        
	}
`;
export const LoginContentRight = styled.div`
	width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .textSize{
        width: 260px;
        margin: 5px 0;
    }
`;
