import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import memberJhope from '../assets/member-image/member-jhope.jpg';
import memberJimin from '../assets/member-image/member-jimin.jpg';
import memberJin from '../assets/member-image/member-jin.jpg';
import memberJk from '../assets/member-image/member-jk.jpg';
import memberRm from '../assets/member-image/member-rm.jpg';
import memberSuga from '../assets/member-image/member-suga.jpg';
import memberV from '../assets/member-image/member-v.jpg';
import { MemberBtns, MemberBtnStyle, SliderContainer } from '../styles/MemberSliderStyledComponent';

const memberImages = {
  정국: memberJk,
  뷔: memberV,
  지민: memberJimin,
  슈가: memberSuga,
  진: memberJin,
  RM: memberRm,
  제이홉: memberJhope
};
const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

function MemberSlider({ onMemberClick }) {
  const slideSettings = {
    dots: true, // 슬라이더 하단의 점 표시 여부
    infinite: true, // 무한 슬라이딩 여부
    speed: 500, // 슬라이딩 속도
    slidesToShow: 3, // 한 번에 보여질 슬라이드 개수
    slidesToScroll: 1 // 한 번에 스크롤할 슬라이드 개수
  };

  return (
    <SliderContainer>
      <StyledSlider {...slideSettings}>
        {Object.entries(memberImages).map(([member]) => (
          <MemberBtns key={member}>
            <MemberBtnStyle onClick={() => onMemberClick(member)}>
              <img src={memberImages[member]} alt={member} />
              <span>{member}</span>
            </MemberBtnStyle>
          </MemberBtns>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
}

export default MemberSlider;
