import React from 'react';

function Detail() {
  return (
    <div className="modal">
      <button>메인으로</button>
      <div className="modal-content">
        <span className="close">&times;</span>
        <h2>팬레터 상세보기</h2>
        <p>
          <strong>닉네임:</strong>
        </p>
        <p>
          <strong>내용:</strong>
        </p>
      </div>
    </div>
  );
}

export default Detail;
