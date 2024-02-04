// src/redux/actions.js
import {
  ADD_FAN_LETTER,
  UPDATE_FAN_LETTER,
  DELETE_FAN_LETTER,
  SET_MODAL_VISIBILITY,
  SET_MODAL_MESSAGE
} from './actionTypes';

export const addFanLetter = (nickname, content, member, color) => ({
  type: ADD_FAN_LETTER,
  payload: { nickname, content, member, color }
});

export const updateFanLetter = (id, newContent) => ({
  type: UPDATE_FAN_LETTER,
  payload: { id, newContent }
});

export const deleteFanLetter = (id) => ({
  type: DELETE_FAN_LETTER,
  payload: id
});

export const setModalVisibility = (isVisible) => ({
  type: SET_MODAL_VISIBILITY,
  payload: isVisible
});

export const setModalMessage = (message) => ({
  type: SET_MODAL_MESSAGE,
  payload: message
});
