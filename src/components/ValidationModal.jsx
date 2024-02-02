import React from 'react';
import { ModalBackdrop, ModalContent } from '../styles/ValidationModalStyledComponent';

function ValidationModal({ message, onConfirm, onCancel }) {
  return (
    <ModalBackdrop>
      <ModalContent>
        <p>{message}</p>
        <button onClick={onConfirm}>확인</button>
        <button onClick={onCancel}>취소</button>
      </ModalContent>
    </ModalBackdrop>
  );
}

export default ValidationModal;
