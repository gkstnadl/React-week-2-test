import React, { useState } from 'react';
import ValidationModal from './ValidationModal';
import {
  FanLetterDetailStyle,
  LetterProfileStyle,
  LetterTimeStyle,
  LetterDetailContentStyle,
  EditClickBtnStyle,
  DeleteClickBtnStyle,
  BtnsStyle,
  LetterContentTextStyle
} from '../styles/FanLetterEditDeleteStyledComponent';

function FanLetterEditDelete({ letter, updateFanLetter, deleteFanLetter }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(letter.content);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(null);

  /** 삭제버튼 클릭하면 모달표시하고, 액션타입은 edit를 세팅 */
  const handleEditClick = () => {
    setShowModal(true);
    setActionType('edit');
  };

  /** 삭제버튼 클릭하면 모달표시하고, 액션타입은 delete를 세팅 */
  const handleDeleteClick = () => {
    setShowModal(true);
    setActionType('delete');
  };

  /** 수정/삭제버튼에 대한 모달.액션타입(수정/삭제)에 따라 세팅될 렌더링이 달라짐 */
  const handleConfirm = () => {
    setShowModal(false);
    if (actionType === 'edit') {
      // 수정 로직. 편집 모드 세팅하기. 수정이 아니라 delete면 삭제로직 실행
      setIsEditing(true);
    } else if (actionType === 'delete') {
      deleteFanLetter(letter.id); // 삭제 로직 실행
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  /** 저장버튼을 누르면 수정된 부분이 업데이트되는 로직이 실행됨 */
  const handleSave = () => {
    updateFanLetter(letter.id, editedContent);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <FanLetterDetailStyle>
        <LetterProfileStyle>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill={letter.color} viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          <div>
            <p>{letter.nickname}</p>
            <LetterTimeStyle>{new Date(letter.sentTime).toLocaleString()}</LetterTimeStyle>
          </div>
        </LetterProfileStyle>
        <LetterContentTextStyle value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
        <BtnsStyle>
          <DeleteClickBtnStyle onClick={() => setIsEditing(false)}>취소</DeleteClickBtnStyle>
          <EditClickBtnStyle onClick={handleSave}>저장</EditClickBtnStyle>
        </BtnsStyle>
      </FanLetterDetailStyle>
    );
  }

  return (
    <FanLetterDetailStyle>
      <LetterProfileStyle>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill={letter.color} viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
        <div>
          <p>{letter.nickname}</p>
          <LetterTimeStyle>{new Date(letter.sentTime).toLocaleString()}</LetterTimeStyle>
        </div>
      </LetterProfileStyle>
      <LetterDetailContentStyle>{letter.content}</LetterDetailContentStyle>
      <BtnsStyle>
        <DeleteClickBtnStyle onClick={handleDeleteClick}>삭제</DeleteClickBtnStyle>
        <EditClickBtnStyle onClick={handleEditClick}>수정</EditClickBtnStyle>
      </BtnsStyle>
      {showModal && (
        <ValidationModal
          message={actionType === 'edit' ? '수정하시겠습니까?' : '삭제하시겠습니까?'}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </FanLetterDetailStyle>
  );
}

export default FanLetterEditDelete;
