import {createAction} from '@reduxjs/toolkit';

const ActionType = {
  SET_ANGLE: `data/setAngle`,
  SET_LENGTH: `data/setLength`,
  SET_ATTRACTION: `data/setAttraction`,
};

const setAngle = createAction(ActionType.SET_ANGLE, (data) => {

  return {
    payload: data,
  };
});

const setLength = createAction(ActionType.SET_LENGTH, (data) => {

  return {
    payload: data,
  };
});

const setAttraction = createAction(ActionType.SET_ATTRACTION, (data) => {

  return {
    payload: data,
  };
});


export {
  setAngle,
  setLength,
  setAttraction,
};
