import React, { useState } from 'react';
import {
  FormStyle,
  NameStyle,
  ContentStyle,
  InputGroupStyle,
  LabelGroupStyle,
  MemberSelectStyle,
  SendMemberSelectStyle,
  SubmitBtnStyle,
  ButtonContainer
} from '../styles/InputFanLetterStyledComponent';

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
    <FormStyle onSubmit={handleFanLetterSubmit}>
      <InputGroupStyle>
        <LabelGroupStyle>닉네임</LabelGroupStyle>
        <NameStyle
          placeholder="최대 20자까지"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
        />
      </InputGroupStyle>
      <InputGroupStyle>
        <LabelGroupStyle>내용</LabelGroupStyle>
        <ContentStyle
          placeholder="최대 100자까지"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={100}
        />
      </InputGroupStyle>
      <SendMemberSelectStyle>
        <label>보낼 멤버</label>
        <MemberSelectStyle value={selectedMember} onChange={(e) => setSelectedMember(e.target.value)}>
          {members.map((member) => (
            <option key={member} value={member}>
              {member}
            </option>
          ))}
        </MemberSelectStyle>
      </SendMemberSelectStyle>
      <ButtonContainer>
        <SubmitBtnStyle type="submit">팬레터 보내기</SubmitBtnStyle>
      </ButtonContainer>
    </FormStyle>
  );
}

export default InputFanLetter;
