import React, { useContext, useState } from 'react';
import MemberSlider from '../components/MemberSlider';
import InputFanLetter from '../components/InputFanLetter';
import FanLetterList from '../components/FanLetterList';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function Main() {
  // const { fanLetters, addFanLetter } = useContext(FanLetterContext);
  const [selectedMember, setSelectedMember] = useState(null); /**현재 선택된 멤버 상태 관리*/

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <>
      <MemberSlider members={members} onMemberClick={handleMemberClick} />
      <InputFanLetter />
      <FanLetterList selectedMember={selectedMember} />
    </>
  );
}

export default Main;
