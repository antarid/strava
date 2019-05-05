import { Location } from 'expo';

export const actionTypes = {
  START_RUN: 'START_RUN',
  UNPAUSE_RUN: 'UNPAUSE_RUN',
  PAUSE_RUN: 'PAUSE_RUN',
  STOP_RUN: 'STOP_RUN',
  INCREMENT_RUN_TIME: 'INCREMENT_RUN_TIME',
  HISTORY_INTERVAL_PASSED: 'HISTORY_INTERVAL_PASSED'
};

export const startRun = () => dispatch => {
  dispatch({ type: actionTypes.START_RUN });
  dispatch(unpauseRun());
};

export const unpauseRun = () => dispatch => {
  const timeInterval = setInterval(() => {
    dispatch({ type: actionTypes.INCREMENT_RUN_TIME });
  }, 1000);

  const historyInterval = setInterval(async () => {
    const position = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
      maximumAge: 0,
      timeInterval: 2000,
      distanceInterval: 5
    });
    dispatch({ type: actionTypes.HISTORY_INTERVAL_PASSED, position });
  }, 2000);

  dispatch({ type: actionTypes.UNPAUSE_RUN, timeInterval, historyInterval });
};

export const pauseRun = () => (dispatch, getState) => {
  const { timeInterval, historyInterval } = getState().run.status;
  clearInterval(timeInterval);
  clearInterval(historyInterval);
  dispatch({ type: actionTypes.PAUSE_RUN });
};

export const stopRun = () => dispatch => {
  dispatch(pauseRun());
  dispatch({ type: actionTypes.STOP_RUN });
};
