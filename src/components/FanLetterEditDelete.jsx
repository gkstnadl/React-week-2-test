import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ValidationModal from './ValidationModal';

function FanLetterEditDelete({ letter, updateFanLetter, deleteFanLetter }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(letter.content);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setShowModal(true);
    setActionType('edit');
  };

  const handleDeleteClick = () => {
    setShowModal(true);
    setActionType('delete');
  };

  /** 수정/삭제버튼을 클릭하면 모달을 표시해주는 로직. */
  const handleConfirm = () => {
    setShowModal(false);
    if (actionType === 'edit') {
      // 수정 로직. 편집 모드 세팅하기
      setIsEditing(true);
    } else if (actionType === 'delete') {
      deleteFanLetter(letter.id); // 삭제 로직 실행
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    updateFanLetter(letter.id, editedContent);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} />
        <button onClick={handleSave}>저장</button>
        <button onClick={() => setIsEditing(false)}>취소</button>
      </div>
    );
  }

  return (
    <div>
      <p>
        <strong>닉네임:</strong> {letter.nickname}
      </p>
      <p>
        <strong>내용:</strong> {letter.content}
      </p>
      <p>
        <strong>보낸 시간:</strong> {new Date(letter.sentTime).toLocaleString()}
      </p>
      <button onClick={handleEditClick}>수정</button>
      <button onClick={handleDeleteClick}>삭제</button>
      {showModal && (
        <ValidationModal
          message={actionType === 'edit' ? '수정하시겠습니까?' : '삭제하시겠습니까?'}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default FanLetterEditDelete;
