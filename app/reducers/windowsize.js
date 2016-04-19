import * as types from '../actions/actionTypes';

const initialState = {
  windowSize: {
    w: 100,
    h: 100
  }
};

export default function windowsize(state = initialState, action = {}) {
  switch (action.type) {
    case types.WINDOWINCREMENT:
      return {
        ...state,
        windowSize: {
          w: state.windowSize.w + 15,
          h: state.windowSize.h + 15
        }
      }
    default:
      return state;
  }
}