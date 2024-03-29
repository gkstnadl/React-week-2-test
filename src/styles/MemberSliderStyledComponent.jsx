import styled from 'styled-components';

export const SliderContainer = styled.div`
  max-width: 600px;
  height: auto;
  margin: auto;
`;

export const MemberBtns = styled.div`
  /* max-width: 1200px;
    display: flex;
    justify-content: center; */
`;

export const MemberBtnStyle = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin: 20px 0;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
