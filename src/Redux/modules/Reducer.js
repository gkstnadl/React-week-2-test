import {
  ADD_FAN_LETTER,
  UPDATE_FAN_LETTER,
  DELETE_FAN_LETTER,
  SET_MODAL_VISIBILITY,
  SET_MODAL_MESSAGE
} from './actionTypes';

const initialState = {
  fanLetters: JSON.parse(localStorage.getItem('fanLetters')) || {},
  showModal: false,
  modalMessage: ''
};

export const fanLetterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAN_LETTER:
      const { nickname, content, member, color } = action.payload;
      return {
        ...state,
        fanLetters: {
          ...state.fanLetters,
          [member]: [...(state.fanLetters[member] || []), { nickname, content, color }]
        }
      };
    case UPDATE_FAN_LETTER:
      const { id, newContent } = action.payload;
      const updatedFanLetters = { ...state.fanLetters };
      for (const member in updatedFanLetters) {
        const index = updatedFanLetters[member].findIndex((letter) => letter.id === id);
        if (index !== -1) {
          updatedFanLetters[member][index].content = newContent;
          break;
        }
      }
      return {
        ...state,
        fanLetters: updatedFanLetters
      };
    case DELETE_FAN_LETTER:
      const updatedFanLettersForDelete = { ...state.fanLetters };
      for (const member in updatedFanLettersForDelete) {
        updatedFanLettersForDelete[member] = updatedFanLettersForDelete[member].filter(
          (letter) => letter.id !== action.payload
        );
      }
      return {
        ...state,
        fanLetters: updatedFanLettersForDelete
      };
    case SET_MODAL_VISIBILITY:
      return {
        ...state,
        showModal: action.payload
      };
    case SET_MODAL_MESSAGE:
      return {
        ...state,
        modalMessage: action.payload
      };
    default:
      return state;
  }
};
