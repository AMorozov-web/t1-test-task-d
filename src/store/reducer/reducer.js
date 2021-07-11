import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_ANGLE, DEFAULT_ATTRACTION, DEFAULT_LENGTH} from '../../constants';
import {setAngle, setAttraction, setLength} from '../action/action';

const initialState = {
  angle: DEFAULT_ANGLE,
  length: DEFAULT_LENGTH,
  attraction: DEFAULT_ATTRACTION,
};

const mainReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAngle, (state, action) => {
    state.angle = action.payload;
  });
  builder.addCase(setLength, (state, action) => {
    state.length = action.payload;
  });
  builder.addCase(setAttraction, (state, action) => {
    state.attraction = action.payload;
  });
});

export {mainReducer};
