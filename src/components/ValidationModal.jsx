import React from 'react';

function ValidationModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </div>
  );
}

export default ValidationModal;
