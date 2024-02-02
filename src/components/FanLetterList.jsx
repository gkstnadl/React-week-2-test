import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFanLetters from './useFanLetters';
import {
  ListTitleStyle,
  ListBodyStyle,
  ListContentStyle,
  LetterContent,
  ListNameTimeStyle,
  ListTimeStyle,
  LetterImgNameStyle
} from '../styles/FanLetterListStyledComponent';

function FanLetterList({ selectedMember }) {
  const [fanLetters, addFanLetter] = useFanLetters(); // useFanLetters 훅 사용
  const navigate = useNavigate();
  const { memberName } = useParams(); // URL에서 멤버 이름을 받음
  const memberToShow = selectedMember || memberName; // prop이 있으면 그걸 사용, 없으면 URL에서 가져옴
  const [filteredFanLetters, setFilteredFanLetters] = useState([]);

  /** 클릭하면 id를 기반으로 상세페이지가 열리는 로직 */
  const handleLetterClick = (id) => {
    navigate(`/detail/${id}`);
  };

  /**팬레터 작성자 프사 색깔 랜덤*/
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    // selectedMember 또는 memberName이 변경될 때 실행됩니다.
    const memberToShow = selectedMember || memberName;
    setFilteredFanLetters(fanLetters[memberToShow] || []);
  }, [selectedMember, memberName, fanLetters]);

  return (
    <ListBodyStyle>
      <ListTitleStyle>{memberToShow}님께 온 팬레터</ListTitleStyle>
      {filteredFanLetters.map((letter) => (
        <ListContentStyle key={letter.id} onClick={() => handleLetterClick(letter.id)}>
          <ListNameTimeStyle>
            <LetterImgNameStyle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill={getRandomColor()}
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <p>{letter.nickname}</p>
            </LetterImgNameStyle>
            <ListTimeStyle>{new Date(letter.sentTime).toLocaleString()}</ListTimeStyle>
          </ListNameTimeStyle>
          <LetterContent>{letter.content}</LetterContent>
        </ListContentStyle>
      ))}
    </ListBodyStyle>
  );
}

export default FanLetterList;
