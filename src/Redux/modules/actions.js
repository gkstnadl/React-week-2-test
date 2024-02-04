import {
  ADD_FAN_LETTER,
  UPDATE_FAN_LETTER,
  DELETE_FAN_LETTER,
  SET_MODAL_VISIBILITY,
  SET_MODAL_MESSAGE
} from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

/**팬레터 작성자 프사 컬러 랜덤 지정*/
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const addFanLetter = (nickname, content, member) => {
  const newLetter = {
    id: uuidv4(),
    nickname,
    content,
    sentTime: new Date().toISOString(),
    color: getRandomColor() // 여기서 getRandomColor() 함수 호출
  };

  return {
    type: ADD_FAN_LETTER,
    payload: { ...newLetter, member }
  };
};

export const updateFanLetter = (id, newContent) => ({
  type: UPDATE_FAN_LETTER,
  payload: { id, newContent }
});

export const deleteFanLetter = (id) => ({
  type: DELETE_FAN_LETTER,
  payload: id
});

export const setModalVisibility = (showModal) => ({
  type: SET_MODAL_VISIBILITY,
  payload: showModal
});

export const setModalMessage = (message) => ({
  type: SET_MODAL_MESSAGE,
  payload: message
});