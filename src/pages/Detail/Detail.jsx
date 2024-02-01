import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/reset.css';
import FanLetterEditDelete from '../../components/FanLetterEditDelete';

function Detail() {
  const { id } = useParams();
  const [letter, setLetter] = useState(null);
  const [fanLetters, setFanLetters] = useState({});

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

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

  /** 팬레터 수정하는 로직 */
  const updateFanLetter = (id, newContent) => {
    let updatedFanLetters = JSON.parse(localStorage.getItem('fanLetters')) || {};
    for (const member in updatedFanLetters) {
      const index = updatedFanLetters[member].findIndex((letter) => letter.id === id);
      if (index !== -1) {
        updatedFanLetters[member][index].content = newContent;
        setLetter({ ...updatedFanLetters[member][index] }); // 현재 보여지는 팬레터 업데이트
        break;
      }
    }
    localStorage.setItem('fanLetters', JSON.stringify(updatedFanLetters));
    setFanLetters(updatedFanLetters);
  };

  /** 팬레터 삭제하는 로직 */
  const deleteFanLetter = (id) => {
    let fanLetters = JSON.parse(localStorage.getItem('fanLetters')) || {};
    for (const member in fanLetters) {
      fanLetters[member] = fanLetters[member].filter((letter) => letter.id !== id);
    }
    localStorage.setItem('fanLetters', JSON.stringify(fanLetters));
    navigate('/');
  };

  return (
    <div>
      <button onClick={goToHome}>메인으로</button>
      <FanLetterEditDelete letter={letter} updateFanLetter={updateFanLetter} deleteFanLetter={deleteFanLetter} />
    </div>
  );
}

export default Detail;
