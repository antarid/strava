import { combineReducers } from 'redux';
import { actionTypes } from '../actions/run';

const paramsInitState = {
  time: 0,
  distance: 0,
  pace: 0,
  route: []
};

const params = (state = paramsInitState, action) => {
  switch (action.type) {
    case 'SET_RUN_DISTANCE':
      return { ...state, distance: action.distance };
    case 'SET_RUN_PACE':
      return { ...state, distance: action.distance };
    case 'SET_RUN_TIME':
      return { ...state, distance: action.distance };
    case 'INCREMENT_RUN_TIME':
      return { ...state, time: state.time + 1 };
    case 'ADD_COORD_TO_ROUTE':
      return { ...state, route: [...state.route, action.coord] };
    default:
      return state;
  }
};

const statusInitState = {
  isStarted: false,
  isPaused: false,
  timeInterval: null, // for setInterval, which runs every second
  historyInterval: null // for setInterval, where Location is obtained
};

const status = (state = statusInitState, action) => {
  switch (action.type) {
    case actionTypes.START_RUN:
      return { ...state, isStarted: true };
    case actionTypes.PAUSE_RUN:
      return {
        ...state,
        isPaused: true,
        timeInterval: null,
        historyInterval: null
      };
    case actionTypes.UNPAUSE_RUN:
      return {
        ...state,
        isPaused: false,
        timeInterval: action.timeInterval,
        historyInterval: action.timeInterval
      };
    case actionTypes.STOP_RUN:
      return { ...state, isStarted: false };
    default:
      return state;
  }
};

const historyInitState = [];

const history = (state = historyInitState, action) => {
  switch (action.type) {
    case actionTypes.HISTORY_INTERVAL_PASSED:
      return state.map((historySequence, index) =>
        index === state.length - 1
          ? [...historySequence, action.position]
          : historySequence
      );
    case actionTypes.UNPAUSE_RUN: // when we unpause run, we create another sequence of history
      return [...state, []];
    default:
      return state;
  }
};

export default combineReducers({
  status,
  params,
  history
});
