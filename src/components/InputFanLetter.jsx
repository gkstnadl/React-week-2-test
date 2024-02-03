import React, { useContext, useState, useEffect, useRef } from 'react';
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
import ValidationModal from './ValidationModal';

const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

function InputFanLetter({ addFanLetter }) {
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  /** 팬레터 보내기 버튼을 눌렀을 때 동작될 로직들 */
  const handleFanLetterSubmit = (e) => {
    e.preventDefault();
    // 유효성검사
    if (!nickname.trim()) {
      setModalMessage('닉네임을 입력해주세요.');
      setShowModal(true);
      return;
    }
    if (!content.trim()) {
      setModalMessage('내용을 입력해주세요.');
      setShowModal(true);
      return;
    }
    addFanLetter(nickname, content, selectedMember);
    setNickname('');
    setContent('');

    // 보내기 성공했을 때 메시지 설정 및 모달 표시
    setModalMessage('팬레터가 성공적으로 전송되었습니다.');
    setShowModal(true);
  };

  /** 유효성 검사를 위한 모달창 닫는 로직 */
  const handleModalClose = () => {
    setShowModal(false);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 입력창에 자동으로 포커스
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <FormStyle onSubmit={handleFanLetterSubmit}>
        <InputGroupStyle>
          <LabelGroupStyle>닉네임</LabelGroupStyle>
          <NameStyle
            placeholder="최대 20자까지"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={20}
            ref={inputRef}
            type="text"
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
          <SubmitBtnStyle type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            팬레터 보내기
          </SubmitBtnStyle>
        </ButtonContainer>
      </FormStyle>
      {showModal && (
        <ValidationModal
          message={modalMessage}
          onConfirm={handleModalClose}
          onCancel={handleModalClose}
          showConfirmButton={false} // 취소 버튼 숨기기
        />
      )}
    </>
  );
}

export default InputFanLetter;
