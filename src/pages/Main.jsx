import React, { useState } from 'react';
import MemberSlider from '../components/MemberSlider';
import InputFanLetter from '../components/InputFanLetter';
import FanLetterList from '../components/FanLetterList';
import { members } from '../Redux/modules/members';

function Main() {
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
