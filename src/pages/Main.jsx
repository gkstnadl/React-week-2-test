import React from 'react';
import MemberButton from '../components/MemberButton';
import InputFanLetter from '../components/InputFanLetter';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function main() {
  return (
    <div>
      <h1>BTS 팬레터함</h1>
      <div>
        {members.map((member) => (
          <MemberButton key={member} member={member} />
        ))}
      </div>
      <InputFanLetter addFanLetter={addFanLetter} />
    </div>
  );
}

export default main;
