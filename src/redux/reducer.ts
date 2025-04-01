import { combineReducers } from '@reduxjs/toolkit';

import { traceCoApi } from './rtk-query/baseUrl';
import authReducer from './store/auth/auth-slice';

// ----------------------------------------------------------------------

export const rootReducer = combineReducers({
  auth: authReducer,
  [traceCoApi.reducerPath]: traceCoApi.reducer,
});
