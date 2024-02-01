import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function FanLetterList({ selectedMember }) {
  const navigate = useNavigate();
  const { memberName } = useParams(); // URL에서 멤버 이름을 받음
  const [fanLetters, setFanLetters] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const memberToShow = selectedMember || memberName; // prop이 있으면 그걸 사용, 없으면 URL에서 가져옴

  useEffect(() => {
    const storedFanLetters = JSON.parse(localStorage.getItem('fanLetters') || '{}');
    setFanLetters(storedFanLetters[memberToShow] || []);
  }, [memberToShow]);

  /** 클릭하면 id를 기반으로 상세페이지가 열리는 로직 */
  const handleLetterClick = (id) => {
    navigate(`/detail/${id}`);
  };

  const handleLetterEdit = (id) => {
    // 수정 로직
  };

  const handleLetterDelete = (id) => {
    // 삭제 로직
  };

  return (
    <div>
      <h2>{memberToShow}님께 온 팬레터</h2>
      {fanLetters.map((letter) => (
        <div key={letter.id} onClick={() => handleLetterClick(letter.id)}>
          <p>닉네임 : {letter.nickname}</p>
          <p>{new Date(letter.sentTime).toLocaleString()}</p>
          <p>내용 : {letter.content}</p>
          <button onClick={() => handleLetterEdit(letter.id)}>수정</button>
          <button onClick={() => handleLetterDelete(letter.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default FanLetterList;
