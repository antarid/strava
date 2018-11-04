export const startRun = () => ({
  type: 'START_RUN'
});
export const pauseRun = () => ({
  type: 'PAUSE_RUN'
});
export const unpauseRun = () => ({
  type: 'UNPAUSE_RUN'
});
export const stopRun = () => ({
  type: 'STOP_RUN'
});
export const addCoord = coord => ({
  coord,
  type: 'ADD_COORD_TO_ROUTE'
});

export const calculate = () => (dispatch, getStore) => {};

export const timer = () => (dispatch, getState) => {
  return setInterval(() => {
    if (!getState().run.status.isPaused) dispatch({type: 'INCREMENT_RUN_TIME'});
  }, 1000);
};

export const run = () => (dispatch, action) => {
  dispatch(startRun());
  const timerInterval = dispatch(timer());
};
