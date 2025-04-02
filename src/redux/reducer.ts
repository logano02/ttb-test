import { combineReducers } from '@reduxjs/toolkit';

import { ttbApi } from './rtk-query/baseUrl';
import authReducer from './store/auth/auth-slice';

// ----------------------------------------------------------------------

export const rootReducer = combineReducers({
  auth: authReducer,
  [ttbApi.reducerPath]: ttbApi.reducer,
});
