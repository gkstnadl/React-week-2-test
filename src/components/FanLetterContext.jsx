// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// /** 팬레터 데이터를 위한 Context 생성 */
// export const FanLetterContext = createContext();

// /** 팬레터 데이터를 제공해주는 컴포넌트 */
// const FanLetterProvider = ({ children }) => {
//   const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];
//   const [showModal, setShowModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   const [fanLetters, setFanLetters] = useState(() => {
//     const savedData = localStorage.getItem('fanLetters');
//     return savedData ? JSON.parse(savedData) : {};
//   });

//   // 로컬 스토리지에 저장하는 로직
//   useEffect(() => {
//     localStorage.setItem('fanLetters', JSON.stringify(fanLetters));
//   }, [fanLetters]);

//   /**팬레터 작성자 프사 컬러 랜덤 지정*/
//   function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

//   /**팬레터 추가(전송)하는 기능*/
//   const addFanLetter = (nickname, content, member) => {
//     const newLetter = {
//       id: uuidv4(),
//       nickname,
//       content,
//       sentTime: new Date().toISOString(),
//       color: getRandomColor()
//     };
//     setFanLetters((prevLetters) => ({
//       ...prevLetters,
//       [member]: [...(prevLetters[member] || []), newLetter]
//     }));
//   };

//   /** 팬레터 수정하는 로직 */
//   const updateFanLetter = (id, newContent) => {
//     const updatedFanLetters = { ...fanLetters };
//     for (const member in updatedFanLetters) {
//       const index = updatedFanLetters[member].findIndex((letter) => letter.id === id);
//       if (index !== -1) {
//         updatedFanLetters[member][index].content = newContent;
//         break;
//       }
//     }
//     setFanLetters(updatedFanLetters);
//   };

//   /** 팬레터 삭제하는 로직 */
//   const deleteFanLetter = (id) => {
//     const updatedFanLetters = { ...fanLetters };
//     for (const member in updatedFanLetters) {
//       updatedFanLetters[member] = updatedFanLetters[member].filter((letter) => letter.id !== id);
//     }
//     setFanLetters(updatedFanLetters);
//   };

//   // Context에서 제공될 값
//   const contextValue = {
//     fanLetters,
//     members, // 멤버 이름 정의한 함수
//     addFanLetter, // 팬레터 추가 함수
//     updateFanLetter, // 팬레터 수정 함수
//     deleteFanLetter, // 팬레터 삭제 함수
//     showModal, // 모달 표시 상태
//     setShowModal, // 모달 표시 상태 변경 함수
//     modalMessage, // 모달 메시지
//     setModalMessage // 모달 메시지 변경 함수
//   };

//   return <FanLetterContext.Provider value={contextValue}>{children}</FanLetterContext.Provider>;
// };

// /** 팬레터에 접근하기 위한 훅 설정 */
// export const useFanLetters = () => useContext(FanLetterContext);
