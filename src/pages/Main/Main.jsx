import React, { useState } from 'react';
import MemberButton from '../../components/MemberButton';
import InputFanLetter from '../../components/InputFanLetter';
import useFanLetters from '../../components/useFanLetters';
import FanLetterList from '../../components/FanLetterList';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function Main() {
  const [fanLetters, addFanLetter] = useFanLetters();
  const [selectedMember, setSelectedMember] = useState(null); /**현재 선택된 멤버 상태 관리*/

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div>
      <h1>BTS 팬레터함</h1>
      <div>
        {members.map((member) => (
          <MemberButton key={member} member={member} onClick={() => handleMemberClick(member)} />
        ))}
      </div>
      <InputFanLetter addFanLetter={addFanLetter} />
      <FanLetterList selectedMember={selectedMember} fanLetters={fanLetters} />
    </div>
  );
}

export default Main;
