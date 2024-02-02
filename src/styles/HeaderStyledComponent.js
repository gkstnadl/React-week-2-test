import styled from 'styled-components';

// 헤더 기본 스타일
export const HeaderStyle = styled.div`
    max-width: 1200px;
    max-height: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin:  0 auto;
    padding: 30px;
`;

// 로고 이미지 스타일
export const LogoImgStyle = styled.img`
    width: auto;
    height: 100px;
`;

// 홈 버튼 스타일
export const HomeStyle = styled.button`
    font-size: 18px;
    border: 1px solid #b9badd;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    background-color: #b9badd;
    font-family: 'Pretendard-Regular';
    margin-left: 40%;
`