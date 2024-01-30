import React from 'react';

function main() {
  return (
    <div>
      <h1>BTS 팬레터함</h1>
      <div>
        <button>정국</button>
        <button>뷔</button>
        <button>지민</button>
        <button>슈가</button>
        <button>진</button>
        <button>RM</button>
        <button>제이홉</button>
      </div>
      <div>
        <div>
          <label>닉네임 : </label>
          <input placeholder="최대 20자까지"></input>
        </div>
        <div>
          <label>내용 : </label>
          <input placeholder="최대 100자까지"></input>
        </div>
        <div>
          <label>보낼 멤버 : </label>
          <select>
            <option value="정국">정국</option>
            <option value="뷔">뷔</option>
            <option value="지민">지민</option>
            <option value="슈가">슈가</option>
            <option value="진">진</option>
            <option value="RM">RM</option>
            <option value="제이홉">제이홉</option>
          </select>
        </div>
        <button>팬레터 보내기</button>
      </div>
    </div>
  );
}

export default main;
