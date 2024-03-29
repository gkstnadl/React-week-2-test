import React, { useState } from 'react';
import MemberSlider from '../../components/MemberSlider';
import InputFanLetter from '../../components/InputFanLetter';
import useFanLetters from '../../components/useFanLetters';
import FanLetterList from '../../components/FanLetterList';
import '../../styles/reset.css';
import { MainStyle } from './MainStyledComponent';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function Main() {
  const [fanLetters, addFanLetter] = useFanLetters();
  const [selectedMember, setSelectedMember] = useState(null); /**현재 선택된 멤버 상태 관리*/

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <MainStyle>
      <MemberSlider members={members} onMemberClick={handleMemberClick} />
      <InputFanLetter addFanLetter={addFanLetter} />
      <FanLetterList selectedMember={selectedMember} fanLetters={fanLetters} />
    </MainStyle>
  );
}

export default Main;
