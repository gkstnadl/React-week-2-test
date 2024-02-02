import React from 'react';
import memberJhope from '../assets/member-image/member-jhope.jpg';
import memberJimin from '../assets/member-image/member-jimin.jpg';
import memberJin from '../assets/member-image/member-jin.jpg';
import memberJk from '../assets/member-image/member-jk.jpg';
import memberRm from '../assets/member-image/member-rm.jpg';
import memberSuga from '../assets/member-image/member-suga.jpg';
import memberV from '../assets/member-image/member-v.jpg';
import { MemberBtns, MemberBtnStyle } from '../styles/MemberButtonStyledComponent';

const memberImages = {
  정국: memberJk,
  제이홉: memberJhope,
  지민: memberJimin,
  진: memberJin,
  RM: memberRm,
  슈가: memberSuga,
  뷔: memberV
};

function MemberButton({ member, onClick }) {
  const imageSrc = memberImages[member];

  return (
    <MemberBtns>
      <MemberBtnStyle onClick={onClick}>
        <img src={imageSrc} alt={member} />
        {member}
      </MemberBtnStyle>
    </MemberBtns>
  );
}

export default MemberButton;
