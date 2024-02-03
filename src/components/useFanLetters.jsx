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

  /**팬레터 작성자 프사 색깔*/
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
    setFanLetters((prevLetters) => {
      const memberLetters = [...(prevLetters[member] || [])];
      memberLetters.push(newLetter);
      return {
        ...prevLetters,
        [member]: memberLetters
      };
    });
  };

  return [fanLetters, addFanLetter];
}

export default useFanLetters;
