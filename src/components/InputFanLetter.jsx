import React, { useState } from 'react';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function InputFanLetter({ addFanLetter }) {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [selectedMember, setSelectedMember] = useState(members[0]);

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
        <input
          placeholder="최대 20자까지"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
        ></input>
      </div>
      <div>
        <label>내용 : </label>
        <input
          placeholder="최대 100자까지"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={100}
        ></input>
      </div>
      <div>
        <label>보낼 멤버 : </label>
        <select value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)}>
          {members.map((member) => (
            <option key={member} value={member}>
              {member}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">팬레터 보내기</button>
    </form>
  );
}

export default InputFanLetter;
