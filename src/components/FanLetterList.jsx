import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FanLetterList({ selectedMember }) {
  const navigate = useNavigate();
  const { memberName } = useParams(); // URL에서 멤버 이름을 받음
  const [fanLetters, setFanLetters] = useState([]);
  const memberToShow = selectedMember || memberName; // prop이 있으면 그걸 사용, 없으면 URL에서 가져옴

  useEffect(() => {
    const storedFanLetters = JSON.parse(localStorage.getItem('fanLetters') || '{}');
    setFanLetters(storedFanLetters[memberToShow] || []);
  }, [memberToShow]);

  const handleLetterClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <h2>{memberToShow}님께 온 팬레터</h2>
      {fanLetters.map((letter) => (
        <div key={letter.id} onClick={() => handleLetterClick(letter.id)}>
          <p>닉네임 : {letter.nickname}</p>
          <p>{new Date(letter.sentTime).toLocaleString()}</p>
          <p>내용 : {letter.content}</p>
        </div>
      ))}
    </div>
  );
}

export default FanLetterList;
