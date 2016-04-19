import * as types from '../actions/actionTypes';

const initialState = {
  selectedTab: 'redTab',
  notifCount: 0,
  message: 'ss',
  timedata: []
};

export default function tabbar(state = initialState, action = {}) {
  switch (action.type) {
    case types.TABONE:
      return {
        ...state,
        selectedTab: 'blueTab',
        timedata: []
      }
    case types.TABTWO:
      return {
        ...state,
        selectedTab: 'redTab',
          notifCount: state.notifCount + 1,
          timedata: []
      }
    case types.TABTHREE:
      return {
        ...state,
        selectedTab: 'greenTab',
        timedata: []
      }
    case types.TABTWOBEGIN:
      return {
        ...state,
        selectedTab: 'redTab',
          notifCount: 0,
          message: '开始',
          timedata: []
      }
    case types.TABTWOSUCCESS:
      return {
        ...state,
        selectedTab: 'redTab',
          notifCount: 0,
          timedata: action.data.datas,
          message: '成功' + action.data.message
      }
    default:
      return state;
  }
}