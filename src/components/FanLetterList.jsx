import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FanLetterContext } from './FanLetterContext';
import {
  ListTitleStyle,
  ListBodyStyle,
  ListContentStyle,
  LetterContentStyle,
  ListNameTimeStyle,
  ListTimeStyle,
  LetterImgNameStyle
} from '../styles/FanLetterListStyledComponent';

function FanLetterList({ selectedMember }) {
  const { fanLetters } = useContext(FanLetterContext);
  const navigate = useNavigate();
  const { memberName } = useParams(); // URL에서 멤버 이름을 받음
  // selectedMember이라는 prop이 있으면 그걸 사용, 없으면 URL의 memberName에서 가져옴
  const memberToShow = selectedMember || memberName;
  const [filteredFanLetters, setFilteredFanLetters] = useState([]);

  /** 클릭하면 id를 기반으로 상세페이지가 열리는 로직 */
  const handleLetterClick = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    // selectedMember 또는 memberName이 변경될 때 실행됩니다.
    setFilteredFanLetters(fanLetters[memberToShow] || []);
  }, [fanLetters, memberToShow]);

  return (
    <ListBodyStyle>
      <ListTitleStyle>{memberToShow}님께 온 팬레터</ListTitleStyle>
      {filteredFanLetters.map((letter) => (
        <ListContentStyle key={letter.id} onClick={() => handleLetterClick(letter.id)}>
          <ListNameTimeStyle>
            <LetterImgNameStyle>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={letter.color} viewBox="0 0 16 16">
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
          <LetterContentStyle>{letter.content}</LetterContentStyle>
        </ListContentStyle>
      ))}
    </ListBodyStyle>
  );
}

export default FanLetterList;
