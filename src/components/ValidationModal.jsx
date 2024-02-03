import React from 'react';
import {
  ModalBackdropStyle,
  ModalContentStyle,
  ModalMessageStyle,
  CancelClickBtnStyle,
  ConfirmClickBtnStyle
} from '../styles/ValidationModalStyledComponent';

// showCancelButton라는 prop을 추가해 이 prop이 true일때만 표시하도록 동작
function ValidationModal({ message, onConfirm, onCancel, showConfirmButton = true }) {
  return (
    <ModalBackdropStyle>
      <ModalContentStyle>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(232,232,232)" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
        </svg>
        <ModalMessageStyle>{message}</ModalMessageStyle>
        <div>
          <CancelClickBtnStyle onClick={onCancel}>취소</CancelClickBtnStyle>
          {showConfirmButton && <ConfirmClickBtnStyle onClick={onConfirm}>확인</ConfirmClickBtnStyle>}
        </div>
      </ModalContentStyle>
    </ModalBackdropStyle>
  );
}

export default ValidationModal;
