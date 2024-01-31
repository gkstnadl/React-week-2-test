import React from 'react';

function Detail({ letter, onClose, selectedMember }) {
  if (!letter) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <h2>{letter.nickname}</h2>
          <p>작성 시간</p>
        </div>
        <p>To.{selectedMember}</p>
        <div>{letter.content}</div>
      </div>
    </div>
  );
}

export default Detail;
