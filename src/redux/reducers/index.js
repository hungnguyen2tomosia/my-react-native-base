import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

import authReducer from './AuthReducer';
const storage = AsyncStorage;

const persistKeys = {
  // root: 'root',
  // auth: 'auth'
};

// const authPersistConfig = {
//   key: persistKeys.auth,
//   storage,
//   whitelist: ['isAuthenticated', 'token'],
// };

const appReducer = combineReducers({
  // auth: persistReducer(authPersistConfig, authReducer),
});

const persistConfig = {
  key: persistKeys.root,
  storage,
  whitelist: [],
};

export default persistReducer(persistConfig, appReducer);
