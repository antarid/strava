const init = {
  isStarted: false,
  isPaused: false
  // time: 0,
  // distance: 0,
  // pace: 0,
  // diffPace: []
};

export default (state = init, action) => {
  switch (action.type) {
    case 'START_RUN':
      return {...state, isStarted: true};
    case 'PAUSE_RUN':
      return {...state, isPaused: false};
    case 'STOP_RUN':
      return {...state, isPaused: false, isStarted: false};
    default:
      return state;
  }
};
