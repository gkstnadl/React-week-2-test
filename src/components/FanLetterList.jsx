import React from 'react';

function FanLetterList({ selectedMember, fanLetters }) {
  if (!selectedMember) return null; // 선택된 멤버가 없는 경우(초기화면) 아무것도 표시하지 않음

  return (
    <div>
      <h2>{selectedMember}님께 온 팬레터</h2>
      {fanLetters[selectedMember]?.map((letter) => (
        <div key={letter.id}>
          <p>닉네임 : {letter.nickname}</p>
          <p>내용 : {letter.content}</p>
        </div>
      ))}
    </div>
  );
}

export default FanLetterList;
