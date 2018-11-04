import {combineReducers} from 'redux';

const statusInintState = {
  isStarted: false,
  isPaused: false
};
const paramsInitState = {
  time: 0,
  distance: 0,
  pace: 0,
  route: []
};

const params = (state = paramsInitState, action) => {
  switch (action.type) {
    case 'SET_RUN_DISTANCE':
      return {...state, distance: action.distance};
    case 'SET_RUN_PACE':
      return {...state, distance: action.distance};
    case 'SET_RUN_TIME':
      return {...state, distance: action.distance};
    case 'INCREMENT_RUN_TIME':
      return {...state, time: state.time + 1};
    case 'ADD_COORD_TO_ROUTE':
      return {...state, route: [...state.route, action.coord]};
    default:
      return state;
  }
};

const status = (state = statusInintState, action) => {
  switch (action.type) {
    case 'START_RUN':
      return {...state, isStarted: true};
    case 'PAUSE_RUN':
      return {...state, isPaused: true};
    case 'UNPAUSE_RUN':
      return {...state, isPaused: false};
    case 'STOP_RUN':
      return {...state, isPaused: false, isStarted: false};
    default:
      return state;
  }
};

export default combineReducers({
  status,
  params
});
