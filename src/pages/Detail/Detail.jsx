import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 팬레터 데이터 로드
    const fanLetters = JSON.parse(localStorage.getItem('fanLetters') || '{}');
    // 멤버들의 팬레터를 검색하여 해당 ID의 팬레터 찾기
    for (const member in fanLetters) {
      const found = fanLetters[member].find((l) => l.id === id);
      if (found) {
        setLetter(found);
        break;
      }
    }
  }, [id]);

  if (!letter) {
    return <div>팬레터가 아직 없어요!</div>;
  }

  return (
    <div>
      <button>메인으로</button>
      <p>{letter.nickname}</p>
      <p>{new Date(letter.sentTime).toLocaleString()}</p>
      <p>{letter.content}</p>
    </div>
  );
}

export default Detail;
