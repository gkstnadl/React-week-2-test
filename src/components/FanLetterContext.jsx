import React, { createContext, useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

/** 팬레터 데이터를 위한 Context 생성 */
export const FanLetterContext = createContext();

/** 팬레터 데이터를 제공해주는 컴포넌트 */
export const FanLetterProvider = ({ children }) => {
  const [fanLetters, setFanLetters] = useState(() => {
    const savedData = localStorage.getItem('fanLetters');
    return savedData ? JSON.parse(savedData) : {};
  });

  // 로컬 스토리지에 저장하는 로직
  useEffect(() => {
    localStorage.setItem('fanLetters', JSON.stringify(fanLetters));
  }, [fanLetters]);

  /**팬레터 작성자 프사 컬러 랜덤 지정*/
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /**팬레터 추가(전송)하는 기능*/
  const addFanLetter = (nickname, content, member) => {
    const newLetter = {
      id: uuidv4(),
      nickname,
      content,
      sentTime: new Date().toISOString(),
      color: getRandomColor()
    };
    setFanLetters((prevLetters) => ({
      ...prevLetters,
      [member]: [...(prevLetters[member] || []), newLetter]
    }));
  };

  return <FanLetterContext.Provider value={{ fanLetters, addFanLetter }}>{children}</FanLetterContext.Provider>;
};

/** 팬레터에 접근하기 위한 훅 설정 */
export const useFanLetters = () => {
  const context = useContext(FanLetterContext);
  if (!context) {
    throw new Error('팬레터 데이터를 제공할 수 없습니다.');
  }
  return context;
};
