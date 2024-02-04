import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FanLetterContext } from '../components/FanLetterContext';
import FanLetterEditDelete from '../components/FanLetterEditDelete';

function Detail() {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);
  const { fanLetters, updateFanLetter, deleteFanLetter } = useContext(FanLetterContext);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 해당하는 팬레터 데이터 로드
    for (const member in fanLetters) {
      const found = fanLetters[member].find((l) => l.id === id);
      if (found) {
        setLetter(found);
        break;
      }
    }
  }, [id, fanLetters]);

  if (!letter) {
    return <div>팬레터가 아직 없어요!</div>;
  }

  return (
    <div>
      <FanLetterEditDelete
        letter={letter} //prop으로 전달할 함수들
        updateFanLetter={updateFanLetter}
        deleteFanLetter={deleteFanLetter}
        setLetter={setLetter}
      />
    </div>
  );
}

export default Detail;
