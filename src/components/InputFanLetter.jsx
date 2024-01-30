import React, { useState } from 'react';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function InputFanLetter({ addFanLetter }) {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [selectedMember, setselectedMember] = useState(members[0]);

  const handleFanLetterSubmit = (e) => {
    e.preventDefault();
    addFanLetter(nickname, content, selectedMember);
    setNickname('');
    setContent('');
  };

  return (
    <form onSubmit={handleFanLetterSubmit}>
      <div>
        <label>닉네임 : </label>
        <input placeholder="최대 20자까지"></input>
      </div>
      <div>
        <label>내용 : </label>
        <input placeholder="최대 100자까지"></input>
      </div>
      <div>
        <label>보낼 멤버 : </label>
        <select>
          <option value="정국">정국</option>
          <option value="뷔">뷔</option>
          <option value="지민">지민</option>
          <option value="슈가">슈가</option>
          <option value="진">진</option>
          <option value="RM">RM</option>
          <option value="제이홉">제이홉</option>
        </select>
      </div>
      <button>팬레터 보내기</button>
    </form>
  );
}

export default InputFanLetter;
