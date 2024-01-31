import React, { useState } from 'react';
import Detail from './Detail';

function FanLetterList({ selectedMember, fanLetters }) {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedLetter(null);
  };

  return (
    <div>
      <h2>{selectedMember}님께 온 팬레터</h2>
      {fanLetters[selectedMember]?.map((letter) => (
        <div key={letter.id} onClick={() => handleCloseDetail(letter)}>
          <p>닉네임 : {letter.nickname}</p>
          <p>내용 : {letter.content}</p>
        </div>
      ))}
      {showDetail && <Detail letter={selectedLetter} onClose={handleCloseDetail} />}
    </div>
  );
}

export default FanLetterList;
