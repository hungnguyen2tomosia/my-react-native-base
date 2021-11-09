import produce from 'immer';
import {RootActionTypes} from '@redux/actionTypes';

export const createResetableState = initialState => reducer =>
  produce((state, action) => {
    switch (action.type) {
      case RootActionTypes.RESET_STATE:
        Object.entries(initialState).forEach(([key, value]) => {
          if (key !== 'internetConnected') {
            state[key] = value;
          }
        });
        break;
      default:
        return reducer(state, action);
    }
  }, initialState);
