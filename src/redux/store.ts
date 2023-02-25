import {configureStore} from '@reduxjs/toolkit';
import {RajaongkirSlice} from './features/RajaongkirSlices';
import userReducer from './features/userSlices';

export default configureStore({
  reducer: {
    user: userReducer,
    [RajaongkirSlice.reducerPath]: RajaongkirSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(RajaongkirSlice.middleware),
});
