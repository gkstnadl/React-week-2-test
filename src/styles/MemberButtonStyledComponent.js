import styled from 'styled-components';

export const MemberBtns = styled.div`
    display: flex;
    justify-content: center;
    overflow-x: auto;
    white-space: nowrap;
`

export const MemberBtnStyle = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    font-family: 'Pretendard-Regular';
    font-size: 16px;
    gap: 10px;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }
`