import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useFanLetters(initialValue = {}) {
  const [fanLetters, setFanLetters] = useState(() => {
    /**로컬 스토리지에서 팬레터 데이터 관리하기*/
    const savedData = localStorage.getItem('fanLetters');
    return savedData ? JSON.parse(savedData) : {};
  });

  useEffect(() => {
    //팬레터 데이터가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('fanLetters', JSON.stringify(fanLetters));
  }, [fanLetters]);

  /**팬레터 추가(전송)하는 기능*/
  const addFanLetter = (nickname, content, member) => {
    const newLetter = { id: uuidv4(), nickname, content };
    setFanLetters((prevLetters) => ({
      ...prevLetters,
      [member]: [...(prevLetters[member] || []), newLetter]
    }));
  };

  return [fanLetters, addFanLetter];
}

export default useFanLetters;
